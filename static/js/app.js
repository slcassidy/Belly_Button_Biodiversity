
//Get data to be used
// $(document).ready(function(){
    
// }

function init() {
    // initialisation stuff here
    d3.json("data/samples.json").then((importedData) => {
        console.log("***********names*******************")
        var names = importedData.names;
        // names = names.slice(0, 10);
        // console.log(names)
        
        // console.log("***********samples*******************")
        // var data = importedData.samples;
        // // console.log(data)
        //     //Limit to 10
        // var sample_val = samples_id.map(row => row.sample_values); 
        // // console.log('*********sample_val**************');
        // // console.log(sample_val);

        // var otu_ids_output = samples_id.map(row => row.otu_ids);
        // // console.log('*********sample_otu_ids_outputval**************');
        // // console.log(otu_ids_output);

        // var otu_lab = samples_id.map(row => row.otu_labels);
    
        // console.log("***********metadata*******************")
        // var meta = importedData.metadata;
        // console.log(meta)
    
        //Put data in the drop-down list
        list(names);
        // bubbleChart(sample_val, otu_ids_output);

        dataSelected(0,1);


    

    
    });

  }
function dataSelected(check, test){
d3.json("data/samples.json").then((importedData) => {
    // console.log("***********names*******************")
    // var names = importedData.names;
    // names = names.slice(0, 10);
    // console.log(names)

    console.log("***********samples*******************")
    var data = importedData.samples;
    console.log(data)

    // console.log("***********metadata*******************")
    var meta = importedData.metadata;
    // console.log(meta)

    //Put data in the drop-down list
    // list(names)

    // selected()
    // console.log(selected())
    // selected(getData())
    // selected()
    // var check = getData()
    // console.log(`Check information for selected item ${check}`)
    if (test == 0){
        console.log("selected page")
        function filterData(data) {
            return data.id == check;
            }
    
        var samples_id = data.filter(filterData);
    
        // console.log(samples_id)
        
        //Limit to 10
        var sample_val10 = samples_id.map(row => row.sample_values.slice(0, 10)); 
        // console.log('*********sample_val**************');
        // console.log(sample_val);
    
        var otu_ids_output10 = samples_id.map(row => row.otu_ids.slice(0, 10));
        // console.log('*********sample_otu_ids_outputval**************');
        // console.log(otu_ids_output);
    
        var otu_lab10 = samples_id.map(row => row.otu_labels.slice(0, 10));
    
    
        //Call the bar chart
        // barChart(samples_id);
        // barChart(sample_val10, otu_ids_output10, otu_lab10);
        barChart(sample_val10, otu_ids_output10);
    
        
        //Call the bubble chart
        bubbleChart(sample_val10, otu_ids_output10);
    
        //demographic
        var meta_id = meta.filter(filterData);
        demoInfo(meta_id);

    }    
     else console.log("intial page")
        console.log("intial page2")
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

//Create a function to get the selected data
// Update all of the plots any time that a new sample is selected.
// On change to the DOM, call getData()
function selected(){
    d3.selectAll("#selDataset").on("change", getData); 
    var check = getData()
    return check; 

}

d3.selectAll("#selDataset").on("click", function() {

    console.log("testing");
    var check = selected();
    console.log(`click operator ${check}`);
    dataSelected(check, 0);

    // return true;
});


function getData() {
    //Get the field selected
    // console.log("Clicked function works!!")
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.node().value;
    console.log(`Clicked on an item ${dataset}`)
    // var data_id = data.id == getData()
    // console.log(`Data from sample set ${data_id}`)
    return dataset
};


//Create a function to display the bar chart
//Use data based on the selected data
// function barChart(barInfo){
// function barChart(sample_val, otu_ids_output, otu_lab){
function barChart(sample_val, otu_ids_output){   
    // console.log(sample_val[0])
    // console.log(otu_ids_output[0])

//************TESTING CODE START ****************/    
    // console.log(`Barchart START`)
    // console.log(barInfo)

    // var sample_val = barInfo.map(row => row.sample_values.slice(0, 10)); 
    // // console.log('*********sample_val**************');
    // // console.log(sample_val);

    // var otu_ids_output = barInfo.map(row => row.otu_ids.slice(0, 10));
    // // console.log('*********sample_otu_ids_outputval**************');
    // // console.log(otu_ids_output);

    // var otu_lab = barInfo.map(row => row.otu_labels.slice(0, 10))
    // console.log('*********otu_lab**************')
    // console.log(otu_lab);
//************TESTING CODE END ****************/  

    //horizontal Bar chart
    //   // Trace1 for the lab Data
    var trace1 = {
        x: sample_val[0],
        y: otu_ids_output[0],
        // text: otu_lab,
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
function bubbleChart(sample_val, otu_ids){


    var trace2 = {
        x: otu_ids[0],
        // x: [434, 234],
        y: sample_val[0],
        // y: [123, 121],
        mode: 'markers',
        // text: otu_lab,
        marker: {
          size: sample_val[0],
        //   size: [123, 121],
          color: otu_ids[0]
        //   color:[434, 234],
        }
      };
      
      var bubbleChart = [trace2];
      
      var layout1 = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 1200
      };
      
      Plotly.newPlot('bubble', bubbleChart, layout1);
}

//Create function to display the Demographic Info
function demoInfo(dataNames){

    console.log(dataNames)
    d3.select("#sample-metadata").selectAll("div")
    .data(dataNames)
    .enter()
    .append("div")
    .style("font-size", "11px")
    .html(function(d) {
        return `AGE: ${d.age}` + '</br>'+
            
            `BBTYPE: ${d.bbtype}` + '</br>'+

            `ETHNICITY: ${d.ethnicity}` + '</br>'+

            `GENDER: ${d.gender}` + '</br>'+

            `LOCATION: ${d.location}`
            ;
        // return d.bbtype;
    });
};



init()
//Display each key-value pair from the metadata JSON object somewhere on the page.