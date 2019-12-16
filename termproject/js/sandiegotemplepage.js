const sandiegoWeatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=92122&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(sandiegoWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("sdCurrent-weather-condition").textContent = jsObject.weather[0].description;
    document.getElementById("sdCurrent-temp").textContent = jsObject.main.temp.toFixed(0);
    document.getElementById("sdCurrent-wind-speed").textContent = jsObject.wind.speed.toFixed(1);
    document.getElementById("sdCurrent-humidity").textContent = jsObject.main.humidity;
    document.getElementById("sdHigh-temp").textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById("sdLow-temp").textContent = jsObject.main.temp_min.toFixed(0);

    function wind() {
      var tempF = parseFloat(document.getElementById("sdCurrent-temp").textContent);
      var speed = parseFloat(document.getElementById("sdCurrent-wind-speed").textContent);
      var result = calcWindChill(tempF, speed);

      if ((tempF <= 50) && (speed >= 3.0)) {
        document.getElementById("sdGetWindChillValue").textContent = result.toFixed() + " °F";
      } else {
        document.getElementById("sdGetWindChillValue").textContent = "N/A";
      }
    }

    function calcWindChill(tempF, speed) {
      var calcWindChill = (35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16))));
      return calcWindChill;
    }
    wind();
  });

const sandiegoForecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip=92122&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(sandiegoForecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {

    let day = 0;
    for (let i = 0; i < jsObject.list.length; i++) {

      if (jsObject.list[i].dt_txt.includes("18:00:00")) {
        //console.log(jsObject.list[i].dt_txt);
        //console.log(jsObject.list[i].main.temp.toFixed(0));
        //console.log(jsObject.list[i].weather[0].icon);

        let dayInfo = new Date(jsObject.list[i].dt_txt);
        let weekday = {
          weekday: "short"
        };
        let sdForecastDayOfWeek = dayInfo.toLocaleDateString("en-US", weekday);
        let dayOfWeek = "sdForecastWeekdayValue" + day;
        document.getElementById(dayOfWeek).textContent = sdForecastDayOfWeek;

        let sdForecastIconInfo = "https://openweathermap.org/img/w/" + jsObject.list[i].weather[0].icon + ".png";
        let sdIconDescription = jsObject.list[i].weather[0].description;
        let sdIcon = "sdForecastIconValue" + day;
        document.getElementById(sdIcon).setAttribute("src", sdForecastIconInfo);
        document.getElementById(sdIcon).setAttribute("alt", sdIconDescription);

        let sdForecastTempValue = jsObject.list[i].main.temp.toFixed(0);
        let sdTempInfo = "sdForecastTempValue" + day;
        document.getElementById(sdTempInfo).textContent = sdForecastTempValue + " °F";

        day = day + 1;

      }
    }
  });


const sandiegoTempleURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(sandiegoTempleURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {

      if (temples[i].name == 'San Diego') {

        let card = document.createElement("section");
        let address = document.createElement("h3");
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let telephone = document.createElement("p");
        let emailURL = document.createElement("p");
        let sandiegoTempleInfo = document.createElement("div");

        address.textContent = temples[i].address;
        streetAddress.textContent = temples[i].streetAddress;
        cityStateZip.textContent = temples[i].cityStateZip;
        country.textContent = temples[i].country;
        telephone.textContent = temples[i].telephone;
        emailURL.textContent = temples[i].emailURL;

        sandiegoTempleInfo.appendChild(address);
        sandiegoTempleInfo.appendChild(streetAddress);
        sandiegoTempleInfo.appendChild(cityStateZip);
        sandiegoTempleInfo.appendChild(country);
        sandiegoTempleInfo.appendChild(telephone);
        sandiegoTempleInfo.appendChild(emailURL);

        card.appendChild(sandiegoTempleInfo);
        document.querySelector("div.sandiegoTempleInfo").appendChild(card);
      }
    }
  });


const sandiegoServicesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(sandiegoServicesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "San Diego") {
        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].services.length; j++) {
          let templesServices = document.createElement("li");
          templesServices.textContent = temples[i].services[j];
          list.appendChild(templesServices)
          document.querySelector("div.sandiegoServices").appendChild(list);
          //console.log(templesServices);
        }
      }
    }
  });

const sandiegoMilestonesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";
fetch(sandiegoMilestonesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "San Diego") {

        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].milestones.length; j++) {
          let templesMilestones = document.createElement("li");
          templesMilestones.textContent = temples[i].milestones[j];
          list.appendChild(templesMilestones)
          document.querySelector("div.sandiegoMilestones").appendChild(list);
          //console.log(templesMilestones);
        }
      }
    }
  });


const sandiegoClosuresURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";
fetch(sandiegoClosuresURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "San Diego") {

        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].closures.length; j++) {
          let templesClosures = document.createElement("li");
          templesClosures.textContent = temples[i].closures[j];
          list.appendChild(templesClosures)
          document.querySelector("div.sandiegoClosures").appendChild(list);
          //console.log(templesClosures);
        }
      }
    }
  });