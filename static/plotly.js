function buildCharts(area_id) {

  // Get url of chicago and selected neighborhood
  var chiURL = "/neighborhood/0"
  var URL = `/neighborhood/${area_id}`;

  // Create empty arrays
  var titles = [];
  var nbValues = [];
  var chiValues = [];

  // Get json data from urls
  d3.json(chiURL).then(chiData => {
    d3.json(URL).then(nbData => {

      // Add json data to arrays
      chiValues.push(chiData.hardship_index);
      nbValues.push(nbData.hardship_index);

      chiValues.push(chiData.crowding);
      nbValues.push(nbData.crowding);

      chiValues.push(chiData.below_poverty);
      nbValues.push(nbData.below_poverty);

      chiValues.push(Math.round(chiData.income/1000,1));
      nbValues.push(Math.round(nbData.income/1000,1));

      // Scale units based on how many in selected neighborhood
      if (nbData.units > 1000) {
        chiValues.push(Math.round(chiData.units/25,1));
        nbValues.push(Math.round(nbData.units/25,1));
        titles = [
          'Hardship Index',
          'Household Crowding (%)',
          'Below Poverty (%)',
          'Income (thousands)',
          'Per 25 Units',
          'Hardship Index'
        ];
      }
      else {
        chiValues.push(Math.round(chiData.units/10,1));
        nbValues.push(Math.round(nbData.units/10,1));
        titles = [
          'Hardship Index',
          'Household Crowding (%)',
          'Below Poverty (%)',
          'Income (thousands)',
          'Per 10 Units',
          'Hardship Index'
        ];
      }

      // Repeat first index of array to complete circle
      chiValues.push(chiData.hardship_index);
      nbValues.push(nbData.hardship_index);

      // Create both radar plots
      chiTrace = {
        type: 'scatterpolar',
        r: chiValues,
        theta: titles,
        fill: 'toself',
        name: 'Avg. Chicago Neighborhood',
        hovertemplate: '<b>%{theta}</b><br>' +
        '%{r}' + '<extra></extra>'
      };

      nbTrace = {
        type: 'scatterpolar',
        r: nbValues,
        theta: titles,
        fill: 'toself',
        name: nbData.community,
        hovertemplate: '<b>%{theta}</b><br>' +
          '%{r}' + '<extra></extra>'
      };

      plotData = [chiTrace, nbTrace];

      // Format layout
      layout = {
        polar: {
          radialaxis: {
            visible: true,
            range: [0,100]
          }
        }
      };

      // Create plotly plots
      Plotly.newPlot("plot-id", plotData, layout);

    });
  });
}

buildCharts(63);
