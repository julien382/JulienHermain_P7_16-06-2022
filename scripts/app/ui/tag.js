export const createTag = (text, type) => {
    const tag = document.createElement('div');
    tag.classList.add('elementIngrédient');

    // changement de la couleur par rapport au type de l'input
    if (type === 'ingredient') {
        tag.classList.add('elementTri__dropdown1');
    }
    if (type === 'appareil') {
        tag.classList.add('elementTri__dropdown2');
    }
    if (type === 'ustensil') {
        tag.classList.add('elementTri__dropdown3');
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

    const triDom = document.querySelector('.tri');
    triDom.appendChild(tag);
    
    // suppression du tag au clic sur la croix
    cross.addEventListener('click', () => {
        tag.remove()
      })
}