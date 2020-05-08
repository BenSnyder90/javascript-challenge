// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("#form")

button.on("click", runEnter);
form.on("submit", runEnter);

ufoTable = d3.select("#ufo-table");

function populateTable() {

    ufoTable.html("");
    

        //Add the header back to the empty table
        ufoTableHeader = ufoTable.append('thead').append('tr');
        ufoTableHeader.append('th').attr('class', 'table-head').text("Date");
        ufoTableHeader.append('th').attr('class', 'table-head').text("City");
        ufoTableHeader.append('th').attr('class', 'table-head').text("State");
        ufoTableHeader.append('th').attr('class', 'table-head').text("Country");
        ufoTableHeader.append('th').attr('class', 'table-head').text("Shape");
        ufoTableHeader.append('th').attr('class', 'table-head').text("Duration");
        ufoTableHeader.append('th').attr('class', 'table-head').text("Comments");

        //Add tbody tag to append the filtered data

        ufoTable.append('tbody');
        tableData.forEach(sighting => {
        
            row = ufoTable.append('tr').attr('class', 'table-body');

            Object.entries(sighting).forEach(([key,value]) => {
                row.append('td').text(value);
            });
        })
}

populateTable();

function runEnter() {

    //Prevents page from refreshing by default
    d3.event.preventDefault();

    //Selects the element of each form field in their own variables
    var dateInputElement = d3.select("#datetime");
    var cityInputElement = d3.select("#city-form");
    var stateInputElement = d3.select("#state-form");
    var countryInputElement = d3.select("#country-form");
    var shapeInputElement = d3.select("#shape-form");

    //Assigns the value of the each form to a separate variable
    var dateInputValue = dateInputElement.property('value');
    var cityInputValue = cityInputElement.property('value');
    var stateInputValue = stateInputElement.property('value');
    var countryInputValue = countryInputElement.property('value');
    var shapeInputValue = shapeInputElement.property('value');
    
    //Prints the date in the console
    console.log(`Filters: ${dateInputValue}, ${cityInputValue}, ${stateInputValue}, ${countryInputValue}, ${shapeInputValue}`);

    function emptySearch(){
        if(dateInputValue === "" &&
            cityInputValue === "" &&
            stateInputValue === "" &&
            countryInputValue === "" &&
            shapeInputValue === ""){
                return true;
            }
        else {
            return false;
        }
    }

    //Checks if any data was entered in the filter box.
    //If no data was entered, repopulates the table to default and exits the function
    if (emptySearch()){
        alert ("No values entered. Resetting table...");
        console.log("No values entered in filter");
        console.log("Repopulating table");
        populateTable();
    }
    
    //If there is something in the form, the function continues
    else{

        /*Uses filter function and arrow function to run through the data
        and stores the entries that match the input date in a new array*/
        
        //stores table data in a new variable
        let filteredData = tableData;
        //Check first input variable to see if it is null
        
        //If empty, continue
        if ( dateInputValue === ""){
        
        }
        //Else, filter data var filteredDate = tableData.filter(input => input.datetime === dateInputValue );
        else {
            filteredData = filteredData.filter(input => input.datetime === dateInputValue)
        }
        //Check 2nd input variable
        if ( cityInputValue === ""){
        //If empty, continue    
        
        }
        //Else, filter data
        else {
            filteredData = filteredData.filter(input => input.city === cityInputValue)
        }
        //Check 3nd input variable
        if ( stateInputValue === ""){
            //If empty, continue    
            
            }
            //Else, filter data
        else {
                filteredData = filteredData.filter(input => input.state === stateInputValue)
            }
        //Check 4th input variable
        if ( countryInputValue === ""){
            //If empty, continue    
        
            }
            //Else, filter data
        else {
                filteredData = filteredData.filter(input => input.country === countryInputValue)
            }
            //Check 5th input variable
        if ( shapeInputValue === ""){
                //If empty, continue    
            
            }
        //Else, filter data
        else {
                filteredData = filteredData.filter(input => input.shape === shapeInputValue)
        } 
        
        
        /////////////////
        //Populate the rows
        if ( filteredData.length === 0){
            console.log("No data on that date exists");
            window.alert("No data exists with that filter");
        }

        else {
            //Reset the table on each click
            ufoTable.html("");
            
            //Add the header back to the empty table
            ufoTableHeader = ufoTable.append('thead').append('tr');
            ufoTableHeader.append('th').attr('class', 'table-head').text("Date");
            ufoTableHeader.append('th').attr('class', 'table-head').text("City");
            ufoTableHeader.append('th').attr('class', 'table-head').text("State");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Country");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Shape");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Duration");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Comments");

            //Add tbody tag to append the filtered data
            ufoTable.append('tbody');

            //Adds a row for each entry in the filtered data
            filteredData.forEach(date => {
                row = ufoTable.select('tbody').append('tr').attr('class','table-body');

                //Runs through the values of each entry and adds them to the row
                Object.entries(date).forEach(([key,value]) => {
                    row.append('td').text(value);
                })
            })
        
        }
        }
}

