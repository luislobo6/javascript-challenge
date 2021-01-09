// from data.js
let tableData = data;

// YOUR CODE HERE!
// Select the table body to insert the results, text field input and button
let tableBody = d3.select("#results");
let input = d3.select("#datetime");
let btn = d3.select("#filter-btn");
let allBtn = d3.select("#all-btn");

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

// charge all the information into the table at the begining
populateTable(tableData);

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
 * function to handle click on the button Filter Table - this function prints the filtered results on table
 */
btn.on("click", function() {
    // clear the existing output
    tableBody.html("")
    // get filtered data
    let filtered = tableData.filter(filterForDates)
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


