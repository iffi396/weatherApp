				// Onload Code
function startup(){
	$.ajax({
				// api Link
	url: `https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric`,
				// When It Will Run Successfully
	success: function(data) {
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
			// Icon
	let weatherName = data.weather[0].main;
	 let calcTime = new Date();
       let sunriseTime = new Date(data.sys.sunrise * 1000);
       let sunsetTime = new Date(data.sys.sunset * 1000);

       if (calcTime > sunriseTime && calcTime < sunsetTime) {
         document.querySelector("body").style["background-image"] = `url(day.jpg)`;
         document.querySelector("body").style["background-position"] = `bottom`;
         document.querySelector("body").style["background-attachment"] = `fixed`;
         document.querySelector("body").style.color = `black`;

     } else {
        document.querySelector("body").style["background-image"] = `url(night.jpg)`;
        document.querySelector("body").style["background-position"] = `bottom`;
        document.querySelector("body").style["background-attachment"] = `fixed`;
        document.querySelector("body").style.color = `white`;
    }
    switch (weatherName) {
        case "Clouds":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`;
        break;

        case "Smoke":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-smoke"></i>`;
        break;

        case "Fog":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-fog"></i>`;
        break;

        case "Rain":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`;
        break;


        case "Mist":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-windy"></i>`;
        break;


        case "Smog":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-smog"></i>`;
        break;


        case "Clear":
        if (calcTime < sunsetTime) {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
        } else {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
        }
        break;

        case "Partly Cloudy":
        if (calcTime < sunsetTime) {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
        } else {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-night-alt-clear"></i>`;
        }
        break;

        case "Haze":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-dust"></i>`;
        break;


        case "Cloudy":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-cloudy"></i>`;
        break;


        case "Storm":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-sandstorm"></i>`;
        break;

        case "Thunderstorm":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
        break;

    }
   

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
	url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=95d9d3a5000b4fbba32450cff464b5d7&units=metric`,
				// When It Will Run Successfully
	success: function(data) {
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
			// Icon
	let weatherName = data.weather[0].main;

    switch (weatherName) {
        case "Clouds":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`;
        break;

        case "Smoke":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-smoke"></i>`;
        break;

        case "Fog":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-fog"></i>`;
        break;

        case "Rain":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`;
        break;


        case "Mist":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-windy"></i>`;
        break;


        case "Smog":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-smog"></i>`;
        break;


        case "Clear":
        if (calcTime < sunsetTime) {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
        } else {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
        }
        break;

        case "Partly Cloudy":
        if (calcTime < sunsetTime) {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
        } else {
            document.querySelector(".icon").innerHTML = `<i class="wi wi-night-alt-clear"></i>`;
        }
        break;

        case "Haze":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-dust"></i>`;
        break;


        case "Cloudy":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-cloudy"></i>`;
        break;


        case "Storm":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-sandstorm"></i>`;
        break;

        case "Thunderstorm":
        document.querySelector(".icon").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
        break;

    }
       let calcTime = new Date();
       let sunriseTime = new Date(data.sys.sunrise * 1000);
       let sunsetTime = new Date(data.sys.sunset * 1000);

       if (calcTime > sunriseTime && calcTime < sunsetTime) {
         document.querySelector("body").style["background-image"] = `url(day.jpg)`;
         document.querySelector("body").style["background-position"] = `bottom`;
         document.querySelector("body").style["background-attachment"] = `fixed`;
         document.querySelector("body").style.color = `black`;

     } else {
        document.querySelector("body").style["background-image"] = `url(night.jpg)`;
        document.querySelector("body").style["background-position"] = `bottom`;
        document.querySelector("body").style["background-attachment"] = `fixed`;
        document.querySelector("body").style.color = `white`;
    }

},	
				// If It Will Not Run
	error: function(err) {
		console.log(err);
	}
	})
}










// 40768880b3e84987ba3037fed59658e1
