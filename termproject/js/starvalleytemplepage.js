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
        let templeNameHeading = document.createElement("h3");
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let telephone = document.createElement("p");
        let email = document.createElement("p");
        let starvalleyTempleInfo = document.createElement("div");
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
        starvalleyTempleInfo.appendChild(streetAddress);
        starvalleyTempleInfo.appendChild(cityStateZip);
        starvalleyTempleInfo.appendChild(country);
        starvalleyTempleInfo.appendChild(telephone);
        starvalleyTempleInfo.appendChild(email);
        card.appendChild(templeName);
        card.appendChild(image);
        card.appendChild(starvalleyTempleInfo);

        document.querySelector("div.starvalleyTempleInfo").appendChild(card);
      }
    }
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
        console.log(jsObject.list[i].dt_txt);
        console.log(jsObject.list[i].main.temp.toFixed(0));
        console.log(jsObject.list[i].weather[0].icon);

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

/*
 const townDataURL = "https://byui-cit230.github.io/weather/data/towndata.json";

 fetch(townDataURL)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
     const towns = jsonObject.towns;
     for (let i = 0; i < towns.length; i++) {
       if (towns[i].name == "Preston") {
         let list = document.createElement("ul");
         for (let j = 0; j < towns[i].events.length; j++) {
           let thingsToDo = document.createElement("li");
           thingsToDo.textContent = towns[i].events[j];
           list.appendChild(thingsToDo)
           document.querySelector("div.townEvents").appendChild(list);
           //console.log(thingsToDo);

         }
       }
     }
   });

*/