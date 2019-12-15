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
        let streetAddress = document.createElement("p");
        let cityStateZip = document.createElement("p");
        let country = document.createElement("p");
        let telephone = document.createElement("p");
        let email = document.createElement("p");
        let templeInfoDiv = document.createElement("div");
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
        templeInfoDiv.appendChild(streetAddress);
        templeInfoDiv.appendChild(cityStateZip);
        templeInfoDiv.appendChild(country);
        templeInfoDiv.appendChild(telephone);
        templeInfoDiv.appendChild(email);
        card.appendChild(templeName);
        card.appendChild(image);
        card.appendChild(templeInfoDiv);
   
        document.querySelector("div.templeInfo").appendChild(card);
      }
    }
  });

