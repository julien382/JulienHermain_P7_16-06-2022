import { displayRecipies } from "../app/displayRecipies.js";
import { getAllIngredients } from "./data/getAllIngredients.js"
import { createTag } from "./ui/tag.js"
import { getLocalStorage } from "./utils/localStorage.js"
import { filterRecipiesByIngredient } from "./utils/filterRecipiesByIngredient.js"

export const handleInputIngredient = () => {
  const inputContainer = document.querySelector('.elementTri__flex')
  const arrow = inputContainer.querySelector('.elementTri__arrow')
  const dropdown = document.querySelector('.elementTri__dropdown')
  
  inputContainer.addEventListener('click', () => {
    
    const input = inputContainer.querySelector('.elementTri__input')
    input.focus()

    arrow.classList.toggle('elementTri__arrow--rotate')
    dropdown.classList.toggle('elementTri__dropdown--active')
    console.log(dropdown);
    // !! bien penser à vider la dropdown à chaque fois !!
    const list = document.querySelector('.ingredient-list')
    list.innerHTML = '';
  
    // remplir la dropdown
    const allRecipies = getLocalStorage();
    const allIngredients = getAllIngredients(allRecipies); // ['pomme', 'poire', 'fraise']

    // supprimer les ingrédients qui sont dans les tags
    // 1- récup tout le contenu (div.innerText) des tags ingrédients
    // 2- retirer les ingrédients de allIngredient qu'on a enlever à l'etape 1
    // allIngredients = ['pomme', 'poire', 'fraise', 'ananas', 'kiwi']
    // tags = ['fraise', 'kiwi']
    // ingredient tout display allIngredient - tags

    // allIngredient de la boucle (ligne 38) le modifier (le nom) par ce que j'ai créer étape 2
    
    // boucle sur  allIngredients afin d'insérer les éléments dans la dropdown
    allIngredients.forEach(ingredient => {
      const liDropdown = document.createElement('li');      
      liDropdown.innerHTML = ingredient;
      list.appendChild(liDropdown);

      liDropdown.addEventListener('click', () => {
        createTag(ingredient, 'ingredient')
        
        filterRecipiesByIngredient(ingredient)
        const allRecipiesIngredient = getLocalStorage();
        displayRecipies(allRecipiesIngredient)
        //list.remove()
        arrow.classList.toggle('elementTri__arrow--rotate')
        dropdown.classList.remove('elementTri__dropdown--active')
      })
    });
    
  })


}