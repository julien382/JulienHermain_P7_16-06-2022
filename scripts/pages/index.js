// index.js

import { displayRecipies } from "../app/displayRecipies.js";
import { getAllRecipies } from "../app/data/getAllRecipies.js";
import { handleInputIngredient } from "../app/handleIngredientInput.js";
import { handleInputAppareil } from "../app/handleAppareilInput.js";
import { handleInputUstensile } from "../app/handleUstensileInput.js";
import { handleMain } from "../app/handleMain.js";
import { setLocalStorage } from "../app/utils/localStorage.js";

const init = async () => {
    // On récupère toutes les recettes
    const allRecipies = await getAllRecipies()

    // On met toutes les recettes à display = true
    // la clé "display" est utilisée pour afficher ou non une recette
    allRecipies.forEach(recipe => {
        recipe.display = true;
    })

    // stocker les recettes dans le localStorage pour pouvoir les réutiliser n'importe où
    setLocalStorage(allRecipies)

    
    // on gère les inputs
    handleInputIngredient()
    handleInputAppareil()
    handleInputUstensile()
    handleMain()
    // ....


    // on affiche les recettes
    displayRecipies(allRecipies)
};

init();
