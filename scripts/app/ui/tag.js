import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";

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
        tag.remove()
        
        const ingredients = [];
        allRecipies.forEach(recette => {
            recette.ingredients.forEach(ingredient => {
                const ingredientName = ingredient.ingredient.toLowerCase();
                ingredients.push(ingredientName);

                //console.log(ingredientName);
                //console.log(text);


                if (ingredientName.includes(text)){
                    recette.display = true
                    console.log('toto');
                }
            })
        })
        
    })

    setLocalStorage(allRecipies)
}