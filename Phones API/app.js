const loadPhones = (search, limit) => {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data, limit));
};
const displayPhones = (phones, limit) => {
  console.log(phones.length);
  const noResult = document.getElementById("no-result");
  const showAllbtn = document.getElementById("show-all");
  if (phones.length === 0) {
    noResult.classList.remove("d-none");
  } else {
    noResult.classList.add("d-none");
  }

  if (limit && phones.length > 5) {
    phones = phones.slice(0, limit);
    showAllbtn.classList.remove("d-none");
  } else {
    showAllbtn.classList.add("d-none");
  }
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ``;
  phones.forEach((phone) => {
    console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card h-100">
                <img src="${phone.image}" style="width: 300px; height :auto;" class="card-img-top mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
    </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};
const processSearch = (limit) => {
  const searchF = document.getElementById("searchField");
  loadPhones(searchF.value, limit);
};

document.getElementById("search-btn").addEventListener("click", function () {
  processSearch(5);
});
document.getElementById("show-btn-all").addEventListener("click", function () {
  processSearch();
});
