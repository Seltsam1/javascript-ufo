// variable for data from data.js
let tableData = data;

// reference table body tag
let tbody = d3.select("tbody");

// arrow function to populate table
const ufoSightings = (item) => {

    // refresh table and remove data
    tbody.html("");

    item.forEach(function(ufoRow) {

        // append tr tag to table to add rows
        let row = tbody.append("tr");
    
        // function to loop through keys and values
        Object.values(ufoRow).forEach(function(values) {
            // append cells to rows and add text
            let cell = row.append("td").text(values);
        });
    });
};
// call function on tableData to populate table when page loads
ufoSightings(tableData);


// Form and Button functions with filtering

// select the button
let button = d3.select("#filter-btn");
// select the form
let form = d3.select("#filter-form");

// event handler function for the form
function runDate() {

    //prevent page from refreshing
    d3.event.preventDefault()

    // select input element
    let inputElement = d3.select("#datetime");

    // Store date value of input
    let inputDate = inputElement.property("value");
    
    // filter data to match by date entered
    let filteredData = tableData.filter(ufo => ufo.datetime === inputDate)
    console.log(filteredData)

    // call function on filteredData to populate table
    ufoSightings(filteredData)
};

// Event handlers for clicking button or submitting form
button.on("click", runDate);
form.on("submit", runDate);