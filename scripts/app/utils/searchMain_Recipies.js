import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const searchMain = (inputValue) => {

    const allRecipies = getLocalStorage();
    
    if (inputValue.length >= 3){
        allRecipies.forEach(recipe => {
            if (recipe.display == true){
                const nameRecette = recipe.name.toLowerCase()
                console.log(nameRecette);

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