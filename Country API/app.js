const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
const displayCountry = (countries) => {
  const grid = document.getElementById("grid-container");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Country Name: ${country.name.common} </h3>
    <p>Capital : ${country.capital}</p>
    <button onclick="loadDetail('${country.cca2}')" id="">Load Country Detail</button>
    
    `;
    grid.appendChild(countryDiv);
  });
};
const loadDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetail(data));
};
const displayDetail = (datas) => {
  const imgContainer = document.getElementById("img-container");
  datas.forEach((data) => {
    const img = data.flags.png;
    imgContainer.innerHTML = `<img src="${img}" alt="">`;
  });
};
