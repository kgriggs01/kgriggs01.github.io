 const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

 fetch(weatherURL)
   .then((response) => response.json())
   .then((jsObject) => {
     console.log(jsObject);
 
     document.getElementById('current-weather-condition').textContent = jsObject.weather[0].main;
     document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
     document.getElementById('current-wind-speed').textContent = jsObject.wind.speed.toFixed(1);
     document.getElementById('current-humidity').textContent = jsObject.main.humidity;
     document.getElementById('high-temp').textContent = jsObject.main.temp_max.toFixed(0);
     document.getElementById('low-temp').textContent = jsObject.main.temp_min.toFixed(0);
 
     function wind() {
       var tempF = parseFloat(document.getElementById("current-temp").textContent);
       var speed = parseFloat(document.getElementById("current-wind-speed").textContent);
       var result = calcWindChill(tempF, speed);
 
       if ((tempF <= 50) && (speed >= 3.0)) {
         document.getElementById("getWindChillValue").textContent = result.toFixed() + " °F";
       } else {
         document.getElementById("getWindChillValue").textContent = "N/A";
       }
     }
 
     function calcWindChill(tempF, speed) {
       var calcWindChill = (35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16))));
       return calcWindChill;
     }
     wind();
 
   });
 
 
 const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";
 
 fetch(forecastURL)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsObject) {
 
     let day = 0;
     for (let i = 0; i < jsObject.list.length; i++) {
 
       if (jsObject.list[i].dt_txt.includes('18:00:00')) {
         //console.log(jsObject.list[i].dt_txt);
         //console.log(jsObject.list[i].main.temp.toFixed(0));
         //console.log(jsObject.list[i].weather[0].icon);
 
         let dayInfo = new Date(jsObject.list[i].dt_txt);
         let weekday = {
           weekday: 'short'
         };
         let forecastDayOfWeek = dayInfo.toLocaleDateString('en-US', weekday);
         let dayOfWeek = 'forecastWeekdayValue' + day;
         document.getElementById(dayOfWeek).textContent = forecastDayOfWeek;
 
         let forecastIconInfo = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
         let iconDescription = jsObject.list[i].weather[0].description;
         let icon = 'forecastIconValue' + day;
         document.getElementById(icon).setAttribute('src', forecastIconInfo);
         document.getElementById(icon).setAttribute('alt', iconDescription);
 
         let forecastTempValue = jsObject.list[i].main.temp.toFixed(0);
         let tempInfo = 'forecastTempValue' + day;
         document.getElementById(tempInfo).textContent = forecastTempValue + ' °F';
 
         day = day + 1;
 
       }
     }
   });