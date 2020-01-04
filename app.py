import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect, desc

from flask import Flask, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)


#Setup database

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///chicago.sqlite"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

Housing = Base.classes.housing
Neighborhoods = Base.classes.neighborhoods


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/neighborhood/<area>")
def neighborhood_data(area):

    # Select columns from neighborhood table
    sel =[Neighborhoods.CommunityAreaNumber,
    Neighborhoods.COMMUNITYAREANAME,
    Neighborhoods.PERCENTOFHOUSINGCROWDED,
    Neighborhoods.PERCENTHOUSEHOLDSBELOWPOVERTY,
    Neighborhoods.PERCAPITAINCOME,
    Neighborhoods.HARDSHIPINDEX]

    # Query for selected columns
    results = db.session.query(*sel).filter(Neighborhoods.CommunityAreaNumber == area).all()

    # Query units from housing table
    # Query to find average of Chicago neighborhoods
    if area == str(0):
        results2 = db.session.query(func.sum(Housing.Units)).all()
        units = round(results2[0][0] / 77, 0)
    # Query for neighborhood
    else:
        results2 = db.session.query(func.sum(Housing.Units)).group_by(Housing.CommunityAreaNumber).filter(Housing.CommunityAreaNumber == area).all()
        # Zero units if query returns an empty set
        if results2 == []:
            units = 0
        else:
            units = results2[0][0]

    # Create a dictionary entry for each row of neighborhood data
    nb_data = {}
    for result in results:
        nb_data["id"] = result[0]
        nb_data["community"] = result[1]
        nb_data["crowding"] = result[2]
        nb_data["below_poverty"] = result[3]
        nb_data["income"] = result[4]
        nb_data["hardship_index"] = result[5]

    nb_data["units"] = units

    # Return dictionary as json
    return jsonify(nb_data)

@app.route("/location")
def location():
    """Return the full table."""
    # Use Pandas to perform the sql query
    sel = [
        Housing.Latitude,
        Housing.Longitude,
    ]

    results = db.session.query(*sel).all()

    # Create a dictionary entry for each row of metadata information
    housing_data = {}
    for result in results:
        housing_data["Latitude"] = result[0]
        housing_data["Longitude"] = result[1]

    # print(housing_data)
    return jsonify(housing_data)

if __name__ == "__main__":
    app.run()
