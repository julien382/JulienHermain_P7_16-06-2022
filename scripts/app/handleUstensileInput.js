import { displayRecipies } from "../app/displayRecipies.js";
import { getAllUstensiles } from "./data/getAllUstensiles.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByIngredient } from "./utils/filterRecipiesByIngredient.js"

export const handleInputUstensile = () => {
  const inputContainer = document.querySelector('.elementTri3')
  const arrow = inputContainer.querySelector('.elementTri__arrow')
  const dropdown = document.querySelector('.elementTri__dropdown3')

  inputContainer.addEventListener('click', () => {

    const input = inputContainer.querySelector('.elementTri__input')
    /*input.focus()*/

    input.addEventListener('focus', () => {
      input.placeholder = 'Rechercher un ustensile';
    })

    const list = inputContainer.querySelector('.ustensile-list')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allUstensiles = getAllUstensiles(allRecipies); // ['passoire', 'verres', 'couteau']


    // !! bien penser à vider la dropdown à chaque fois !!
    list.innerHTML = '';
    
    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    // <li>*ingredient*</li>
    allUstensiles.forEach(ustensile => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ustensile;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(ustensile, 'ustensile')
        
        // [TODO] changer le nom allRecipes
        // filterRecipiesByUstensile(ustensile)
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