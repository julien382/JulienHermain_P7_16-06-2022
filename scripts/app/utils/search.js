import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const search = (eventInputIngredient) => {

    const allRecipies = getLocalStorage();

        allRecipies.forEach(recipe => {

          if (recipe.display == true){
            const ingredientRecette = recipe.name.toLowerCase()

            if (ingredientRecette.includes(eventInputIngredient)){
              recipe.display = true
              console.log(ingredientRecette);
            }
            else{
              recipe.display = false
            }
          }

          setLocalStorage(allRecipies)
        })
      
  }