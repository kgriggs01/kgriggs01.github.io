const portlandWeatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=97035&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(portlandWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("pCurrent-weather-condition").textContent = jsObject.weather[0].description;
    document.getElementById("pCurrent-temp").textContent = jsObject.main.temp.toFixed(0);
    document.getElementById("pCurrent-wind-speed").textContent = jsObject.wind.speed.toFixed(1);
    document.getElementById("pCurrent-humidity").textContent = jsObject.main.humidity;
    document.getElementById("pHigh-temp").textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById("pLow-temp").textContent = jsObject.main.temp_min.toFixed(0);

    function wind() {
      var tempF = parseFloat(document.getElementById("pCurrent-temp").textContent);
      var speed = parseFloat(document.getElementById("pCurrent-wind-speed").textContent);
      var result = calcWindChill(tempF, speed);

      if ((tempF <= 50) && (speed >= 3.0)) {
        document.getElementById("pGetWindChillValue").textContent = result.toFixed() + " °F";
      } else {
        document.getElementById("pGetWindChillValue").textContent = "N/A";
      }
    }

    function calcWindChill(tempF, speed) {
      var calcWindChill = (35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16))));
      return calcWindChill;
    }
    wind();
  });


const portlandForecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip=97035&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(portlandForecastURL)
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
        let pForecastDayOfWeek = dayInfo.toLocaleDateString("en-US", weekday);
        let dayOfWeek = "pForecastWeekdayValue" + day;
        document.getElementById(dayOfWeek).textContent = pForecastDayOfWeek;

        let pForecastIconInfo = "https://openweathermap.org/img/w/" + jsObject.list[i].weather[0].icon + ".png";
        let pIconDescription = jsObject.list[i].weather[0].description;
        let pIcon = "pForecastIconValue" + day;
        document.getElementById(pIcon).setAttribute("src", pForecastIconInfo);
        document.getElementById(pIcon).setAttribute("alt", pIconDescription);

        let pForecastTempValue = jsObject.list[i].main.temp.toFixed(0);
        let pTempInfo = "pForecastTempValue" + day;
        document.getElementById(pTempInfo).textContent = pForecastTempValue + " °F";

        day = day + 1;
      }
    }
  });


const portlandTempleURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(portlandTempleURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {

      if (temples[i].name == 'Portland') {

        let card = document.createElement("section");
        let address = document.createElement("h3");
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let phoneNumber = document.createElement("h3");
        let telephone = document.createElement("p");
        let email = document.createElement("h3");
        let emailURL = document.createElement("p");
        let portlandTempleInfo = document.createElement("div");

        address.textContent = temples[i].address;
        streetAddress.textContent = temples[i].streetAddress;
        cityStateZip.textContent = temples[i].cityStateZip;
        country.textContent = temples[i].country;
        phoneNumber.textContent = temples[i].phoneNumber;
        telephone.textContent = temples[i].telephone;
        email.textContent = temples[i].email;
        emailURL.textContent = temples[i].emailURL;

        portlandTempleInfo.appendChild(address);
        portlandTempleInfo.appendChild(streetAddress);
        portlandTempleInfo.appendChild(cityStateZip);
        portlandTempleInfo.appendChild(country);
        portlandTempleInfo.appendChild(phoneNumber);
        portlandTempleInfo.appendChild(telephone);
        portlandTempleInfo.appendChild(email);
        portlandTempleInfo.appendChild(emailURL);

        card.appendChild(portlandTempleInfo);
        document.querySelector("div.portlandTempleInfo").appendChild(card);
      }
    }
  });


const portlandServicesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(portlandServicesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "Portland") {
        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].services.length; j++) {
          let templesServices = document.createElement("li");
          templesServices.textContent = temples[i].services[j];
          list.appendChild(templesServices)
          document.querySelector("div.portlandServices").appendChild(list);
          //console.log(templesServices);
        }
      }
    }
  });

const portlandMilestonesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";
fetch(portlandMilestonesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "Portland") {

        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].milestones.length; j++) {
          let templesMilestones = document.createElement("li");
          templesMilestones.textContent = temples[i].milestones[j];
          list.appendChild(templesMilestones)
          document.querySelector("div.portlandMilestones").appendChild(list);
          //console.log(templesMilestones);
        }
      }
    }
  });


const portlandClosuresURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";
fetch(portlandClosuresURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "Portland") {

        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].closures.length; j++) {
          let templesClosures = document.createElement("li");
          templesClosures.textContent = temples[i].closures[j];
          list.appendChild(templesClosures)
          document.querySelector("div.portlandClosures").appendChild(list);
          //console.log(templesClosures);
        }
      }
    }
  });