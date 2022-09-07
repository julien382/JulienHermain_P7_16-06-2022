import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const searchMain = (inputValue) => {

    const allRecipies = getLocalStorage();
    console.log(allRecipies);
    
    if (inputValue.length >= 3){
        allRecipies.forEach(recipe => {
      // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
      if (recipe.display == true){
        const nameRecette = recipe.name
        if (nameRecette.includes(inputValue)){
          recipe.display = true
        }
        else{
          recipe.display = false
        }
      }

    })
    setLocalStorage(allRecipies)
    }
  }