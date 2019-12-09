const requestURL = "https://kgriggs01.github.io/termproject/templeinfo.txt";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject.temples;
    for (let i = 0; i < temples.length; i++) {

      if (temples[i].name == 'Logan' || temples[i].name == 'Portland' || temples[i].name == 'San Diego' || temples[i].name == 'Star Valley') {

        let temple = ["Logan", "Portland", "San Diego", "Star Valley"];
        let card = document.createElement("section");
        let templeNameHeading = document.createElement("h3");
        let motto = document.createElement("h4");
        let yearFounded = document.createElement("p");
        let population = document.createElement("p");
        let annualRainfall = document.createElement("p");
        let templeInfoDiv = document.createElement("div");
        let image = document.createElement("img");

        templeNameHeading.textContent = temples[i].name;
        motto.textContent = temples[i].motto;
        yearFounded.textContent = "Year Founded: " + temples[i].yearFounded;
        population.textContent = "Population: " + temples[i].currentPopulation;
        annualRainfall.textContent = "Annual Rainfall: " + temples[i].averageRainfall;
        image.setAttribute("src", "./images/" + temples[i].photo);
        image.setAttribute("alt", temples[i].photo);

        templeInfoDiv.appendChild(templeNameHeading);
        templeInfoDiv.appendChild(motto);
        templeInfoDiv.appendChild(yearFounded);
        templeInfoDiv.appendChild(population);
        templeInfoDiv.appendChild(annualRainfall);
        card.appendChild(templeInfoDiv);
        card.appendChild(image);

        document.querySelector("div.templeInfo").appendChild(card);
      }
    }
  });