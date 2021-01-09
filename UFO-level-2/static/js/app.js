// from data.js
let tableData = data;

// YOUR CODE HERE!
// Select the table body to insert the results, text field input and button
let tableBody = d3.select("#results");
let input = d3.select("#datetime");
let btn = d3.select("#filter-btn");
let allBtn = d3.select("#all-btn");
// Select new options for Level 2
let cityDrop = d3.select("#cityDrop");
let stateDrop = d3.select("#stateDrop");
let countryDrop = d3.select("#countryDrop");
let shapeDrop = d3.select("#shapeDrop");
let durationDrop = d3.select("#durationDrop");


/**
 * Receives the array of data and append it to the table
 * @param {array} data an array of data 
 */
function populateTable(data){
    // get all the elements in the array
    data.forEach(d=>{
        // create a row to insert data
        let row = tableBody.append("tr")
        // for each data from the array we get the information and put it in a cell
        for (x in d){
            row.append("td").text(d[x])
        }
    });
}

/**
 * Receives the array of data and populates the dropdown Cities menu
 * @param {Array} data an array of data 
 */
function populateCities(data){
    // get all the cities in the array without repeated values
    let cities = Array.from(new Set(data.map(d=>d.city)))
    // console.log(cities)
    // first one empty
    cityDrop.append("option").text("").attr("value","");
    // populate options
    for(c in cities){
        cityDrop.append("option").text(cities[c]).attr("value",cities[c]);
    }
}

/**
 * Receives the array of data and populates the dropdown State menu
 * @param {Array} data an array of data 
 */
function populateStates(data){
    // get all the cities in the array without repeated values
    let states = Array.from(new Set(data.map(d=>d.state)))
    // first one empty
    stateDrop.append("option").text("").attr("value","");
    // populate options
    for(s in states){
        stateDrop.append("option").text(states[s]).attr("value",states[s]);
    }
}


/**
 * Receives the array of data and populates the dropdown Country menu
 * @param {Array} data an array of data 
 */
function populateCountries(data){
    // get all the cities in the array without repeated values
    let countries = Array.from(new Set(data.map(d=>d.country)))
    // first one empty
    countryDrop.append("option").text("").attr("value","");
    // populate options
    for(c in countries){
        countryDrop.append("option").text(countries[c]).attr("value",countries[c]);
    }
}

/**
 * Receives the array of data and populates the dropdown Shapes menu
 * @param {Array} data an array of data 
 */
function populateShapes(data){
    // get all the cities in the array without repeated values
    let shapes = Array.from(new Set(data.map(d=>d.shape)))
    // first one empty
    shapeDrop.append("option").text("").attr("value","");
    // populate options
    for(s in shapes){
        shapeDrop.append("option").text(shapes[s]).attr("value",shapes[s]);
    }
}

/**
 * Receives the array of data and populates the dropdown Duration menu
 * @param {Array} data an array of data 
 */
function populateDurations(data){
    // get all the cities in the array without repeated values
    let durations = Array.from(new Set(data.map(d=>d.durationMinutes)))
    // first one empty
    durationDrop.append("option").text("").attr("value","");
    // populate options
    for(d in durations){
        durationDrop.append("option").text(durations[d]).attr("value",durations[d]);
    }
}


// charge all the information into the table and dropdown menus at the begining
populateTable(tableData);
populateCities(tableData);
populateStates(tableData);
populateCountries(tableData);
populateShapes(tableData);
populateDurations(tableData);


/**
 * Receives one object from the array to decide if it's property datetime 
 * is equal to the date that the user entered
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForDates(dato){
    // grab the value of the input field
    let inputDate = input.node().value;
    console.log(`----- Input Date: ${inputDate} --------`)
    // returns the results where datetime is equal to what is in the text field
    return dato.datetime == inputDate;
}

/**
 * Receives one object from the array to decide if it's property city 
 * is equal to the city that the user entered
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForCities(dato){
    // grab the value of the input field
    let inputCity = cityDrop.node().value;
    console.log(`----- Input City: ${inputCity} --------`)
    // returns the results where datetime is equal to what is in the text field
    return dato.city == inputCity;
}

/**
 * Receives one object from the array to decide if it's property state 
 * is equal to the state that the user entered
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForStates(dato){
    // grab the value of the input field
    let inputState = stateDrop.node().value;
    console.log(`----- Input State: ${inputState} --------`)
    // returns the results where datetime is equal to what is in the text field
    return dato.state == inputState;
}

/**
 * Receives one object from the array to decide if it's property country 
 * is equal to the country that the user entered
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForCountries(dato){
    // grab the value of the input field
    let inputCountry = countryDrop.node().value;
    console.log(`----- Input Country: ${inputCountry} --------`)
    // returns the results where datetime is equal to what is in the text field
    return dato.country == inputCountry;
}

/**
 * Receives one object from the array to decide if it's property shape 
 * is equal to the shape that the user entered
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForShapes(dato){
    // grab the value of the input field
    let inputShape = shapeDrop.node().value;
    console.log(`----- Input Shape: ${inputShape} --------`)
    // returns the results where datetime is equal to what is in the text field
    return dato.shape == inputShape;
}

/**
 * Receives one object from the array to decide if it's property duration 
 * is equal to the duration that the user entered
 * @param {object} dato 
 * @returns true or false to create an array and filter
 */
function filterForDurations(dato){
    // grab the value of the input field
    let inputDuration = durationDrop.node().value;
    console.log(`----- Input Duration: ${inputDuration} --------`)
    // returns the results where datetime is equal to what is in the text field
    return dato.durationMinutes == inputDuration;
}


/**
 * function to handle click on the button Filter Table - this function prints the filtered results on table
 */
btn.on("click", function() {
    // clear the existing output
    tableBody.html("")
    // make a copy from the original data
    let filtered = tableData;

    // values from filters
    let inputDate = input.node().value;
    let inputCity = cityDrop.node().value;
    let inputState = stateDrop.node().value;
    let inputCountry = countryDrop.node().value;
    let inputShape = shapeDrop.node().value;
    let inputDuration = durationDrop.node().value;
    
    // get filtered data by date
    if (inputDate != ""){
        filtered = filtered.filter(filterForDates)
    }
    // filter for city
    if (inputCity != ""){
        filtered = filtered.filter(filterForCities)
    }
    // filter for states
    if (inputState != ""){
        filtered = filtered.filter(filterForStates)
    }
    // filter for country
    if (inputCountry != ""){
        filtered = filtered.filter(filterForCountries)
    }
    // filter for shape
    if (inputShape != ""){
        filtered = filtered.filter(filterForShapes)
    }
    // filter for duration
    if (inputDuration != ""){
        filtered = filtered.filter(filterForDurations)
    }
    
    console.log(filtered)
    // print the results on table
    populateTable(filtered)
  });

  
  /**
   * function to handle click on the button All - this function gets all the results back
   */
  allBtn.on("click", function() {
    // clear the existing output
    tableBody.html("")
    // print the original results on table
    populateTable(tableData)
  });


