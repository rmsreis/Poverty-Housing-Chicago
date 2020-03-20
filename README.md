### Poverty-Housing-Chicago

----------------------

**Description:**

We explored how effective the city of Chicago has been in placing affordable housing in areas deemed of high poverty index since the 
2008-2012 City of Chicago data.

<b>Datasets were downloaded from:</b>

- Affordable Housing:

https://data.cityofchicago.org/Community-Economic-Development/Affordable-Rental-Housing-Developments/s6ha-ppgi
API ENDPOINT: https://data.cityofchicago.org/resource/s6ha-ppgi.json

- Hardship Indicators Census Data:

https://data.cityofchicago.org/Health-Human-Services/Census-Data-Selected-socioeconomic-indicators-in-C/kn9c-c2s2 
API ENDPOINT: https://data.cityofchicago.org/resource/kc9i-wq85.json

- Neighbourhood KML Data:

https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Neighborhoods-KML/buma-fjbv


For more information about affordable housing in Chicago: 
https://www.chicago.gov/city/en/depts/dcd/supp_info/affordable_rentalhousingresourcelist.html

### Tools used:
--------------------------

  Data ETL using Python/Jupyter Notebook
  Flask, SQLAlchemy, HTML, D3.js, Javascript, Heroku

###  Data Visualization:
-------
  
  A KML data of Chicago neighbourhoods is overlaid by default over the street map <a href="https://leafletjs.com/"> leaflet </a> of city 
  of Chicago. 
  
 - <b> Usage:</b>
 
  The user may click within any of the neighbourhoods to filter the data shown in the dashboard to the selected neighbourhood. 
  
  App is available on Heroku:
  
  https://poverty-housing-chicago.herokuapp.com/
  
  Enjoy!
