// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
// var $cityselect = document.querySelector("#citytag");
var $cityselect = document.querySelector(".btn");
var $stateselect = document.querySelector("#statetag");
var $countryselect = document.querySelector("#countrytag");
var $shapeselect = document.querySelector("#shapetag");



// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var queryData = filteredData[i];
    var fields = Object.keys(queryData);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = queryData[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string

  var filterDate = $dateInput.value;
  var splitDate = filterDate.split("-")
  var year = splitDate[0]
  var month = splitDate[1]
  var day = splitDate[2]
  var finalDate = month+"/"+day+"/"+year
  var finalDateFormatted = new Date(finalDate)
//   var today  = new Date('05-10-2019');
//   var filterQueryDate = filterDate.toLocaleDateString("en-US");
  
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(eachData) {
    var dataDate = eachData.datetime.trim();
    var finaldataDateFormatted = new Date(dataDate)
    // console.log(finaldataDateFormatted);
    // var dataDate1 = new Date(dataDate);
    // var finalDate = dataDate1.toLocaleDateString("en-US");
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return finaldataDateFormatted.getTime() === finalDateFormatted.getTime();
  });
//   console.log(filteredData);
//   console.log(finalDateFormatted);
  renderTable();
}


var all_cities = [];
var all_states = [];
var all_shapes = [];
// Loop through data and store in array
for (var i = 0; i < dataSet.length; i++) {
  // Empty String to hold HTML
  var dataItem = dataSet[i];
  all_cities.indexOf(dataItem.city) === -1 ? all_cities.push(dataItem.city) : console.log("This item already exists");
  all_states.indexOf(dataItem.state) === -1 ? all_states.push(dataItem.state) : console.log("This item already exists");
  all_shapes.indexOf(dataItem.shape) === -1 ? all_shapes.push(dataItem.shape) : console.log("This item already exists");
}
// all_cities = all_cities.sort()
// all_states = all_states.sort()
// all_shapes = all_shapes.sort()

// console.log(all_cities)     
  

// Add an event listener to the click on citylist
$cityselect.addEventListener("click", renderCitylist);
function renderCitylist() {
    // document.querySelector stores a reference to a DOM element
    var cityList = document.querySelector("#citylist");
  
    // Loop through array and store in HTML
    for (var i = 0; i < all_cities.length; i++) {
      // Empty String to hold HTML
      var cityListItem = document.createElement("li");
      var cityListItemanchor = document.createElement("a");
      cityListItemanchor.href = "#";
      cityListItemanchor.id = "abcd";
  
      // Update todoListItem's innerHTML w/ the text of the todo object
      cityListItemanchor.innerHTML = all_cities.sort()[i];
  
      // Add todo to the list
      cityListItem.appendChild(cityListItemanchor);
      cityList.appendChild(cityListItem);
      // console.log(cityList);
    }
  }


  $("#abcd").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  });

  // Add an event listener to the click on statelist
$stateselect.addEventListener("click", renderStatelist);
function renderStatelist() {
    // document.querySelector stores a reference to a DOM element
    var stateList = document.querySelector("#statelist");
  
    // Loop through array and store in HTML
    for (var i = 0; i < all_states.length; i++) {
      // Empty String to hold HTML
      var stateListItem = document.createElement("li");
      var stateListItemanchor = document.createElement("a");
      stateListItemanchor.href = "#";
  
      // Update todoListItem's innerHTML w/ the text of the todo object
      stateListItemanchor.innerHTML = all_states.sort()[i];
  
      // Add todo to the list
      stateListItem.appendChild(stateListItemanchor);
      stateList.appendChild(stateListItem);
      // console.log(cityList);
    }
  }

    // Add an event listener to the click on shapelist
$shapeselect.addEventListener("click", renderShapelist);
function renderShapelist() {
    // document.querySelector stores a reference to a DOM element
    var shapeList = document.querySelector("#shapelist");
  
    // Loop through array and store in HTML
    for (var i = 0; i < all_shapes.length; i++) {
      // Empty String to hold HTML
      var shapeListItem = document.createElement("li");
      var shapeListItemanchor = document.createElement("a");
      shapeListItemanchor.href = "#";
  
      // Update todoListItem's innerHTML w/ the text of the todo object
      shapeListItemanchor.innerHTML = all_shapes.sort()[i];
  
      // Add todo to the list
      shapeListItem.appendChild(shapeListItemanchor);
      shapeList.appendChild(shapeListItem);
      // console.log(cityList);
    }
  }

 

// Render the table for the first time on page load
renderTable();


// // Add an event listener to the click on citylist
// $cityselect.addEventListener("click", renderCitylist);
// function renderCitylist() {
//     // document.querySelector stores a reference to a DOM element
//     var cityList = document.querySelector("#citylist");
  
//     // Loop through array and store in HTML
//     for (var i = 0; i < dataSet.length; i++) {
//       // Empty String to hold HTML
//       var cityListItem = document.createElement("li");
//       var cityListItemanchor = document.createElement("a");
//       cityListItemanchor.href = "#";
//       // Retrieve todo object from todos list
//       var cityname = dataSet[i];
  
//       // Update todoListItem's innerHTML w/ the text of the todo object
//       cityListItemanchor.innerHTML = cityname.city;
  
//       // Add todo to the list
//       cityListItem.appendChild(cityListItemanchor);
//       cityList.appendChild(cityListItem);
//       // console.log(cityList);
//     }
//   }

// // Add an event listener to the click on statelist
// $stateselect.addEventListener("click", renderStatelist);
// function renderStatelist() {
//     // document.querySelector stores a reference to a DOM element
//     var stateList = document.querySelector("#statelist");
  
//     // Loop through array and store in HTML
//     for (var i = 0; i < dataSet.length; i++) {
//       // Empty String to hold HTML
//       var stateListItem = document.createElement("li");
//       var stateListItemanchor = document.createElement("a");
//       stateListItemanchor.href = "#";
//       // Retrieve todo object from todos list
//       var statename = dataSet[i];
  
//       // Update todoListItem's innerHTML w/ the text of the todo object
//       stateListItemanchor.innerHTML = statename.state;
  
//       // Add todo to the list
//       stateListItem.appendChild(stateListItemanchor);
//       stateList.appendChild(stateListItem);
//       // console.log(cityList);
//     }
//   }

// // Add an event listener to the click on shapelist
// $shapeselect.addEventListener("click", renderShapelist);
// function renderShapelist() {
//     // document.querySelector stores a reference to a DOM element
//     var shapeList = document.querySelector("#shapelist");
  
//     // Loop through array and store in HTML
//     for (var i = 0; i < dataSet.length; i++) {
//       // Empty String to hold HTML
//       var shapeListItem = document.createElement("li");
//       var shapeListItemanchor = document.createElement("a");
//       shapeListItemanchor.href = "#";
//       // Retrieve todo object from todos list
//       var shapename = dataSet[i];
  
//       // Update todoListItem's innerHTML w/ the text of the todo object
//       shapeListItemanchor.innerHTML = shapename.shape;
  
//       // Add todo to the list
//       shapeListItem.appendChild(shapeListItemanchor);
//       shapeList.appendChild(shapeListItem);
//       // console.log(cityList);
//     }
//   }

  



