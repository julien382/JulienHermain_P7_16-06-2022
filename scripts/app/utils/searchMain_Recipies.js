import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export const searchMain = (inputValue) => {
    const allRecipies = getLocalStorage();
    
    const toto = document.getElementById("messError")
    
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
                        toto.style = "display: none";
                        console.log(toto);
                    }
                })
            }
            else{
                allRecipies.forEach(recette => {
                    if (recette.id == id){
                        recette.display = false
                        toto.style = "display: block";
                        console.log(toto);
                    }
                })
            }
        }) 
        
    }
    else{
        allRecipies.forEach(recette => {
            recette.display = true
            toto.style = "display: none";
            console.log(toto);
        })
    }
    setLocalStorage(allRecipies)
    

}