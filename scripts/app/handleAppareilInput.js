import { getAllAppareils } from "./data/getAllAppareils.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"

export const handleInputAppareil = () => {
  const inputContainer = document.querySelector('.elementTri2')

  inputContainer.addEventListener('click', () => {
    const arrow = inputContainer.querySelector('.elementTri__arrow2')
    arrow.classList.toggle('elementTri__arrow--rotate')

    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    const dropdown = inputContainer.querySelector('.elementTri__dropdown')
    dropdown.classList.add('elementTri__dropdown2')
    const list = inputContainer.querySelector('.appareil-list')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allAppareils = getAllAppareils(allRecipies); // ['blender', 'saladier', 'cocotte']


    // boucle sur  allAppareils afin d'insérer les éléments dans la dropdown
    // <li>*appareil*</li>
    // !! bien penser à vider la dropdown à chaque fois !!
    list.innerHTML = '';

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
      })

    });

    dropdown.classList.toggle('elementTri__dropdown--active')
  })

}