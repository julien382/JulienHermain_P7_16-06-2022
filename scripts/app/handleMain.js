import { displayRecipies } from "../app/displayRecipies.js";
import { getLocalStorage } from "./utils/localStorage.js"
import { searchMain } from "./utils/searchMain_Recipies.js"

export const handleMain = () => {
  const inputContainer = document.querySelector('.search')
    
  inputContainer.addEventListener('click', () => {
  
    const inputName = inputContainer.querySelector('.inputSearchRecette')

    inputName.addEventListener('keyup', (event) => {
      const value = inputName.value.toLowerCase()
      const key = event.key
      let erase = false

      if (key === 'Backspace' || key === 'Delete') {
        erase = true
      } else {
        erase = false
      }

      searchMain(value, erase)

      const allRecipiesIngredient = getLocalStorage();
      displayRecipies(allRecipiesIngredient)
    })      
  })
}
