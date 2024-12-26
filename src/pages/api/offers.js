import nestApi from "app/utils/pathNest";

export async function getServerSideProps() {
    try {
        const response = await nestApi.get('/offers');
        const offers = response.data;
        console.log(offers);
        
        return {
            props: {
                offers, 
            },
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des offres:', error.message);
        return {
            props: {
                offers: [],
                error: 'Erreur lors de la récupération des données',
            },
        };
    }
}