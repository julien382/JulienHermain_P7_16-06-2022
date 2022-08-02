import { getAllIngredients } from "./data/getAllIngredients.js"
import { getLocalStorage } from "./utils/localStorage.js"

export const handleInputIngredient = () => {
  const inputContainer = document.querySelector('.elementTri')

  inputContainer.addEventListener('click', () => {
    const arrow = inputContainer.querySelector('.elementTri__arrow')
    arrow.classList.toggle('elementTri__arrow--rotate')

    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    const dropdown = inputContainer.querySelector('.elementTri__dropdown')

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']


    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    // <li>*ingredient*</li>
    // !! bien penser à vider la dropdown à chaque fois !!

    console.log(allIngredients);

    dropdown.classList.toggle('elementTri__dropdown--active')
  })

}