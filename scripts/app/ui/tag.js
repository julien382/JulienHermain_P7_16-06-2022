import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";
import { displayRecipies } from "../displayRecipies.js";
import { getAllIngredients } from "../data/getAllIngredients.js"

export const createTag = (text, type) => {
    const allRecipies = getLocalStorage();

    const tag = document.createElement('div');
    tag.classList.add('tag');

    // changement de la couleur par rapport au type de l'input
    if (type === 'ingredient') {
        tag.classList.add('colorIngredient');
    }
    if (type === 'appareil') {
        tag.classList.add('colorAppareil');
    }
    if (type === 'ustensile') {
        tag.classList.add('colorUstensile');
    }

    const content = document.createElement('div');
    content.classList.add('elementIngrédient__flex');

    const p = document.createElement('p');
    p.classList.add('elementIngrédient__text');

    const cross = document.createElement('div');
    cross.classList.add('elementIngrédient__cross');

    p.innerHTML = text;
    content.appendChild(p);
    content.appendChild(cross);
    tag.appendChild(content);

    const triDom = document.querySelector('.allTag');
    triDom.appendChild(tag);
    
        // suppression du tag au clic sur la croix
        cross.addEventListener('click', () => {
            const allrecipies = getLocalStorage();
    
            // suppression du DOM
            tag.remove();
            // on récupère les tags restant
            const tagsIng = Array.from(document.querySelectorAll('.allTag .colorIngredient'));
            const tagsApp = Array.from(document.querySelectorAll('.allTag .colorAppareil'));
            const tagsUst = Array.from(document.querySelectorAll('.allTag .colorUstensile'));
    
            const tagsIngArray = tagsIng.map(tag => tag.innerText.toLowerCase());
            const tagsAppArray = tagsApp.map(tag => tag.innerText.toLowerCase());
            const tagsUstArray = tagsUst.map(tag => tag.innerText.toLowerCase());
            const allTags = [...tagsIngArray, ...tagsAppArray, ...tagsUstArray];
            
            // on filtre les recettes en fonction des tags restants
            allrecipies.forEach(recipie => {
                const ingredients = recipie.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
                const allParseData = [...recipie.ustensils, recipie.appliance.toLowerCase(), ...ingredients];
    
                if (allTags.every(tag => allParseData.includes(tag))) {
                    recipie.display = true;
                } else {
                    recipie.display = false;
                }
            });
    
            setLocalStorage(allrecipies)
            displayRecipies(allrecipies)
        })
    

    setLocalStorage(allRecipies)
}