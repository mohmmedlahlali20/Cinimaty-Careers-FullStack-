import React from 'react';
import fetchOffers from '../utils/getOffers';
import SearchBar from './SearchBar';
import OfferCard from './OfferCard';


const Offers = async ({ searchParams }) => {
    const offers = await fetchOffers();
    const searchQuery = searchParams.query?.toLowerCase() || '';

    const filteredOffers = offers.filter((offer) =>
        offer.title.toLowerCase().includes(searchQuery) ||
        offer.competences.some((comp) => comp.toLowerCase().includes(searchQuery))
    );

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-500 via-white-500 to-gray-500 p-10">
            <h1 className="text-5xl font-extrabold text-center text-white mb-10">
                Opportunities to Seize
            </h1>
            <SearchBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredOffers.map((offer) => (
                    <OfferCard key={offer._id} offer={offer} />
                ))}
            </div>
        </div>
    );
};

export default Offers;
