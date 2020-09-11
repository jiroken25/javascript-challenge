// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var clear_button = d3.select("#clear-btn");

button.on("click", runEnter);
form.on("submit",runEnter);


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
  var form_state = document.getElementById("state");
  var form_country = document.getElementById("country");
  var form_city = document.getElementById("city");
  var form_shape = document.getElementById("shape");

form_datetime.value="";
form_state.value="";
form_country.value="";
form_city.value="";
form_shape.value="";
init();}

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var input_datetime = d3.select("#datetime");
    var input_city = d3.select("#city");
    var input_state = d3.select("#state");
    var input_country = d3.select("#country");
    var input_shape = d3.select("#shape");

  
    // Get the value property of the input element
    var inputValue_datetime = input_datetime.property("value");
    var inputValue_city = input_city.property("value");
    var inputValue_state = input_state.property("value");
    var inputValue_country = input_country.property("value");
    var inputValue_shape = input_shape.property("value");

  
    console.log(inputValue_country);
    console.log(tableData);

    var filteredData = tableData
  
    if (inputValue_datetime !== ""){
    filteredData = filteredData.filter(eachdata => eachdata.datetime === inputValue_datetime);};

    if (inputValue_city !== ""){
    filteredData = filteredData.filter(eachdata => eachdata.city === inputValue_city);};

    if (inputValue_state !== ""){
    filteredData = filteredData.filter(eachdata => eachdata.state === inputValue_state);};
    
    if (inputValue_country !== ""){
    filteredData = filteredData.filter(eachdata => eachdata.country === inputValue_country);};
    
    if (inputValue_shape !== ""){
    filteredData = filteredData.filter(eachdata => eachdata.shape === inputValue_shape);};

  
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

  

