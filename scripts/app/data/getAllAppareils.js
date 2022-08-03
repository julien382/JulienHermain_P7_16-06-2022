export const getAllAppareils = (allRecipies) => {
    const appareils = [];

    allRecipies.forEach(recipe => {
        if (recipe.display === true) {
            const appareilName = recipe.appliance.toLowerCase();
            appareils.push(appareilName);
        }
    });

    const uniqueAppareils = [...new Set(appareils)];
    return uniqueAppareils;
}