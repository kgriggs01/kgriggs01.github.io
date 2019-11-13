const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject.towns;
    for (let i = 0; i < towns.length; i++) {

      let card = document.createElement("section");

      let townNameHeading = document.createElement("h2");
      townNameHeading.textContent = towns[i].name;
      card.appendChild(townNameHeading);

      let motto = document.createElement("h3");
      motto.textContent = towns[i].motto;
      card.appendChild(motto);


      let yearFounded = document.createElement("p");
      yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      card.appendChild(yearFounded);

      
      let population = document.createElement("p");
      population.textContent = "Population: " + towns[i].currentPopulation;
      card.appendChild(population);

      let annualRainfall = document.createElement("p");
      annualRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
      card.appendChild(annualRainfall);



      document.querySelector("div.cards").appendChild(card);
    }
    
  });