function loadData() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((response) => response.json())
    .then((json) => displayData(json));
}
function displayData(datas) {
  for (const data of datas) {
    const ul = document.getElementById("addData");
    const li = document.createElement("li");
    li.innerText = ` ${data.url}`;
    ul.appendChild(li);
  }
}
