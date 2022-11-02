var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=b2396c411f7ee6c8e084346e085d556d"

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


