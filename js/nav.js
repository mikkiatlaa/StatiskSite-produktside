const navContainer = document.querySelector("#navbar");

fetch(`https://kea-alt-del.dk/t7/api/seasons`)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    navContainer.innerHTML = "";
    data.forEach((season) => {
      navContainer.innerHTML += `
          <li><a href="produktliste.html?season=${season.season}">${season.season}</a></li>
        `;
    });
  });
