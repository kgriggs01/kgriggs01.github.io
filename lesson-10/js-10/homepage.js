const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject.towns;
    for (let i = 0; i < towns.length; i++) {

      if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {

        let town = ["Preston", "Soda Springs", "Fish Haven"];
        let card = document.createElement("section");
        let townNameHeading = document.createElement("h3");
        let motto = document.createElement("h4");
        let yearFounded = document.createElement("p");
        let population = document.createElement("p");
        let annualRainfall = document.createElement("p");
        let townInfoDiv = document.createElement("div");
        let image = document.createElement("img");

        townNameHeading.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        annualRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        image.setAttribute("src", "./images/" + towns[i].photo);
        image.setAttribute("alt", towns[i].photo);

        townInfoDiv.appendChild(townNameHeading);
        townInfoDiv.appendChild(motto);
        townInfoDiv.appendChild(yearFounded);
        townInfoDiv.appendChild(population);
        townInfoDiv.appendChild(annualRainfall);
        card.appendChild(townInfoDiv);
        card.appendChild(image);

        document.querySelector("div.townInfo").appendChild(card);
      }
    }
  });