import { getLocalStorage, setLocalStorage } from "./localStorage.js";


export const filterRecipiesByAppareil = (appareil) => {
    // 1 - récupérer toutes les recettes (allRecipies)
    const allRecipies = getLocalStorage();

    // 2 - boucler sur les allRecipies
    allRecipies.forEach(recipe => {
      // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
      if (recipe.display == true){
        const appareilRecette = recipe.appliance.toLowerCase()
        
        if (appareilRecette == appareil){
          recipe.display = true
        }
        else{
          recipe.display = false
        }
      }
      
    })

    setLocalStorage(allRecipies)
  }