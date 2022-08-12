import { getAllIngredients } from "../data/getAllIngredients.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";


export const filterRecipiesByIngredient = (ingredient) => {
    // 1 - récupérer toutes les recettes (allRecipies)
    const allRecipies = getLocalStorage();
    //const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    // 2 - boucler sur les allRecettes
    allRecipies.forEach(recipe => {
      // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
      const ingredientRecette = recipe.ingredients.map(element => element.ingredient.toLowerCase())
      
      // 4 - si oui, display = true 
      // 5 - sinon, display = false
      console.log(ingredientRecette.includes(ingredient));
      if (ingredientRecette.includes(ingredient)){
        recipe.display = true
      }
      else{
        recipe.display = false
      }
    })

    // 6 - sauvegarder dans le localStorage le nouveau allRecipies
    setLocalStorage(allRecipies)
  
    // indexOf()
    // includes()
    // find()
    // findIndex()

  }