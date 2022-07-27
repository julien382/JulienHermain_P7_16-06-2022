export const getAllRecipies = async () => {
    const response = await fetch('./data/recipes.json');

    if (response.ok) {
        const data = await response.json()
        return data.recipes;
    } else {
        console.error('ça va pas:', response.status, response.statusText);
        return null;
    }
}
