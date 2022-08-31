import { displayRecipies } from "../app/displayRecipies.js";
import { getAllIngredients } from "./data/getAllIngredients.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByIngredient } from "./utils/filterRecipiesByIngredient.js"
import { search } from "./utils/search.js"

export const handleInputIngredient = () => {
  const inputContainer = document.querySelector('.elementTri__flex')
  const arrow = inputContainer.querySelector('.elementTri__arrow')
  const dropdown = document.querySelector('.elementTri__dropdown')
  
  inputContainer.addEventListener('click', () => {
    
    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    console.log(dropdown);
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = document.querySelector('.ingredient-list')
    list.innerHTML = '';
  
    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    
    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    allIngredients.forEach(ingredient => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ingredient;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(ingredient, 'ingredient')
        
        filterRecipiesByIngredient(ingredient)
        const allRecipiesIngredient = getLocalStorage();
        displayRecipies(allRecipiesIngredient)

        //list.remove()
        arrow.classList.toggle('elementTri__arrow--rotate')
        dropdown.classList.remove('elementTri__dropdown--active')
      })

      
      
    });

    const inputIngredient = inputContainer.querySelector('.elementTri__inputIngredient')
    
    inputIngredient.addEventListener('input', (eventInputIngredient) => {

      search(eventInputIngredient)
      const allRecipiesIngredient = getLocalStorage();
      displayRecipies(allRecipiesIngredient)
    });

    console.log(eventInputIngredient);
    
  })


}