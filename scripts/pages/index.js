// index.js

import { displayRecipies } from "../utils/card.js";
import { getAllRecipies } from "../utils/dataHandler.js";
import { getAllIngredients } from "../utils/getAllIngredients.js";

const init = async () => {
    // On récupère toutes les recettes
    const allRecipies = await getAllRecipies()

    // On met toutes les recettes à display = true
    allRecipies.forEach(recipe => {
        recipe.display = true;
    })

    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    console.log(allIngredients);
    // insertIngredientsInDropdown(allIngredients);

    displayRecipies(allRecipies)
};

init();
