/**
 * 
 * @param {string[]} allRecipies 
 * @returns {string[]} tableau de tous les ingrédients dont les recettes à display = true 
 */
 export const getAllIngredients = (allRecipies) => {
    const ingredients = [];

    allRecipies.forEach(recipe => {
        if (recipe.display === true) {
            recipe.ingredients.forEach(ingredient => {
                const ingredientName = ingredient.ingredient.toLowerCase();
                ingredients.push(ingredientName);
            })
        }
    });

    const uniqueIngredients = [...new Set(ingredients)];
    return uniqueIngredients;
}
