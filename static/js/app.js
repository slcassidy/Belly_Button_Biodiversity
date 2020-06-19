
//Get data to be used
d3.json("data/samples.json").then((importedData) => {
    console.log("***********names*******************")
    var names = importedData.names;
    // names = names.slice(0, 10);
    // console.log(names)

    // console.log("***********samples*******************")
    var data = importedData.samples;
    // console.log(data)



    // console.log("***********metadata*******************")
    var meta = importedData.metadata;
    // console.log(meta)

    //Put data in the drop-down list
    list(names)

    // selected()
    // selected(getData())
    // selected()
    var check = getData()
    console.log(`Check information for selected item ${check}`)

    //slim down selection
    function filterData(data) {
        return data.id == check;
        }

    var samples_id = data.filter(filterData);
    // console.log(samples_id)

    //Call the bar chart
    barChart(samples_id)

    // var data_id = data.id == getData()
    // console.log(`Data from sample set ${data_id}`)

});

console.log(`${data}`)
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
// function selected(){
    d3.selectAll("#selDataset").on("change", getData);
    
// }


function getData() {
    //Get the field selected
    console.log("Clicked function works!!")
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
function barChart(barInfo){
    console.log(`Barchart START`)
    console.log(barInfo)

    var sample_val = barInfo.map(row => row.sample_values.slice(0, 10)); 
    // console.log('*********sample_val**************');
    // console.log(sample_val);

    var otu_ids_output = barInfo.map(row => row.otu_ids.slice(0, 10));
    // console.log('*********sample_otu_ids_outputval**************');
    // console.log(otu_ids_output);

    var otu_lab = barInfo.map(row => row.otu_labels.slice(0, 10))
    // console.log('*********otu_lab**************')
    // console.log(otu_lab);

    //horizontal Bar chart
    //   // Trace1 for the lab Data
    var trace1 = {
        x: sample_val,
        y: otu_ids_output,
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
        width: 500
    };

    //   // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", chartData, layout);

}


//Create a function to display the bubble chart
//Use data based on the selected data


//Create function to display the Demographic Info


//Display each key-value pair from the metadata JSON object somewhere on the page.