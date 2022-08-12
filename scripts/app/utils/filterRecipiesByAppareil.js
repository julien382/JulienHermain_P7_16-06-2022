import { getLocalStorage, setLocalStorage } from "./localStorage.js";


export const filterRecipiesByAppareil = (appareil) => {
    // 1 - récupérer toutes les recettes (allRecipies)
    const allRecipies = getLocalStorage();

    // 2 - boucler sur les allRecipies
    allRecipies.forEach(recipe => {
      // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
      const appareilRecette = recipe.appliance.toLowerCase()
      
      // 4 - si oui, display = true 
      // 5 - sinon, display = false
      console.log(appareilRecette.includes(appareil));
      if (appareilRecette.includes(appareil)){
        recipe.display = true
      }
      else{
        recipe.display = false
      }
    })

    // 6 - sauvegarder dans le localStorage le nouveau allRecipies
    setLocalStorage(allRecipies)
  }