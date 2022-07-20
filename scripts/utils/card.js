export const createCard = async () => {
    const cards = document.querySelector(".cards");
    allRecipies.forEach(recipies => {

        const card = createCard()
        cards.append(card)
    });
};


const createCard = () => {
    const cardRecette = document.createElement('div');
    cardRecette.classList.add('cardRecette')

    const cardRecette__image = document.createElement('div');
    cardRecette__image.classList.add('cardRecette__image')

    const cardRecette__text = document.createElement('div');
    cardRecette__text.classList.add('cardRecette__text')

    const cText__header = document.createElement('div');
    cText__header.classList.add('cText__header')

    const cHeader__titleRecette = document.createElement('h3');
    cHeader__titleRecette.classList.add('cHeader__titleRecette')

    const cHeader__time = document.createElement('div');
    cHeader__time.classList.add('cHeader__time')

    const clock = document.createElement('div');
    clock.classList.add('clock')

    const min = document.createElement('h4');
    min.classList.add('min')

    const cText__main = document.createElement('div');
    cText__main.classList.add('cText__main')

    const cMain__ingredients = document.createElement('div');
    cMain__ingredients.classList.add('cMain__ingredients')

    const gras = document.createElement('p');
    gras.classList.add('gras')

    const cMain__description = document.createElement('div');
    cMain__description.classList.add('cMain__description')

    const p = document.createElement('p');


    cardRecette.append(cardRecette__image)
    cardRecette.append(cardRecette__text)

    cardRecette__text.append(cText__header)

    cText__header.append(cHeader__titleRecette)
    cText__header.append(cHeader__time)

    cHeader__time.append(clock)
    cHeader__time.append(min)

    cardRecette.append(cText__main)

    cText__main.append(cMain__ingredients)

    cMain__ingredients.append(gras)

    cText__main.append(cMain__description)

    cMain__description.append(p)

};
