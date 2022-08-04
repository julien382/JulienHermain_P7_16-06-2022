import { getAllUstensiles } from "./data/getAllUstensiles.js"
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

    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allUstensiles = getAllUstensiles(allRecipies); // ['passoire', 'verres', 'couteau']


    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    // <li>*ingredient*</li>
    // !! bien penser à vider la dropdown à chaque fois !!

    console.log(allUstensiles);

    dropdown.classList.toggle('elementTri__dropdown--active')
  })

}