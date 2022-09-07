import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const searchMain = (inputValue) => {
    const allRecipies = getLocalStorage();
    
    if (inputValue.length >= 3){
        const cards = document.querySelectorAll(".cardRecette")
        
        console.log("cards");
        cards.forEach(card => {
            const text = card.innerText.toLowerCase()
            const id = card.id
            
            if (text.includes(inputValue)){
                allRecipies.forEach(recette => {
                    if (recette.id == id){
                        recette.display = true
                    }
                })
            }
            else{
                allRecipies.forEach(recette => {
                    if (recette.id == id){
                        recette.display = false
                    }
                })
            }
            console.log(text);
        }) 

    }
    else{
        allRecipies.forEach(recette => {
            recette.display = true
        })
    }
    setLocalStorage(allRecipies)
}