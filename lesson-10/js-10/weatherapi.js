const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-weather-condition').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('current-wind-speed').textContent = jsObject.wind.speed;
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

  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

  fetch(apiURL2)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsObject) {
      //console.table(jsonObject); // temporary checking for valid response and data parsing
     
      const forecast = jsObject.forecast;
  
        for (let i = 0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes('18:00:00')) {
          console.log(jsObject.list[i].dt_txt);
          console.log(jsObject.list[i].main.temp.toFixed(0));
          console.log(jsObject.list[i].weather[0].icon);
  
          const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
          const desc = jsObject.list[i].weather[0].description;
  
          let dayContainer = document.createElement("section");
          let forecastContainer = document.createElement("div");
          let dayOfWeek = document.createElement("h5");
          let image = document.createElement("img");
          let futureTemp = document.createElement("p");
  
          dayOfWeek.textContent = jsObject.list[i].dt_txt;
          image.setAttribute("src", imagesrc);
          image.setAttribute("alt", desc);
          futureTemp.textContent = jsObject.list[i].main.temp.toFixed(0) + (' °F');

          dayContainer.appendChild(forecastContainer);
          forecastContainer.appendChild(dayOfWeek);
          dayContainer.appendChild(image);
          forecastContainer.appendChild(futureTemp);
  
          document.querySelector("div.dayContainers").appendChild(dayContainer);
          
        }
      }
    });