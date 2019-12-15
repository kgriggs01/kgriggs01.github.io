const loganTempleURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(loganTempleURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {

      if (temples[i].name == 'Logan') {

        let temple = ["Logan"];
        let card = document.createElement("section");
        let templeNameHeading = document.createElement("h3");
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let telephone = document.createElement("p");
        let email = document.createElement("p");
        let loganTempleInfo = document.createElement("div");
        let templeName = document.createElement("h3");
        let image = document.createElement("img");

        templeNameHeading.textContent = temples[i].fullname;
        streetAddress.textContent = temples[i].streetAddress;
        cityStateZip.textContent = temples[i].cityStateZip;
        country.textContent = temples[i].country;
        telephone.textContent = temples[i].telephone;
        email.textContent = temples[i].email;
        image.setAttribute("src", "./images/" + temples[i].photo);
        image.setAttribute("alt", temples[i].photo);

        templeName.appendChild(templeNameHeading);
        loganTempleInfo.appendChild(streetAddress);
        loganTempleInfo.appendChild(cityStateZip);
        loganTempleInfo.appendChild(country);
        loganTempleInfo.appendChild(telephone);
        loganTempleInfo.appendChild(email);
        card.appendChild(templeName);
        card.appendChild(image);
        card.appendChild(loganTempleInfo);

        document.querySelector("div.loganTempleInfo").appendChild(card);
      }
    }
  });



const LoganForecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip=84321&units=imperial&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(LoganForecastURL)
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
        let lForecastDayOfWeek = dayInfo.toLocaleDateString("en-US", weekday);
        let dayOfWeek = "lForecastWeekdayValue" + day;
        document.getElementById(dayOfWeek).textContent = lForecastDayOfWeek;

        let lForecastIconInfo = "https://openweathermap.org/img/w/" + jsObject.list[i].weather[0].icon + ".png";
        let lIconDescription = jsObject.list[i].weather[0].description;
        let lIcon = "lForecastIconValue" + day;
        document.getElementById(lIcon).setAttribute("src", lForecastIconInfo);
        document.getElementById(lIcon).setAttribute("alt", lIconDescription);

        let lForecastTempValue = jsObject.list[i].main.temp.toFixed(0);
        let lTempInfo = "lForecastTempValue" + day;
        document.getElementById(lTempInfo).textContent = lForecastTempValue + " °F";

        day = day + 1;

      }
    }
  });

  const loganServicesURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

  fetch(loganServicesURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const temples = jsonObject.temples;
      for (let i = 0; i < temples.length; i++) {
        if (temples[i].name == "Logan") {
          let list = document.createElement("ul");
          for (let j = 0; j < temples[i].services.length; j++) {
            let templesServices = document.createElement("li");
            templesServices.textContent = temples[i].services[j];
            list.appendChild(templesServices)
            document.querySelector("div.loganServices").appendChild(list);
            //console.log(templesServices);
          }
        }
      }
    });