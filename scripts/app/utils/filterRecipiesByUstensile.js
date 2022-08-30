import { getLocalStorage, setLocalStorage } from "./localStorage.js";


export const filterRecipiesByUstensile = (ustensile) => {
    // 1 - récupérer toutes les recettes (allRecipies)
    const allRecipies = getLocalStorage();

    // 2 - boucler sur les allRecipies
    allRecipies.forEach(recipe => {
      // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
      if (recipe.display === true) {
        recipe.ustensils.forEach(ustensile => {
          const ustensileRecette = ustensile.toLowerCase()
          
          if (ustensileRecette.includes(ustensile)){
            recipe.display = true
            console.log(recipe);
          }
          else{
            recipe.display = false

          }
        })
        
      }

      setLocalStorage(allRecipies)
    })

  }