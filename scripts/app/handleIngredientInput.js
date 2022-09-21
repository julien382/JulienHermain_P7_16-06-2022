import { displayRecipies } from "../app/displayRecipies.js";
import { getAllIngredients } from "./data/getAllIngredients.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByIngredient } from "./utils/filterRecipiesByIngredient.js"
import { search } from "./utils/search.js"

export const handleInputIngredient = () => {
  const inputContainer = document.querySelector('.elementTri__flex1')
  const arrow = inputContainer.querySelector('.elementTri__arrow1')
  const dropdown = document.querySelector('.elementTri__dropdown1')
  
  inputContainer.addEventListener('click', () => {
    
    const input = inputContainer.querySelector('.elementTri__inputIngredient')
    input.focus()

    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = document.querySelector('.ingredient-list')
    list.innerHTML = '';
  
    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    const tags = Array.from(document.querySelectorAll('.allTag .colorIngredient'));
    const tagsArray = tags.map(tag => tag.innerText.toLowerCase());

    const filteredIngredients = allIngredients.filter(ingredient => !tagsArray.includes(ingredient))
    console.log(filteredIngredients);
    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    filteredIngredients.forEach(ingredient => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ingredient;
      list.appendChild(liDropdown);

      // au click sur un li ca créer un tag
      liDropdown.addEventListener('click', () => {
        createTag(ingredient, 'ingredient')
        //console.log(createTag);
        
        filterRecipiesByIngredient(ingredient)
        const allRecipiesIngredient = getLocalStorage();
        displayRecipies(allRecipiesIngredient)
        //list.remove()
        arrow.classList.toggle('elementTri__arrow--rotate')
        dropdown.classList.remove('elementTri__dropdown--active')
      })
    });

    const inputIngredient = inputContainer.querySelector('.elementTri__inputIngredient')
    
    inputIngredient.addEventListener('input', () => {
      const value = inputIngredient.value 

      search(value)
      
      const allRecipiesIngredient = getLocalStorage();
      displayRecipies(allRecipiesIngredient)
    });

    
  })


}