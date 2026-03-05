const params = new URLSearchParams(window.location.search);
console.log("params", params);
const id = params.get("id");

const produkt = document.querySelector(".produkt-info");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    produkt.innerHTML = "";
    produkt.innerHTML = `
        <div class="produktbillede">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="hoodie" />
        </div>
        <div class="info">
          <div class="produkt-details">
            <h2 class="produktnavn">${data.articletype}</h2>
            <p class="pris">Pris: ${data.price},-</p>
          </div>
          <div class="farve-container">
            <p>Vælg farve:</p>
            <div class="farvevalg">
              <button class="brown farve-btn"></button>
              <button class="blue farve-btn"></button>
              <button class="green farve-btn"></button>
            </div>
          </div>
          <div class="størrelse-container">
            <p>Vælg størrelse:</p>
            <div class="størrelsevalg">
              <button class="small str-btn"><span>S</span></button>
              <button class="medium str-btn"><span>M</span></button>
              <button class="large str-btn"><span>L</span></button>
              <button class="xlarge str-btn"><span>XL</span></button>
            </div>
          </div>
          <div class="køb-container">
            <button class="køb-knap">Køb nu</button>
          </div>
        </div>
        <div class="beskrivelse-container">
          <h3>Beskrivelse</h3>
          <p>${data.description}
          </p>
        </div>
    `;
  });
