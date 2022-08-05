import { getAllIngredients } from "./data/getAllIngredients.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"

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


    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    // <li>*ingredient*</li>
    // !! bien penser à vider la dropdown à chaque fois !!
    list.innerHTML = '';

    allIngredients.forEach(ingredient => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ingredient;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(ingredient, 'ingredient')
        
        // [TODO] changer le nom allRecipes
        // filterRecipiesByIngredient(ingredient)
        // const allRecipies = getLocalStorage();
        // displayRecipes(allRecipies)
      })
    });

  })

  arrow.addEventListener('click', () => {
    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
  })
}