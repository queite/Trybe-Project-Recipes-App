export const fetchFoods = (succcess, error) => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals) : error(json))));
};

export const fetchDrinks = (succcess, error) => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks) : error(json))));
};

export const fetchFoodsByCategory = async (category) => {
  const max = 12;
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await result.json();
  const limit = data.meals.splice(0, max);
  return limit;
};

export const fetchDrinksByCategory = async (category) => {
  const max = 12;
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await result.json();
  const limit = data.drinks.splice(0, max);
  return limit;
};

export const fetchFoodRecipe = (id, succcess, fail) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.meals) : fail(json))));
};

// export const fetchRandomFood = () => {
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((response) => response.json()
//       .then((json) => (json.meals[0].idMeal)));
// };

export const fetchDrinkRecipe = (idDrink, succcess, failDrink) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    .then((response) => response.json()
      .then((json) => (response.ok
        ? succcess(json.drinks) : failDrink(json))));
};

// www.thecocktaildb.com/api/json/v1/1/filter.php?c=

// endpoints:
//
// categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
// nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
// ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
//
