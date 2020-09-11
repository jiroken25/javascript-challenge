// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);
var clear_button = d3.select("#clear-btn");

clear_button.on("click", clear_form)

function init(){

    var table = d3.select("#ufo-table").select("tbody");
  
    // remove any children from the list to
    table.html("");
    var i;
    for (i=0; i <tableData.length; i++){
    // append stats to the list
    var row = table.append("tr");
    row.append("td").text(`${tableData[i].datetime}`);
    row.append("td").text(`${tableData[i].city}`);
    row.append("td").text(`${tableData[i].state}`);
    row.append("td").text(`${tableData[i].country}`);
    row.append("td").text(`${tableData[i].shape}`);
    row.append("td").text(`${tableData[i].durationMinutes}`);
    row.append("td").text(`${tableData[i].comments}`);
  };


}

function clear_form(){
  var form_datetime = document.getElementById("datetime");


form_datetime.value="";

init();}

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData;

    if (inputValue !== ""){
      filteredData = filteredData.filter(eachdata => eachdata.datetime === inputValue);};

    console.log(filteredData);
  
    // Then, select the unordered list element by class name
    var table = d3.select("#ufo-table").select("tbody");
  
    // remove any children from the list to
    table.html("");
    
    var i;
    for (i=0; i <filteredData.length; i++){
    // append stats to the list
    var row = table.append("tr");
    row.append("td").text(`${filteredData[i].datetime}`);
    row.append("td").text(`${filteredData[i].city}`);
    row.append("td").text(`${filteredData[i].state}`);
    row.append("td").text(`${filteredData[i].country}`);
    row.append("td").text(`${filteredData[i].shape}`);
    row.append("td").text(`${filteredData[i].durationMinutes}`);
    row.append("td").text(`${filteredData[i].comments}`);
  };
};

init();

  

