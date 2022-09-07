import { displayRecipies } from "../app/displayRecipies.js";
import { getLocalStorage } from "./utils/localStorage.js"
import { searchMain } from "./utils/searchMain_Recipies.js"

export const handleMain = () => {
    const inputContainer = document.querySelector('.search')
    
    inputContainer.addEventListener('click', () => {
  
      const inputName = inputContainer.querySelector('.inputSearchRecette')
      
      inputName.addEventListener('input', () => {
        const value = inputName.value 
        console.log(value);
        searchMain(value)
        
        const allRecipiesIngredient = getLocalStorage();
        displayRecipies(allRecipiesIngredient)
      });
  
      
    })
  
  
  }