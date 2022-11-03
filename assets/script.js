var currWeather = document.querySelector("#current-weather");
var searchInput = document.querySelector("#search-field");
var searchBtn = document.querySelector("#search-button");
var searchHistory = document.querySelector("#search-history");
var fiveDayForecast = document.querySelector("#five-day");


function searchByCity(event){
	
	// prevent default/stop propagation or something
	event.preventDefault();
	// console.log(event);
	// input has data entered into it
	var searchResponse = searchInput.value;
	console.log(searchResponse);
	// button is pressed
	// information is saved in local storage
	localStorage.setItem("search", JSON.stringify(searchResponse));
	// search.text is added to five-day
	var cityName = document.querySelector("h3");
	cityName.textContent = searchResponse;
	// search.text is added to history - as a button
	var addCity = document.createElement("button");
	addCity.textContent = searchResponse;
	searchHistory.appendChild(addCity);
// add UL and then make button LI
	// search.weather is added to current-weather
			// target history button

		// objectArray.city.name
	function	getApi() {
		var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "" + searchResponse + "" + "&appid=b2396c411f7ee6c8e084346e085d556d";
		fetch(requestURL)
			.then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						console.log(data.city);
						console.log(data.list);
						for (var i = 0; i < data.list.length; i++) {
							console.log(data.list[i]);
						}
					});
				} else {
					alert("ERROR: " + response.statusText);
				}
			})
			.catch(function (error) {
				alert(error);
			});
		};
						// function displayRepos(city, searchTerm){
		
		// 				console.log(data.list[i]);
		// 				return;
		// 			};
		// // 			}
		// 			)
		// });

		for (var i = 0; i < 5; i++){
		// add date - dateData
		var addDate = document.createElement("h4");
		addDate.textContent = "Date: ";
		fiveDayForecast.appendChild(addDate);
		// add icon of weather - iconImg
		var addIcon = document.createElement("div");
		addIcon.textContent = "Weather: ";
		fiveDayForecast.appendChild(addIcon);
		// add weather conditions - weatherConditionData
		var addWeatherCondition = document.createElement("h5");
		addWeatherCondition.textContent = "Weather Condition: ";
		fiveDayForecast.appendChild(addWeatherCondition);
		// add the temperature - tempData
		var addTemp = document.createElement("h5");
		addTemp.textContent = "Temperature: ";
		fiveDayForecast.appendChild(addTemp);
		// add the humidity - humidityData
		var addHumidity = document.createElement("h5");
		addHumidity.textContent = "Humidity: ";
		fiveDayForecast.appendChild(addHumidity);
		// add the wind speed - windSpeedData
		var addWindSpeed = document.createElement("h5");
		addWindSpeed.textContent = "Wind Speed: ";
		fiveDayForecast.appendChild(addWindSpeed);
	}
	// search.weather is added to five-day
	getApi();
}

			// on click event run search by city
searchBtn.addEventListener("click", searchByCity)
