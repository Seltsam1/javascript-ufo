# javascript-ufo

Generates a table of data on a website, filters based on user choice

## Getting Started

This project involvedc using javascript, HTML, CSS, and D3.js

Javascript code will append a data of supposed UFO sightings to a table on the provided webpage, and permit user to fitler results based on date

- To get started, download the folder structure:
  - index.html is the webpage
  - /static/css profides formatting for webpage
  - /static/images contains images for webpage
  - /static/js contains two files and represents the bulk of the project as described in Features section 

## Features

- data.js is the datafile used in the project
- app.js features:
  - Utilizes D3 to select specific portions of the HTML
  - Function ufoSightings populates table
    - Will refresh table data
    - Iterate through each object in data.jd
    - Appends new rows and cells
    - Utilizes Object and forEach methods
  - Function runDate will change table data based on user input
    - Code for event handlers will listen for events (button click or form submit)
    - Will prevent page from refreshing when user enters input into form
    - User can select a specific date (format style M/DD/YYYY)
    - Code will filter data based on input date
    - Calls ufoSightings to re-populate table with filtered data


## Licensing by:

The code in this project is licensed under MIT license.
