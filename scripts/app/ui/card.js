export const createCard = (recipe) => {
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
  cHeader__titleRecette.textContent = recipe.name

  const cHeader__time = document.createElement('div');
  cHeader__time.classList.add('cHeader__time')

  const clock = document.createElement('div');
  clock.classList.add('clock')

  const min = document.createElement('h4');
  min.classList.add('min')
  min.textContent = recipe.time + 'min'

  const cText__main = document.createElement('div');
  cText__main.classList.add('cText__main')

  const cMain__ingredients = document.createElement('div');
  cMain__ingredients.classList.add('cMain__ingredients')

    recipe.ingredients.forEach(ingredient => {
      const gras = document.createElement('p');
      gras.classList.add('gras')
      if (ingredient.unit && ingredient.quantity){
        gras.textContent = ingredient.ingredient + " : " + ingredient.quantity + " "+ ingredient.unit
      }
      else if (!ingredient.unit && !ingredient.quantity) {
        gras.textContent = ingredient.ingredient
      }
      else if(!ingredient.unit){
        gras.textContent = ingredient.ingredient + " : " + ingredient.quantity
      }
      else if (!ingredient.quantity){
        gras.textContent = ingredient.ingredient + " : " + ingredient.unit
      }
      cMain__ingredients.append(gras)
      
    });

  console.log(recipe);

  const cMain__description = document.createElement('div');
  cMain__description.classList.add('cMain__description')

  const p = document.createElement('p');
  p.textContent = recipe.description

  cardRecette.append(cardRecette__image)

  cText__header.append(cHeader__titleRecette)
  cHeader__time.append(clock)
  cHeader__time.append(min)
  cText__header.append(cHeader__time)

  cardRecette__text.append(cText__header)

  cardRecette.append(cardRecette__text)

  cText__main.append(cMain__ingredients)

  cMain__description.append(p)
  cText__main.append(cMain__description)

  cardRecette__text.append(cText__main)

  return cardRecette;
};
