import { createCard } from "./ui/card.js";

export const displayRecipies = (allRecipies) => {
    const cards = document.querySelector('.cardsRecette');
    cards.innerHTML = '';

    allRecipies.forEach(recipe => {

        if (recipe.display === true) {
            const card = createCard(recipe);
            cards.append(card);
        }
    });
}
