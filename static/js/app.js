// Select the table part from the index.html
let tbody = d3.select("thead");

// Append the data from data.js file to the web page
data.forEach(e => {
    let row = tbody.append("tr", true)
    row.append("th").text(e.datetime)
    row.append("th").text(e.city)
    row.append("th").text(e.state)
    row.append("th").text(e.country)
    row.append("th").text(e.shape)
    row.append("th").text(e.durationMinutes)
    row.append("th").text(e.comments)

});

// Select the button
let button = d3.select("#filter-btn").on("click", function() {
    // Hide the table data on the web page
    tbody.html("");
    // Select the input date 
    let inputDate = d3.select("#datetime").property("value");
    // Display the input date
    console.log("Input date is: ", inputDate);

    //  Error handling for blank input date
    if (inputDate == '') {
        alert("Please enter a date value in the search filter box!!!!!");
        // Code to add table header
        let tbody = d3.select("thead");
        let row = tbody.append("tr", true)
        row.append("th").text("Date")
        row.append("th").text("City")
        row.append("th").text("State")
        row.append("th").text("Country")
        row.append("th").text("Shape")
        row.append("th").text("Duration")
        row.append("th").text("Comments")
        
        // Append the table with data from data.js file 
        data.forEach(e => {
            let row = tbody.append("tr", true)
            row.append("th").text(e.datetime)
            row.append("th").text(e.city)
            row.append("th").text(e.state)
            row.append("th").text(e.country)
            row.append("th").text(e.shape)
            row.append("th").text(e.durationMinutes)
            row.append("th").text(e.comments)

        });
    }  
    // Code to append data for the entered data in filter box 
    else{
        // Filter Data with datetime equal to input value
        let filteredData = data.filter(e => e.datetime === inputDate);
        //  Display the filtered data for the entered date on the web page
        console.log("filtered data is: " , filteredData);
        // Error handling for invalid date or date where no UFO records are present in data.js file
        if (filteredData.length === 0){
            alert("No UFO sightings found for the entered date")}
        else {    
        // Code to add table header
        let row = tbody.append("tr", true)
                row.append("th").text("Date")
                row.append("th").text("City")
                row.append("th").text("State")
                row.append("th").text("Country")
                row.append("th").text("Shape")
                row.append("th").text("Duration")
                row.append("th").text("Comments")

            filteredData.forEach(e => {
                // Append one table row for each UFO Sighting object for the date entered when button is clicked
                let row = d3.select("thead").append("tr", true)
                row.append("th").text(e.datetime)
                row.append("th").text(e.city)
                row.append("th").text(e.state)
                row.append("th").text(e.country)
                row.append("th").text(e.shape)
                row.append("th").text(e.durationMinutes)
                row.append("th").text(e.comments)
            });
        }
    }
});    
        
