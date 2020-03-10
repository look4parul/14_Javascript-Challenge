//  Code for no filter seleted
function checkNoSelection(value){
  if(value === "No Selection")
  {
    return undefined;
  }
  else
  {
    return value;
  }
}

//  Code for null values and fetching values from data.js 
function buildQuery(query){
  let queryval = {}
  if(query.datetime == null){}
    else{ queryval.datetime = query.datetime}
      if(query.state  == null){}
        else{queryval.state = query.state}
          if(query.city == null){}
            else{queryval.city = query.city}
              if(query.country  == null){}
                else{queryval.country = query.country}
                  if(query.shape  == null){}
                    else{queryval.shape = query.shape}
                      
                      return queryval;
                  } 

// Code for the Date field
const inputField = d3.select("#datetime");
input_date = inputField.value;
console.log(input_date)
inputField.on("change", function() {
 input_date =  d3.event.target.value;
 filtered_data = data.filter(function(e) {
   return e.datetime === d3.event.target.value;
 });
});

 // Code for new dropdown -cities

// Get unique cities 
let uniqueCities = [... new Set(data.map(x=>x.city))];
let selectedCity = d3.select("#selectCity").on("change", onchange); 
uniqueCities.unshift("No Selection");
var options1 = selectedCity
.selectAll('option')
.data(uniqueCities).enter()
.append('option')
.text(function (d) { return d; });   
   // Initialize
   (function() {
     input_city = document.getElementById('selectCity').value = 'benton';
   })();
   function onchange() {
     input_city = checkNoSelection(d3.select('#selectCity').property('value'))
   };

// Code for new dropdown -state
const uniqueStates = [... new Set(data.map(x=>x.state))];
let selectedState = d3.select("#selectState").on('change', onchangeState); 
uniqueStates.unshift("No Selection");
var options2 = selectedState
.selectAll('option')
.data(uniqueStates).enter()
.append('option')
.text(function (d) { return d; });
     // Initialize the date
     (function() {
       input_state = document.getElementById('selectState').value = 'ar';
     })();
     
     function onchangeState() {
       input_state = check(d3.select('#selectState').property('value'))
     };

// Code for new dropdown -country
const uniqueCountries = [... new Set(data.map(x=>x.country))];
var selectedCountry = d3.select("#selectCountry").on('change', onchangeCountry); 
uniqueCountries.unshift("No Selection");
let options3 = selectedCountry
.selectAll('option')
.data(uniqueCountries).enter()
.append('option')
.text(function (d) { return d; });

     // Initialize the country
     (function() {
       input_country = document.getElementById('selectCountry').value = 'us';
     })();

     //On eventchange
     function onchangeCountry() {  
       input_country = checkNoSelection(d3.select('#selectCountry').property('value'))
     };

// Code for new dropdown -country

const uniqueShape = [... new Set(data.map(x=>x.shape))];
let selectedShape = d3.select("#selectShape").on('change', onchangeShape); 
uniqueShape.unshift("No Selection");
let options4 = selectedShape
.selectAll('option')
.data(uniqueShape).enter()
.append('option')
.text(function (d) { return d; });

        // Initialize the shape
        (function() {
         input_shape = document.getElementById('selectShape').value = 'circle';
       })();
       function onchangeShape() {
        input_shape = checkNoSelection(d3.select('#selectShape').property('value'))
      };


//Code for button click     
const button = d3.select("#filter-btn");

button.on("click", function() {
 const tbody = d3.select("tbody");
 tbody.selectAll("tr").remove();
 let query = {
   datetime: input_date,  
   city: input_city,
   state: input_state,
   country: input_country,
   shape: input_shape
 }
 console.log(query)
 queryval=buildQuery(query)
 console.log(queryval)
 filtered_data = data.filter(search, queryval);

 function search(data){
   return Object.keys(this).every((key) => data[key] === this[key])
 }
 
 filtered_data.forEach(e => {
   let row = tbody.append("tr");
   row.append("td").text(e.datetime);
   row.append("td").text(e.city);
   row.append("td").text(e.state);
   row.append("td").text(e.country);
   row.append("td").text(e.shape);
   row.append("td").text(e.durationMinutes);
   row.append("td").text(e.comments);
 });
});