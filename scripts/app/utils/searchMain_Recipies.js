import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const searchMain = (inputValue) => {
    const allRecipies = getLocalStorage();
    
    const errorMessage = document.getElementById("messError")
    
    if (inputValue.length >= 3){
        const cards = document.querySelectorAll(".cardRecette")

        cards.forEach(card => {
            const text = card.innerText.toLowerCase()
            const id = card.id
            
            // si valeur est dans le texte
            if (text.includes(inputValue)){
                allRecipies.forEach(recette => {
                    if (recette.id == id){
                        recette.display = true
                        errorMessage.style = "display: none";
                        console.log(errorMessage);
                    }
                })
            }
            else{
                allRecipies.forEach(recette => {
                    if (recette.id == id){
                        recette.display = false
                        errorMessage.style = "display: block";
                        console.log(errorMessage);
                    }
                })
            }
        }) 
        
    }
    else{
        allRecipies.forEach(recette => {
            recette.display = true
            errorMessage.style = "display: none";
            console.log(errorMessage);
        })
    }
    setLocalStorage(allRecipies)
    

}