const loadFood = (item) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};
const displayMeal = (meals) => {
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = ``;
  console.log(meals);
  meals.forEach((meal) => {
    const mealdiv = document.createElement("div");
    console.log(meal);
    mealdiv.classList.add("col");
    mealdiv.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    </div>
     </div>`;
    mealContainer.appendChild(mealdiv);
  });
};

const search = () => {
  const textValue = document.getElementById("input-text");
  const text = textValue.value;
  loadFood(text);
  textValue.value = "";
};
