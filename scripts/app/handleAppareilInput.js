import { displayRecipies } from "../app/displayRecipies.js";
import { getAllAppareils } from "./data/getAllAppareils.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByAppareil } from "./utils/filterRecipiesByAppareil.js"

export const handleInputAppareil = () => {
  const inputContainer = document.querySelector('.elementTri__flex2')
  const arrow = inputContainer.querySelector('.elementTri__arrow2')
  const dropdown = document.querySelector('.elementTri__dropdown2')

  inputContainer.addEventListener('click', () => {

    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    console.log(dropdown);
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = inputContainer.querySelector('.appareil-list')
    list.innerHTML = '';

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allAppareils = getAllAppareils(allRecipies); // ['blender', 'saladier', 'cocotte']

    // supprimer les appareils qui sont dans les tags
    // 1- récup tout le contenu (div.innerText) des tags appareils
    // 2- retirer les appareils de allAppareils qu'on a enlever à l'etape 1
    // allAppareils = ['pomme', 'poire', 'fraise', 'ananas', 'kiwi']
    // tags = ['fraise', 'kiwi']
    // appareils tout display allAppareils - tags

    // allAppareils de la boucle (ligne 38) le modifier (le nom) par ce que j'ai créer étape 2
   
    // boucle sur  allAppareils afin d'insérer les éléments dans la dropdown
    allAppareils.forEach(appareil => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = appareil;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(appareil, 'appareil')

        filterRecipiesByAppareil(appareil)
        const allRecipiesAppareil = getLocalStorage();
        displayRecipies(allRecipiesAppareil)
        //list.remove()
        arrow.classList.toggle('elementTri__arrow--rotate')
        dropdown.classList.toggle('elementTri__dropdown--active')
      })
    });

  })


}