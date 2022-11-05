var currWeather = document.querySelector("#current-weather");
var searchInput = document.querySelector("#search-field");
var searchBtn = document.querySelector("#search-button");
var searchHistory = document.querySelector("#search-history");
var dataCheckHeader = document.querySelector("h3");
var createCon = document.createElement("section");
var removeCon = document.getElementById("five-day");



function searchByCity() {
	// prevent default/stop propagation or something
	// event.preventDefault();
	// input has data entered into it
	var searchResponse = searchInput.value;
	console.log(searchResponse);
	// information is saved in local storage
	localStorage.setItem("search", JSON.stringify(searchResponse));
	// search.text is added to five-day
	// search.text is added to history - as a button
	// add UL and then make button LI
	var addCity = document.createElement("button");
	addCity.textContent = searchResponse;
	searchHistory.appendChild(addCity);
	getApi(searchResponse);
}

function getApi(searchResponse) {
		var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "" + searchResponse + "" + "&appid=b2396c411f7ee6c8e084346e085d556d";
		fetch(requestURL)
			.then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						console.log(data.city);
						console.log(data.list[0]);
						console.log(data.list);
						appendData(data.list);
					})}})}


function appendData(weatherData) {
	
	document.body.children[1].children[1].children[3].children[0].appendChild(createCon);
	document.body.children[1].children[1].children[3].children[0].children[0].classList.add( "weather");
	
	for (var i = 0; i < 41; i += 8) {
	// var dateData = data.list[i].dt_txt;
	// var iconImg = ;
	var weatherConditionData = weatherData[i].weather[0].main;
	var tempData = weatherData[i].main.temp;
	var humidityData = weatherData[i].main.humidity;
	var windSpeedData = weatherData[i].wind.speed;

	var cityName = document.createElement("h3");
	cityName.textContent = "Five Day Forecast for " + JSON.parse(localStorage.getItem("search"));
	createCon.appendChild(cityName);
	// add date - dateData
	var addDate = document.createElement("h4");
	addDate.textContent = "Date: ";
	createCon.appendChild(addDate);
	// add icon of weather - iconImg
	var addIcon = document.createElement("div");
	addIcon.textContent = "Weather: " + weatherConditionData;
	createCon.appendChild(addIcon);
	// add weather conditions - weatherConditionData
	var addWeatherCondition = document.createElement("h5");
	addWeatherCondition.textContent = "Weather Condition: ";
	createCon.appendChild(addWeatherCondition);
	// add the temperature - tempData
	var addTemp = document.createElement("h5");
	addTemp.textContent = "Temperature: " + tempData;
	createCon.appendChild(addTemp);
	// add the humidity - humidityData
	var addHumidity = document.createElement("h5");
	addHumidity.textContent = "Humidity: " + humidityData;
	createCon.appendChild(addHumidity);
	// add the wind speed - windSpeedData
	var addWindSpeed = document.createElement("h5");
	addWindSpeed.textContent = "Wind Speed: " + windSpeedData;
	createCon.appendChild(addWindSpeed);
	}
}
// target history button
// on click event run search by city
searchBtn.addEventListener("click", function checkData(event) {
	if (removeCon.textContent == ""){
		searchByCity();
	} else {
		console.log("Working");
		for (var i = 0; i < 6; i++){
		for (var j = 0; j < createCon.children.length; i++){
		createCon.removeChild(createCon.children[j]);
		}
	}
		removeCon.removeChild(createCon);
		searchByCity();
}
});
