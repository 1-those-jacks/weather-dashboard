var currWeather = document.querySelector("#current-weather");
var searchInput = document.querySelector("#search-field");
var searchBtn = document.querySelector("#search-button");
var searchHistory = document.querySelector("#search-history");
var fiveDayForecast = document.querySelector("#five-day");

var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=b2396c411f7ee6c8e084346e085d556d";

function searchByCity(event){
	// prevent default/stop propagation or something
	event.preventDefault();
	console.log(event);
	// input has data entered into it
	var searchResponse = searchInput.value;
	console.log(searchResponse);
	// button is pressed
	// information is saved in local storage
	localStorage.setItem("search", JSON.stringify(searchResponse));
	// search.text is added to five-day
	var cityName = document.querySelector("span");
	cityName.textContent = searchResponse;
	// search.text is added to history - as a button
	var addCity = document.createElement("button");
	addCity.textContent = searchResponse;
	searchHistory.appendChild(addCity);
	// search.weather is added to current-weather
	
		// add date
		// add icon of weather
		// add weather conditions
		// add the temperature
		// add the humidity
		// add the wind speed
	// search.weather is added to five-day
		// create five divs
		// for loop each div
			// display the date
			// display icon of weather
			// display temperature
			// display the wind speed
			// display the humidity
}

function searchByHistory(){
	// target history button
	// on click event run search by city
}

function	getApi() {
	fetch(requestURL)
		.then(function(response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		})
}

getApi();

searchBtn.addEventListener("click", searchByCity);

