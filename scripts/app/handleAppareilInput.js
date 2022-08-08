import { displayRecipies } from "../app/displayRecipies.js";
import { getAllAppareils } from "./data/getAllAppareils.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByIngredient } from "./utils/filterRecipiesByIngredient.js"

export const handleInputAppareil = () => {
  const inputContainer = document.querySelector('.elementTri2')
  const arrow = inputContainer.querySelector('.elementTri__arrow')
  const dropdown = document.querySelector('.elementTri__dropdown2')

  inputContainer.addEventListener('click', () => {

    const input = inputContainer.querySelector('.elementTri__input')
    /*input.focus()*/

    input.addEventListener('focus', () => {
      input.placeholder = 'Rechercher un appareil';
    })

    const list = inputContainer.querySelector('.appareil-list')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allAppareils = getAllAppareils(allRecipies); // ['blender', 'saladier', 'cocotte']


    // !! bien penser à vider la dropdown à chaque fois !!
    list.innerHTML = '';
    
    // boucle sur  allAppareils afin d'insérer les éléments dans la dropdown
    // <li>*appareil*</li>
    allAppareils.forEach(appareil => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = appareil;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(appareil, 'appareil')
        
        // [TODO] changer le nom allRecipes
        // filterRecipiesByAppareil(appareil)
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