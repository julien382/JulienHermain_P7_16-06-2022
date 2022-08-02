export const getAllAppareils = (allRecipies) => {
    const appareils = [];

    allRecipies.forEach(recipe => {
        if (recipe.display === true) {
            recipe.appareils.forEach(appareil => {
                const appareilName = appareil.appareil.toLowerCase();
                ingredients.push(appareilName);
            })
        }
    });

    const uniqueAppareils = [...new Set(appareils)];
    return uniqueAppareils;
}
