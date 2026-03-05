document.querySelectorAll(".buttons button").forEach((knap) => {
  knap.addEventListener("click", filterButtonClick);

  function filterButtonClick(evt) {
    showFiltered(evt.currentTarget.dataset.gender);
  }

  function showFiltered(filter) {
    let dataToShow;
    if (filter === "all") {
      dataToShow = allData;
    } else {
      dataToShow = allData.filter((produkt) => produkt.gender === filter);
    }
    showProducts(dataToShow);

    let allData;
    getData(`https://kea-alt-del.dk/t7/api/products?category=${category}`);
    function getData(url) {
      fetch(url).then((response) =>
        response.json().then((data) => {
          allData = data;
          showProducts(allData);
        }),
      );
    }
  }
});
