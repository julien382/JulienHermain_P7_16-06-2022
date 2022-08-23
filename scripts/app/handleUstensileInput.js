import { displayRecipies } from "../app/displayRecipies.js";
import { getAllUstensiles } from "./data/getAllUstensiles.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByUstensile } from "./utils/filterRecipiesByUstensile.js"

export const handleInputUstensile = () => {
  const inputContainer = document.querySelector('.elementTri__flex3')
  const arrow = inputContainer.querySelector('.elementTri__arrow3')
  const dropdown = document.querySelector('.elementTri__dropdown3')

  inputContainer.addEventListener('click', () => {

    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    console.log(dropdown);
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = inputContainer.querySelector('.ustensile-list')
    list.innerHTML = '';

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allUstensiles = getAllUstensiles(allRecipies); // ['passoire', 'verres', 'couteau']

    // supprimer les ustensiles qui sont dans les tags
    // 1- récp tout le contenu (div.innerText) des tags ustensiles
    // 2- retirer les ustensiles de allUstensiles qu'on a enlever à l'etape 1
    // allUstensiles = ['pomme', 'poire', 'fraise', 'ananas', 'kiwi']
    // tags = ['fraise', 'kiwi']
    // ustensile tout display allUstensiles - tags

    // allUstensiles de la boucle (ligne 38) le modifier (le nom) par ce que j'ai créer étape 2
    
    // boucle sur  allUstensiles afin d'insérer les éléments dans la dropdown
    allUstensiles.forEach(ustensile => {
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
      })
    });
    
  })

  
}