import { getLocalStorage, setLocalStorage } from "./localStorage.js";


export const search = (ingredient) => {
    // 1 - récupérer toutes les recettes (allRecipies)
    const allRecipies = getLocalStorage();
    console.log(allRecipies);
    //const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    // 2 - boucler sur les allRecettes
    allRecipies.forEach(recipe => {
      // 3 - voir si dans chaque recettes l'ingrédient est présent dans la liste d'ingrédients
      if (recipe.display == true){
        const ingredientRecette = recipe.ingredients.map(element => element.ingredient.toLowerCase())

        if (ingredientRecette.includes(ingredient)){
            setLocalStorage(allRecipies)
        }
        else{
          
        }
      }

      
    })
      
  }