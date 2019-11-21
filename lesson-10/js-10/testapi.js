const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c5be23148aa1ea915f584c3fbe57e45c";

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const imagesrc = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c5be23148aa1ea915f584c3fbe57e45c" + jsObject.forcast.list.main.icon + '.png';  // note the concatenation
    const desc = jsObject.list.weather.description;  // note how we reference the weather array
    
    document.getElementById('current-temp').textContent = Math.round((jsObject.forcast.list[0].main.temp - 273.15) * 1.8) + 32;
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

});

