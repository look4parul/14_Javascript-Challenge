let tbody = d3.select("thead");

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
    // Select the input date 
    let inputDate = d3.select("#datetime").property("value");
    // Display the input date
    console.log("Input date is: ", inputDate);
        
    // Filter Data with datetime equal to input value
    let filteredData = data.filter(e => e.datetime === inputDate);
    //  Display the filtered data for the entered date on the web page
    console.log("filtered data is: " , filteredData);
    
    filteredData.forEach(e => {
    // Append one table row for each UFO Sighting object for the date entered when button is clicked
    let row = d3.select("thead").append("tr", true)
    row.append("th").text(e.datetime)
    console.log(" Date value at column is: ", row.append("th").text(e.datetime))
    row.append("th").text(e.city)
    row.append("th").text(e.state)
    row.append("th").text(e.country)
    row.append("th").text(e.shape)
    row.append("th").text(e.durationMinutes)
    row.append("th").text(e.comments)
    });
});
    