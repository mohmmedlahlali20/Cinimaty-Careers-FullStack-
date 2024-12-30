import nestApi from "../../utils/pathNest";


async function fetchOffers() {
    try {
        const response = await nestApi.get("/offers");
        return response.data; 
    } catch (error) {
        console.error("Erreur lors de la récupération des offres :", error);
        return [];
    }
}

export default fetchOffers;
