const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-weather-condition').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = Math.round((jsObject.main.temp - 273.15) * 1.8) + 32;
    document.getElementById('current-wind-speed').textContent = jsObject.wind.speed;
    document.getElementById('current-humidity').textContent = jsObject.main.humidity;
    document.getElementById('high-temp').textContent = Math.round((jsObject.main.temp_max - 273.15) * 1.8) + 32;
    document.getElementById('low-temp').textContent = Math.round((jsObject.main.temp_min - 273.15) * 1.8) + 32;



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


const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let i = 0;

    /*
    for (let i = 0; i < jsObject.list.length; i + 8) {
      if (jsObject.length[i].dt_txt === "1800") {

      
      const temp = (jsObject.length[i].dt_txt,
        jsObject.list[i].weather[0].icon,
        jsObject.list[i].main.temp_max,
        jsObject.list[i].main.temp_min)
    */

    document.getElementById('forecastDayOne').textContent = Math.round((jsObject.list[i].main.temp - 273.15) * 1.8) + 32;
    document.getElementById('forecastDayTwo').textContent = Math.round((jsObject.list[i + 8].main.temp - 273.15) * 1.8) + 32;
    document.getElementById('forecastDayThree').textContent = Math.round((jsObject.list[i + 8 + 8].main.temp - 273.15) * 1.8) + 32;
    document.getElementById('forecastDayFour').textContent = Math.round((jsObject.list[i + 8 + 8 + 8].main.temp - 273.15) * 1.8) + 32;
    document.getElementById('forecastDayFive').textContent = Math.round((jsObject.list[i + 8 + 8 + 8 + 8].main.temp - 273.15) * 1.8) + 32;



  });