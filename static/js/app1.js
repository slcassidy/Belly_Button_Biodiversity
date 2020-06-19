// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    console.log("***********samples*******************")
    var data = importedData.samples;
    console.log(data)

    console.log("***********metadata*******************")
    var meta = importedData.metadata;
    console.log(meta)

    console.log("***********names*******************")
    var names = importedData.names;
    // names = names.slice(0, 10);
    console.log(names)

    //Create the drop-down list
      d3.select("#selDataset").selectAll("select")
        .data(names)
        .enter()
        .append("option")
        .text(function(d) {
          return d;
        })


        // Sort the data array using the value
    // data.sort(function(a, b) {
    //   return parseFloat(b.sample_values) - parseFloat(a.sample_values);
    // });
      //   // Slice the first 10 objects for plotting
    // data = data.slice(0, 10);
    // console.log("************names******************")
    // var data1 = importedData.names;
    // console.log(data1)
    console.log("************IDs******************")
    // var samples_val = data.map(data => data.samples_values);
    var samples_id = data.map(row => row.id);
    console.log(samples_id)
    console.log("***********otu labels*******************")
    var otu_lab = data.map(row => row.otu_labels);
    console.log(otu_lab)
    console.log("**************otu ids****************")
    var otu_ids = data.map(row => row.otu_ids);
    console.log(otu_ids)
    console.log("**************sample_values****************")
    var sample_val = data.map(row => row.sample_values);
    console.log(sample_val)

    var us = Object.values(data.us);

//horizontal Bar chart
    // Barchart(selected)  
    // Trace1 for the lab Data
    var trace1 = {
      x: sample_val,
      y: otu_ids,
      // text: otu_lab,
      // name: "Greek",
      type: "bar",
      orientation: "h"
    };
  
  //   // data
    var chartData = [trace1];
  
  //   // Apply the group bar mode to the layout
    var layout = {
      title: "Top 10 Belly Button Bio Diversity sample values",
      yaxis: { title: "OTU ids"},
      xaxis: { title: "Sample Values"},
      height: 500,
      width: 500
    };
  
  //   // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", chartData, layout);

    //Bubbles below
// Next chart is bubble chart
var trace2 = {
  x: otu_ids,
  y: sample_val,
  mode: 'markers',
  text: otu_lab,
  marker: {
    size: sample_val,
    color: otu_ids
  }
};

var bubbleChart = [trace2];

var layout1 = {
  title: 'Marker Size',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bubble', bubbleChart, layout1);
    

  });
  
  // On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

//   function Barchart(selected){

//     //horizontal Bar chart
//   //   // Trace1 for the lab Data
//   var trace1 = {
//     x: sample_val,
//     y: otu_ids,
//     // text: otu_lab,
//     // name: "Greek",
//     type: "bar",
//     orientation: "h"
//   };

// //   // data
//   var chartData = [trace1];

// //   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Top 10 Belly Button Bio Diversity sample values",
//     yaxis: { title: "OTU ids"},
//     xaxis: { title: "Sample Values"},
//     height: 500,
//     width: 500
//   };

// //   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("bar", chartData, layout);
//   }
//check out code

// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.node().value;

//   var CHART = d3.selectAll(".well").node();

  
  // // Initialize x and y arrays
  // var x = [];
  // var y = [];

  // switch(dataset) {
  //   case "dataset1":
  //     x = [1, 2, 3, 4, 5];
  //     y = [1, 2, 4, 8, 16];
  //     break;

  //   case "dataset2":
  //     x = [10, 20, 30, 40, 50];
  //     y = [1, 10, 100, 1000, 10000];
  //     break;

  //   case "dataset3":
  //     x = [100, 200, 300, 400, 500];
  //     y = [10, 100, 50, 10, 0];
  //     break;

  //   default:
  //     x = [1, 2, 3, 4, 5];
  //     y = [1, 2, 3, 4, 5];
  //     break;
  // }


  // // Note the extra brackets around 'x' and 'y'
  // Plotly.restyle(CHART, "x", [x]);
  // Plotly.restyle(CHART, "y", [y]);
// }


