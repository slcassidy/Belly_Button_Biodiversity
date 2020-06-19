
//Get data to be used
d3.json("data/samples.json").then((importedData) => {
    console.log("***********names*******************")
    var names = importedData.names;
    // names = names.slice(0, 10);
    console.log(names)

    console.log("***********samples*******************")
    var data = importedData.samples;
    console.log(data)

    console.log("***********metadata*******************")
    var meta = importedData.metadata;
    console.log(meta)

        //Create the drop-down list
        d3.select("#selDataset").selectAll("select")
        .data(names)
        .enter()
        .append("option")
        .text(function(d) {
            return d;
        })

    var data_id = data.id == getData()
    console.log(`Data from sample set ${data_id}`)

});

//Create a function to get the selected data
// Update all of the plots any time that a new sample is selected.
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

function getData() {
    //Get the field selected
    console.log("Clicked function works!!")
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.node().value;
    console.log(`Clicked on an item ${dataset}`)
    var data_id = data.id == getData()
    console.log(`Data from sample set ${data_id}`)
};


//Create a function to display the bar chart
//Use data based on the selected data



//Create a function to display the bubble chart
//Use data based on the selected data


//Create function to display the Demographic Info


//Display each key-value pair from the metadata JSON object somewhere on the page.