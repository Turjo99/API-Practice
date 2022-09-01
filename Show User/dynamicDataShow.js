const users = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showUsers(data));
};

const showUsers = (datas) => {
  const main = document.getElementById("users");
  for (const data of datas) {
    const div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
    <h3>User Name : ${data.name} </h3>
    <p>User ID: ${data.id}</p>
    <p>User Email: ${data.email}</p>
    <p>User Company: ${data.company.name} </p>
    <p>Adress: <br>
        Street : ${data.address.street} <br>
        City ${data.address.city}: <br>

    </p>
    `;
    main.appendChild(div);
  }
};
