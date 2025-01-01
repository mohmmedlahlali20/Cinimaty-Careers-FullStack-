import fetchOffer from "../utils/GetOneOffer";

export default async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const offer = await fetchOffer(id);
        return { props: { offer, id } };
    } catch (error) {
        return { props: { error: 'Failed to fetch offer details. Please try again later.' } };
    }
}