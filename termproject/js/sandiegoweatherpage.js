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
        let address = document.createElement("h4");
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let phoneNumber = document.createElement("h4");
        let telephone = document.createElement("p");
        let email = document.createElement("h4");
        let emailURL = document.createElement("p");
        let sandiegoTempleInfo = document.createElement("div");

        address.textContent = temples[i].address;
        streetAddress.textContent = temples[i].streetAddress;
        cityStateZip.textContent = temples[i].cityStateZip;
        country.textContent = temples[i].country;
        phoneNumber.textContent = temples[i].phoneNumber;
        telephone.textContent = temples[i].telephone;
        email.textContent = temples[i].email;
        emailURL.textContent = temples[i].emailURL;

        sandiegoTempleInfo.appendChild(address);
        sandiegoTempleInfo.appendChild(streetAddress);
        sandiegoTempleInfo.appendChild(cityStateZip);
        sandiegoTempleInfo.appendChild(country);
        sandiegoTempleInfo.appendChild(phoneNumber);
        sandiegoTempleInfo.appendChild(telephone);
        sandiegoTempleInfo.appendChild(email);
        sandiegoTempleInfo.appendChild(emailURL);

        card.appendChild(sandiegoTempleInfo);
        document.querySelector("div.sandiegoTempleInfo").appendChild(card);
      }
    }
  });