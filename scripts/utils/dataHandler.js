export const getData = async () => {
    const response = await fetch('../../data/photographers.json');

    if (response.ok) {
        const data = await response.json()
        return data;
    } else {
        console.error('ça va pas:', response.status, response.statusText);
    }
}

export const getAllRecipies = async (id) => {
    const DATA = await getData()
    let allRecipies = []
    DATA.recipies.forEach((recipies)=>{
        if (recipies.photographerId == id){
            allRecipies.push(recipies)
        }
    })
    return allRecipies
}