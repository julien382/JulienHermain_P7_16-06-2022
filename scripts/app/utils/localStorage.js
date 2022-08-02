const KEY = 'allRecipies';

export const setLocalStorage = (allRecipies) => {
  localStorage.setItem(KEY, JSON.stringify(allRecipies));
}

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(KEY));
}