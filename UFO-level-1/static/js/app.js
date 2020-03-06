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

    tbody.html("");
    // Select the input date 
    let inputDate = d3.select("#datetime").property("value");
    // Display the input date
    console.log("Input date is: ", inputDate);

    //  Check for blank input date
    if (inputDate == '') {
        alert("Please enter a date value in the search filter box!");
        let tbody = d3.select("thead");
        let row = tbody.append("tr", true)
        row.append("th").text("Date")
        row.append("th").text("City")
        row.append("th").text("State")
        row.append("th").text("Country")
        row.append("th").text("Shape")
        row.append("th").text("Duration")
        row.append("th").text("Comments")

        data.forEach(e => {
            let row = tbody.append("tr", true)
            // Date = row.append("th", true)
            // row.append("th").text("Date")
            row.append("th").text(e.datetime)
            row.append("th").text(e.city)
            row.append("th").text(e.state)
            row.append("th").text(e.country)
            row.append("th").text(e.shape)
            row.append("th").text(e.durationMinutes)
            row.append("th").text(e.comments)

        });
    }   
    else{
        // Filter Data with datetime equal to input value
        let filteredData = data.filter(e => e.datetime === inputDate);
        //  Display the filtered data for the entered date on the web page
        console.log("filtered data is: " , filteredData);
        if (filteredData.length === 0){
            alert("No UFO sightings found for the entered date")}
        else {    
            let row = tbody.append("tr", true)
                row.append("th").text("Date")
                row.append("th").text("City")
                row.append("th").text("State")
                row.append("th").text("Country")
                row.append("th").text("Shape")
                row.append("th").text("Duration")
                row.append("th").text("Comments")

            filteredData.forEach(e => {
                // console.log("row value is: ", row1);

                // Append one table row for each UFO Sighting object for the date entered when button is clicked
                let row = d3.select("thead").append("tr", true)
                // console.log("row: ", row);
                row.append("th").text(e.datetime)
                // console.log(" Date value at column is: ", row.append("th").text(e.datetime))
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
        
