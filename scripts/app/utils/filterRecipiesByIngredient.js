import { getAllIngredients } from "./data/getAllIngredients.js"
import { getLocalStorage } from "./utils/localStorage.js"

export const filterRecipiesByIngredient = (ingredient) => {
    // 1 - récupérer toutes les recettes (allRecipies)
    const allRecipies = getLocalStorage();
    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    // 2 - boucler sur les recettes
    
    // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
  
    // 'pomme'
    // ['fraise', 'pomme', 'cochon']
  
    // indexOf()
    // includes()
    // find()
    // findIndex()

    allIngredients.forEach(ingredient => {
      includes(allIngredients)
      if (includes = true){
        recipe.display == true
      }
      else{
        recipe.display == false
      }
    });
    // 4 - si oui, display = true 
    // 5 - sinon, display = false
    // 6 - sauvegarder dans le localStorage le nouveau allRecipies
  }