				// Onload Code
function startup(){
	$.ajax({
				// api Link
	url: `https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric`,
				// When It Will Run Successfully
	success: function(data) {
		console.log(data)
				// Data Input Info
		document.querySelector(".cityName").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = `${data.main.temp}℃`;
		document.querySelector(".dis").innerHTML = data.weather[0].main;
		document.querySelector(".min").innerHTML = `${data.main.temp_min}℃ /`;
		document.querySelector(".max").innerHTML = `${data.main.temp_max}℃`;
				// Epoch Time Converting
		let riseDate = new Date(data.sys.sunrise* 1000).toLocaleDateString("en-US");
		let riseTime = new Date(data.sys.sunrise* 1000).toLocaleTimeString("en-US");
		let setDate = new Date(data.sys.sunset* 1000).toLocaleDateString("en-US");
		let setTime = new Date(data.sys.sunset* 1000).toLocaleTimeString("en-US");
		document.querySelector(".dateRise").innerHTML = riseDate;
		document.querySelector(".timeRise").innerHTML = riseTime;
		document.querySelector(".dateSet").innerHTML = setDate;
		document.querySelector(".timeSet").innerHTML = setTime;

	},	
				// If It Will Not Run
	error: function(err) {
		console.log(err);
	}
	})
}
function btnSearch(){
	let cityName = document.querySelector("input").value;
	$.ajax({
				// api Link
	url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric`,
				// When It Will Run Successfully
	success: function(data) {
		console.log(data)
				// Data Input Info
		document.querySelector(".cityName").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = `${data.main.temp}℃`;
		document.querySelector(".dis").innerHTML = data.weather[0].main;
		document.querySelector(".min").innerHTML = `${data.main.temp_min}℃ /`;
		document.querySelector(".max").innerHTML = `${data.main.temp_max}℃`;
				// Epoch Time Converting
		let riseDate = new Date(data.sys.sunrise* 1000).toLocaleDateString("en-US");
		let riseTime = new Date(data.sys.sunrise* 1000).toLocaleTimeString("en-US");
		let setDate = new Date(data.sys.sunset* 1000).toLocaleDateString("en-US");
		let setTime = new Date(data.sys.sunset* 1000).toLocaleTimeString("en-US");
		document.querySelector(".dateRise").innerHTML = riseDate;
		document.querySelector(".timeRise").innerHTML = riseTime;
		document.querySelector(".dateSet").innerHTML = setDate;
		document.querySelector(".timeSet").innerHTML = setTime;

	},	
				// If It Will Not Run
	error: function(err) {
		console.log(err);
	}
	})
}













// 40768880b3e84987ba3037fed59658e1