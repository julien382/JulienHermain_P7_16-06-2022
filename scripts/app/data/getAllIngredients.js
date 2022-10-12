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

    // récupérer qu'un seul même ingrédient, pour éviter les doubles
    const uniqueIngredients = [...new Set(ingredients)];
    return uniqueIngredients;
}
