const categoryContainer = document.querySelector(".categories");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    categoryContainer.innerHTML = "";
    data.forEach((category) => {
      categoryContainer.innerHTML += `
         <article class="card">
          <div class="card-content">
            <a href="produktliste.html?category=${category.category}">${category.category}</a>
          </div>
        </article>
        `;
    });
  });
