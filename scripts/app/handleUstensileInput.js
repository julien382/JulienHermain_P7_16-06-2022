import { displayRecipies } from "../app/displayRecipies.js";
import { getAllUstensiles } from "./data/getAllUstensiles.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByUstensile } from "./utils/filterRecipiesByUstensile.js"
import { searchUstensiles } from "./utils/searchUstensiles.js";

export const handleInputUstensile = () => {
  const inputContainer = document.querySelector('.elementTri__flex3')
  const arrow = inputContainer.querySelector('.elementTri__arrow3')
  const dropdown = document.querySelector('.elementTri__dropdown3')

  inputContainer.addEventListener('click', () => {

    //changer le placeholder
    document.querySelector('.elementTri__inputUstensiles').placeholder = "Ustensiles"
    const placeholder = document.querySelector('.elementTri__inputUstensiles')
    placeholder.classList.toggle('inputGrey')
    //ajout de la class elementTriBig, pour agrandir la list ul
    const elementTri = document.querySelector('.colorUstensile')
    elementTri.classList.toggle('elementTriBig')


    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    if (dropdown.classList.contains('elementTri__dropdown--active')){
      document.querySelector('.elementTri__inputUstensiles').placeholder = "Rechercher un ustensile"
    }
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = document.querySelector('.ustensile-list')
    list.innerHTML = '';

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allUstensiles = getAllUstensiles(allRecipies); // ['passoire', 'verres', 'couteau']

    const tags = Array.from(document.querySelectorAll('.allTag .colorUstensile'));
    const tagsArray = tags.map(tag => tag.innerText.toLowerCase());

    const filteredUstensiles = allUstensiles.filter(ustensile => !tagsArray.includes(ustensile))

    // boucle sur  allUstensiles afin d'insérer les éléments dans la dropdown
    filteredUstensiles.forEach(ustensile => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ustensile;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(ustensile, 'ustensile')
        
        filterRecipiesByUstensile(ustensile)
        const allRecipiesUstensile = getLocalStorage();
        displayRecipies(allRecipiesUstensile)
        //list.remove()
        arrow.classList.toggle('elementTri__arrow--rotate')
        dropdown.classList.remove('elementTri__dropdown--active')
        elementTri.classList.remove('elementTriBig')
        document.querySelector('.elementTri__inputUstensiles').placeholder = "Ustensiles"
        placeholder.classList.remove('inputGrey')
      })
    });
    
    const inputUstensiles = inputContainer.querySelector('.elementTri__inputUstensiles')
    
    inputUstensiles.addEventListener('input', () => {
      const value = inputUstensiles.value 

      searchUstensiles(value)
      
      const allRecipiesUstensile = getLocalStorage();
      displayRecipies(allRecipiesUstensile)
    });

  })

  
}