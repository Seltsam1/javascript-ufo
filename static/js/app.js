// variable for data from data.js
let tableData = data;

// reference table body tag
let tbody = d3.select("tbody");

// arrow function to loop through tableData
const ufoSightings = (item) => {
    // append tr tag to table to add rows
    let row =  tbody.append("tr");
    
    // arrow function to loop through keys and values
    const ufoDetails = ([key, value]) => {
        // append cells to rows and add text
        let cell = row.append("td").text(value)
    }
    // call ufoDetails functions for each item entry
    Object.entries(item).forEach(ufoDetails)
};

// call function on tableData to populate table
tableData.forEach(ufoSightings);


// Form and Button functions with filtering by date

// select the button
let button = d3.select("#filter-btn");
// select the form
let form = d3.select("#filter-form");

// event handler function for the form
function filterDate() {

    //prevent page from refreshing
    d3.event.preventDefault()

    // select input element
    let inputElement = d3.select("#datetime");

    // Store date value of input
    let inputDate = inputElement.property("value");
    alert(inputDate);
}

// Event handlers for clicking button or submitting form
button.on("click", filterDate);
form.on("submit", filterDate);