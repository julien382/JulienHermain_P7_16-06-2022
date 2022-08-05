import { displayRecipies } from "../app/displayRecipies.js";
import { getAllIngredients } from "./data/getAllIngredients.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByIngredient } from "./utils/filterRecipiesByIngredient.js"

export const handleInputIngredient = () => {
  const inputContainer = document.querySelector('.elementTri')
  const arrow = inputContainer.querySelector('.elementTri__arrow')
  const dropdown = document.querySelector('.elementTri__dropdown')
  
  inputContainer.addEventListener('click', () => {
    
    const input = inputContainer.querySelector('.elementTri__input')
    /*input.focus()*/

    input.addEventListener('focus', () => {
      input.placeholder = 'Rechercher un ingrédient';
    })

    const list = inputContainer.querySelector('.ingredient-list')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']


    // !! bien penser à vider la dropdown à chaque fois !!
    list.innerHTML = '';
    
    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    // <li>*ingredient*</li>
    allIngredients.forEach(ingredient => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ingredient;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(ingredient, 'ingredient')
        
        // [TODO]
        // filterRecipiesByIngredient(ingredient)
        // const allRecipies = getLocalStorage();
        // displayRecipes(allRecipies)
        filterRecipiesByIngredient(ingredient)
        const allRecettes = getLocalStorage();
        displayRecipies(allRecettes)
      })
    });
    console.log(allIngredients);
  })

  // rotate de la flèche et ajout de la dropdown (avec les éléments li)
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
  })
}