import { getAllRecipies } from "../utils/dataHandler.js";
import { getCard } from "../utils/card.js";

const init = async () => {
    const id = getParamUrl("id")
    const allRecipies = await getAllRecipies(id)

    getCard(allRecipies);
};

init();