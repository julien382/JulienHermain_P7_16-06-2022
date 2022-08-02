const createCard = (recipe) => {
    const cardTag = document.createElement('div');
    cardTag.classList.add('cardRecette')

    const cardTag__text = document.createElement('div');
    cardTag__text.classList.add('cardTag__text')


    cardTag.append(cardTag__text)

    return cardTag;
};