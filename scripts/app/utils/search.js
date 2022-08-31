import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const search = (eventInputIngredient) => {
console.log(eventInputIngredient);
    const allRecipies = getLocalStorage();

        allRecipies.forEach(recipe => {

          if (recipe.display == true){
            const ingredientRecette = recipe.name.toLowerCase()
            console.log(ingredientRecette);
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