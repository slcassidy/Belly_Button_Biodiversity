

function init() {
    // initialisation stuff here
    d3.json("data/samples.json").then((importedData) => {
        console.log("***********names*******************")   
        var names = importedData.names;

        //Put data in the drop-down list
        list(names);
        // bubbleChart(sample_val, otu_ids_output);

        var firstName = names[0];
        console.log(firstName);

        dataSelected(firstName,1);
    
    });

  }
function dataSelected(check, test){
d3.json("data/samples.json").then((importedData) => {
    // console.log("***********names*******************")
    // var names = importedData.names;
    // names = names.slice(0, 10);
    // console.log(names)

    // console.log("***********samples*******************")
    var data = importedData.samples;
    // console.log(data)

    // console.log("***********metadata*******************")
    var meta = importedData.metadata;
    // console.log(meta)

    function filterData(data) {
        return data.id == check;
        }
    var data_data = data.filter(filterData) ;
    // var otu_ids_output_ALL = data.map(row => row.otu_ids);
    // console.log('*********Filter first item**************');
    // console.log(data_data)

    //demographic
    // var meta_id = "";
    // demoInfo(meta_id);
    //Limit to 10
    var sample_val_int = data_data.map(row => row.sample_values.slice(0, 10)); 
    // console.log('*********sample_val**************');
    // console.log(sample_val);

    var otu_ids_output_int = data_data.map(row => row.otu_ids.slice(0, 10));
    // console.log('*********sample_otu_ids_outputval**************');
    // console.log(otu_ids_output);

    var otu_lab_int = data_data.map(row => row.otu_labels.slice(0, 10));
    // console.log('*********sample_otu_ids_outputval**************');
    // console.log(otu_ids_output);    



    //Call the bar chart
    barChart(sample_val_int, otu_ids_output_int, otu_lab_int);

    //demographic
    var meta_id = meta.filter(filterData);
    demoInfo(meta_id);


    if (test == 0){
        console.log("selected page")

        // function filterData(data) {
        //     return data.id == check;
        //     }
    
        var samples_id = data.filter(filterData);
    
        // console.log(samples_id)

        //All the data separated out
        var sample_val_ALL = samples_id.map(row => row.sample_values); 
        // console.log('*********sample_val_ALL**************');
        // console.log(sample_val_ALL);
    
        var otu_ids_output_ALL = samples_id.map(row => row.otu_ids);
        // console.log('*********sample_otu_ids_outputval**************');
        // console.log(otu_ids_output_ALL);
    
        var otu_lab_ALL = samples_id.map(row => row.otu_labels);
        // console.log('*********sample_labels**************');
        // console.log(otu_lab_ALL);
        bubbleChart(sample_val_ALL, otu_ids_output_ALL, otu_lab_ALL);
        
        // //Limit to 10
        // var sample_val10 = samples_id.map(row => row.sample_values.slice(0, 10)); 
        // // console.log('*********sample_val**************');
        // // console.log(sample_val);
    
        // var otu_ids_output10 = samples_id.map(row => row.otu_ids.slice(0, 10));
        // // console.log('*********sample_otu_ids_outputval**************');
        // // console.log(otu_ids_output);
    
        // var otu_lab10 = samples_id.map(row => row.otu_labels.slice(0, 10));
        // // console.log('*********sample_otu_ids_outputval**************');
        // // console.log(otu_ids_output);    
    
        // //Call the bar chart
        // // barChart(samples_id);
        // // barChart(sample_val10, otu_ids_output10, otu_lab10);
        // barChart(sample_val10, otu_ids_output10, otu_lab10);
    
           

        // //demographic
        // var meta_id = meta.filter(filterData);
        // demoInfo(meta_id);

    }    
     else{ 
        console.log("intial page")

        //All the data separated out
        var sample_val_ALL = data.map(row => row.sample_values); 
        // console.log('*********sample_val_ALL**************');
        // console.log(sample_val_ALL);
    
        var otu_ids_output_ALL = data.map(row => row.otu_ids);
        // console.log('*********sample_otu_ids_outputval**************');
        // console.log(otu_ids_output_ALL);
    
        var otu_lab_ALL = data.map(row => row.otu_labels);
        // console.log('*********sample_labels**************');
        // console.log(otu_lab_ALL);

        //Call the bubble chart
        bubbleChart(sample_val_ALL, otu_ids_output_ALL, otu_lab_ALL);

        // function filterData(data) {
        //     return data.id == check;
        //     }

        // var samples2 = data.filter(data[0]);
        // var data_data = data.filter(filterData) ;
        // // var otu_ids_output_ALL = data.map(row => row.otu_ids);
        // // console.log('*********Filter first item**************');
        // // console.log(data_data)

        // //demographic
        // // var meta_id = "";
        // // demoInfo(meta_id);
        // //Limit to 10
        // var sample_val_int = data_data.map(row => row.sample_values.slice(0, 10)); 
        // // console.log('*********sample_val**************');
        // // console.log(sample_val);
    
        // var otu_ids_output_int = data_data.map(row => row.otu_ids.slice(0, 10));
        // // console.log('*********sample_otu_ids_outputval**************');
        // // console.log(otu_ids_output);
    
        // var otu_lab_int = data_data.map(row => row.otu_labels.slice(0, 10));
        // // console.log('*********sample_otu_ids_outputval**************');
        // // console.log(otu_ids_output);    



        // //Call the bar chart
        // barChart(sample_val_int, otu_ids_output_int, otu_lab_int);

        // //demographic
        // var meta_id = meta.filter(filterData);
        // demoInfo(meta_id);
    }   
    // }
    

    //slim down selection
    

});

};

//Create Drop-down list
function list(dataNames){
    //Create the drop-down list
    d3.select("#selDataset").selectAll("select")
    .data(dataNames)
    .enter()
    .append("option")
    .text(function(d) {
        return d;
    })
}


function getData() {
    //Get the field selected
    // console.log("Clicked function works!!")
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.node().value;
    // console.log(`Clicked on an item ${dataset}`)
    // var data_id = data.id == getData()
    // console.log(`Data from sample set ${data_id}`)
    return dataset
};


//Create a function to display the bar chart
function barChart(sample_val, otu_ids_output, otu_lab){   
    //horizontal Bar chart
    //   // Trace1 for the lab Data
    var trace1 = {
        x: sample_val[0],
        y: otu_ids_output[0],
        text: otu_lab,
        // name: "Greek",
        type: "bar",
        orientation: "h"
    };
    console.log(trace1)
    //   // data
    var chartData = [trace1];

    //   // Apply the group bar mode to the layout
    var layout = {
        title: "Top 10 Belly Button Bio Diversity sample values",
        yaxis: { title: "OTU ids"},
        xaxis: { title: "Sample Values"},
        height: 500,
        width: 800,
    };

    //   // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", chartData, layout);

}


//Create a function to display the bubble chart
//Use data based on the selected data
function bubbleChart(sample_val, otu_ids, label){
    console.log("bubble chart")

    var trace2 = {
        x: otu_ids[0],
        // x: [434, 234],
        y: sample_val[0],
        // y: [123, 121],
        mode: 'markers',
        text: label[0],
        marker: {
          size: sample_val[0],
        //   size: [123, 121],
        //   text: label[0],
          color: otu_ids[0]
        //   color:[434, 234],
        }
      };
      
      var bubbleChart = [trace2];
      
      var layout1 = {
        title: 'OTU ID Sample Sizes',
        showlegend: false,
        height: 600,
        width: 1200
      };
      
      Plotly.newPlot('bubble', bubbleChart, layout1);
}

//Create function to display the Demographic Info
function demoInfo(dataNames){
    // console.log("************DemoInfo************")
    // // Then, select the unordered list element by class name
    var newPanel = d3.select("#sample-metadata");
    newPanel.html("");

    console.log(dataNames)
    d3.select("#sample-metadata").selectAll("div")
    .data(dataNames)
    .enter()
    .append("div")
    .classed("demograph", true)
    .style("font-size", "11px")
    // console.log("**********add data back***********")
    .html(function(d) {
        // console.log(` dataInfo in Function: ${d[0].location}`);
        // console.log(` dataInfo in Function: ${d.age}`);
        return `AGE: ${d.age}` + '</br>'+
            
            `BBTYPE: ${d.bbtype}` + '</br>'+

            `ETHNICITY: ${d.ethnicity}` + '</br>'+

            `GENDER: ${d.gender}` + '</br>'+

            `LOCATION: ${d.location}`
            ;
        // return d.location;

    });
};

function optionChanged(newData) {
    // buildChart(newSample);
    // console.log("*****SampleData*********");
    // console.log(newSample);
    dataSelected(newData, 0);
    // demoInfo(newSample);
  }

init()
//Display each key-value pair from the metadata JSON object somewhere on the page.