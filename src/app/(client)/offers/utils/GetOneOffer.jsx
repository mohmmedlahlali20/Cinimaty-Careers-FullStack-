import Swal from "sweetalert2";

async function fetchOffer(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_NEST}/offers/${id}`, {
        cache: 'no-store',
    });

    

    if (!res.ok) {
        throw new Error(`Failed to fetch offer with id: ${id}`);
    }

    return res.json();
}

export default  fetchOffer;