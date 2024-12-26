import React from "react";
import fetchOffers from "./getOffers";

const Offers = async () => {
    const offers = await fetchOffers();

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-500 via-white-500 to-gray-500 p-10">
            <h1 className="text-5xl font-extrabold text-center text-white mb-10">
                Opportunities to Seize
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offers.map((offer) => (
                    <div
                        key={offer._id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {offer.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {offer.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full">
                                    {offer.slayer}
                                </span>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {offer.competences.map((competence, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-pink-100 text-pink-800 text-sm font-semibold px-4 py-2 rounded-full"
                                        >
                                            {competence}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <button
                                    className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 transition duration-300"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offers;