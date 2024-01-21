const loadMEals = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
};

const displayMeals = meals =>{
    // console.log(meals);
    
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');

        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick =" loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,400)}</p>
            </div>
         </div>
        
        `
        mealContainer.appendChild(mealDiv);
    });
}

const searchFood = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMEals(searchText);
    searchField.value = '';
}
const loadMealDetails = (idMeal)=>{
    // console.log("meal id", idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal=>{
    const displayMealContainer = document.getElementById('display-meal-container');
    displayMealContainer.innerHTML = '';

    const createDiv = document.createElement('div');
    createDiv.classList.add('card');
    createDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Meal-Id: ${meal.idMeal}</p>
            <p class="card-text">Meal-Id: ${meal.idMeal}</p>
            <p class="card-text">Meal-Category: ${meal.strCategory}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    
    `;
    displayMealContainer.appendChild(createDiv);
}

loadMEals('a');