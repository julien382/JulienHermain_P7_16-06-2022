import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { displayRecipies } from "../displayRecipies.js";

export const searchMain = (inputValue, erase) => {
    const allRecipies = getLocalStorage();
    
    const errorMessage = document.getElementById("messError")
    
    if (inputValue.length >= 3) {
        if (erase) {
            errorMessage.style = "display: none";
            allRecipies.forEach(recette => {
                recette.display = true
            })
            displayRecipies(allRecipies)
        }

        let cards = document.querySelectorAll(".cardRecette")

        cards.forEach(card => {
            const text = card.innerText.toLowerCase()
            const id = card.id
            
            // si valeur est dans le texte
            if (text.includes(inputValue)){
                allRecipies.forEach(recette => {
                    if (recette.id == id){
                        recette.display = true
                        console.log(recette);
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
        })

        displayRecipies(allRecipies)

        cards = document.querySelectorAll(".cardRecette")
        if (cards.length > 0) {
            errorMessage.style = "display: none";
        } else {
            errorMessage.style = "display: block";
        }
    }
    else{
        allRecipies.forEach(recette => {
            recette.display = true
            errorMessage.style = "display: none";
        })
    }
    setLocalStorage(allRecipies)
}
