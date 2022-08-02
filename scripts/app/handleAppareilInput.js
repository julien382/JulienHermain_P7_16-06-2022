import { getAllAppareils } from "./data/getAllAppareils.js"
import { getLocalStorage } from "./utils/localStorage.js"

export const handleInputAppareil = () => {
  const inputContainer = document.querySelector('.elementTri2')

  inputContainer.addEventListener('click', () => {
    const arrow = inputContainer.querySelector('.elementTri__arrow2')
    arrow.classList.toggle('elementTri__arrow--rotate')

    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    const dropdown = inputContainer.querySelector('.elementTri__dropdown')
    dropdown.classList.toggle('elementTri__dropdown2')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allAppareils = getAllAppareils(allRecipies); // ['pomme', 'poire', 'fraise']


    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    // <li>*ingredient*</li>
    // !! bien penser à vider la dropdown à chaque fois !!

    console.log(allAppareils);

    dropdown.classList.toggle('elementTri__dropdown--active')
  })

}