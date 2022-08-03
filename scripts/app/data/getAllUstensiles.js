export const getAllUstensiles = (allRecipies) => {
    const ustensiles = [];

    allRecipies.forEach(recipe => {
        if (recipe.display === true) {
            recipe.ustensiles.forEach(ustensile => {
                const ustensileName = ustensile.ustensile.toLowerCase();
                ustensile.push(ustensileName);
            })
        }
    });

    const uniqueUstensiles = [...new Set(ustensiles)];
    return uniqueUstensiles;
}