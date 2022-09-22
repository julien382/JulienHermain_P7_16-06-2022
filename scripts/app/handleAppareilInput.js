import { displayRecipies } from "../app/displayRecipies.js";
import { getAllAppareils } from "./data/getAllAppareils.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByAppareil } from "./utils/filterRecipiesByAppareil.js"
import { searchAppareils } from "./utils/searchAppareils.js";

export const handleInputAppareil = () => {
  const inputContainer = document.querySelector('.elementTri__flex2')
  const arrow = inputContainer.querySelector('.elementTri__arrow2')
  const dropdown = document.querySelector('.elementTri__dropdown2')

  inputContainer.addEventListener('click', () => {

    //changer le placeholder
    document.querySelector('.elementTri__inputAppareils').placeholder = "Appareils"
    const placeholder = document.querySelector('.elementTri__inputAppareils')
    placeholder.classList.toggle('inputGrey')
    //ajout de la class elementTriBig, pour agrandir la list ul
    const elementTri = document.querySelector('.colorAppareil')
    elementTri.classList.toggle('elementTriBig')


    const input = inputContainer.querySelector('.elementTri__inputAppareils')
    input.focus()
    
    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    if (dropdown.classList.contains('elementTri__dropdown--active')){
      document.querySelector('.elementTri__inputAppareils').placeholder = "Rechercher un appareil"
    }
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = document.querySelector('.appareil-list')
    list.innerHTML = '';

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allAppareils = getAllAppareils(allRecipies); // ['blender', 'saladier', 'cocotte']

    const tags = Array.from(document.querySelectorAll('.allTag .colorAppareil'));
    const tagsArray = tags.map(tag => tag.innerText.toLowerCase());

    const filteredAppareils = allAppareils.filter(appareil => !tagsArray.includes(appareil))

    // boucle sur  allAppareils afin d'insérer les éléments dans la dropdown
    filteredAppareils.forEach(appareil => {
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
        elementTri.classList.remove('elementTriBig')
        document.querySelector('.elementTri__inputAppareils').placeholder = "Appareils"
        placeholder.classList.remove('inputGrey')
      })
    });

    const inputAppareils = inputContainer.querySelector('.elementTri__inputAppareils')
    
    inputAppareils.addEventListener('input', () => {
      const value = inputAppareils.value 

      searchAppareils(value)
      
      const allRecipiesAppareil = getLocalStorage();
      displayRecipies(allRecipiesAppareil)
    });

  })


}