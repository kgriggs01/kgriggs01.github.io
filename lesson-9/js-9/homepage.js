const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject.towns;
    for (let i = 0; i < towns.length; i++) {

      if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' ||towns[i].name ==  'Fish Haven' ) {

      let town = ["Preston", "Soda Springs", "Fish Haven"]; 
      let card = document.createElement("section");
      let townNameHeading = document.createElement("h2");
      let motto = document.createElement("h3");
      let yearFounded = document.createElement("p");
      let population = document.createElement("p");
      let annualRainfall = document.createElement("p");
      let image = document.createElement("img");


      townNameHeading.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      population.textContent = "Population: " + towns[i].currentPopulation;
      annualRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
      image.setAttribute("src", "./images/homepagePics/" + towns[i].photo);
      image.setAttribute("alt", towns[i].photo);


      card.appendChild(townNameHeading);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(population);
      card.appendChild(annualRainfall);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
  }
  });