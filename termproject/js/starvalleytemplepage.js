const starvalleyWeatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=83110&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(starvalleyWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("svCurrent-weather-condition").textContent = jsObject.weather[0].description;
    document.getElementById("svCurrent-temp").textContent = jsObject.main.temp.toFixed(0);
    document.getElementById("svCurrent-wind-speed").textContent = jsObject.wind.speed.toFixed(1);
    document.getElementById("svCurrent-humidity").textContent = jsObject.main.humidity;
    document.getElementById("svHigh-temp").textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById("svLow-temp").textContent = jsObject.main.temp_min.toFixed(0);

    function wind() {
      var tempF = parseFloat(document.getElementById("svCurrent-temp").textContent);
      var speed = parseFloat(document.getElementById("svCurrent-wind-speed").textContent);
      var result = calcWindChill(tempF, speed);

      if ((tempF <= 50) && (speed >= 3.0)) {
        document.getElementById("svGetWindChillValue").textContent = result.toFixed() + " °F";
      } else {
        document.getElementById("svGetWindChillValue").textContent = "N/A";
      }
    }

    function calcWindChill(tempF, speed) {
      var calcWindChill = (35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * (Math.pow(speed, 0.16))));
      return calcWindChill;
    }
    wind();
  });

const starvalleyForecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83110&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(starvalleyForecastURL)
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
        let svForecastDayOfWeek = dayInfo.toLocaleDateString("en-US", weekday);
        let dayOfWeek = "svForecastWeekdayValue" + day;
        document.getElementById(dayOfWeek).textContent = svForecastDayOfWeek;

        let svForecastIconInfo = "https://openweathermap.org/img/w/" + jsObject.list[i].weather[0].icon + ".png";
        let svIconDescription = jsObject.list[i].weather[0].description;
        let svIcon = "svForecastIconValue" + day;
        document.getElementById(svIcon).setAttribute("src", svForecastIconInfo);
        document.getElementById(svIcon).setAttribute("alt", svIconDescription);

        let svForecastTempValue = jsObject.list[i].main.temp.toFixed(0);
        let svTempInfo = "svForecastTempValue" + day;
        document.getElementById(svTempInfo).textContent = svForecastTempValue + " °F";

        day = day + 1;

      }
    }
  });



const starvalleyTempleURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(starvalleyTempleURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {

      if (temples[i].name == 'Star Valley') {

        let temple = ["Star Valley"];
        let card = document.createElement("section");
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let telephone = document.createElement("p");
        let emailURL = document.createElement("p");
        let starvalleyTempleInfo = document.createElement("div");
        streetAddress.textContent = temples[i].streetAddress;
        cityStateZip.textContent = temples[i].cityStateZip;
        country.textContent = temples[i].country;
        telephone.textContent = temples[i].telephone;
        emailURL.textContent = temples[i].emailURL;
        starvalleyTempleInfo.appendChild(streetAddress);
        starvalleyTempleInfo.appendChild(cityStateZip);
        starvalleyTempleInfo.appendChild(country);
        starvalleyTempleInfo.appendChild(telephone);
        starvalleyTempleInfo.appendChild(emailURL);
        card.appendChild(starvalleyTempleInfo);

        document.querySelector("div.starvalleyTempleInfo").appendChild(card);
      }
    }
  });


const starvalleyServicesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(starvalleyServicesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "Star Valley") {
        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].services.length; j++) {
          let templesServices = document.createElement("li");
          templesServices.textContent = temples[i].services[j];
          list.appendChild(templesServices)
          document.querySelector("div.starvalleyServices").appendChild(list);
          //console.log(templesServices);
        }
      }
    }
  });

const starvalleyMilestonesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";
fetch(starvalleyMilestonesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "Star Valley") {

        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].milestones.length; j++) {
          let templesMilestones = document.createElement("li");
          templesMilestones.textContent = temples[i].milestones[j];
          list.appendChild(templesMilestones)
          document.querySelector("div.starvalleyMilestones").appendChild(list);
          //console.log(templesMilestones);
        }
      }
    }
  });


const starvalleyClosuresURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";
fetch(starvalleyClosuresURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {
      if (temples[i].name == "Star Valley") {

        let list = document.createElement("ul");
        for (let j = 0; j < temples[i].closures.length; j++) {
          let templesClosures = document.createElement("li");
          templesClosures.textContent = temples[i].closures[j];
          list.appendChild(templesClosures)
          document.querySelector("div.starvalleyClosures").appendChild(list);
          //console.log(templesClosures);
        }
      }
    }
  });