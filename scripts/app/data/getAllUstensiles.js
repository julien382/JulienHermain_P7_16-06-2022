export const getAllUstensiles = (allRecipies) => {
    const ustensiles = [];

    allRecipies.forEach(recipe => {
        if (recipe.display === true) {
            recipe.ustensils.forEach(ustensile => {
                const ustensileName = ustensile.toLowerCase();
                ustensiles.push(ustensileName);
            })
        }
    });

    const uniqueUstensiles = [...new Set(ustensiles)];
    return uniqueUstensiles;
}