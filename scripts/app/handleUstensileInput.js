import { getAllUstensiles } from "./data/getAllUstensiles.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"

export const handleInputUstensile = () => {
  const inputContainer = document.querySelector('.elementTri3')

  inputContainer.addEventListener('click', () => {
    const arrow = inputContainer.querySelector('.elementTri__arrow3')
    arrow.classList.toggle('elementTri__arrow--rotate')

    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    const dropdown = inputContainer.querySelector('.elementTri__dropdown')
    dropdown.classList.add('elementTri__dropdown3')
    const list = inputContainer.querySelector('.ustensile-list')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allUstensiles = getAllUstensiles(allRecipies); // ['passoire', 'verres', 'couteau']


    // boucle sur  allUstensile afin d'insérer les éléments dans la dropdown
    // <li>*ustensile*</li>
    // !! bien penser à vider la dropdown à chaque fois !!
    list.innerHTML = '';

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
      })

    });

    dropdown.classList.toggle('elementTri__dropdown--active')
  })

}