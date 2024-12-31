'use client';
import fetchOffers from '../../offers/utils/getOffers';
import React, { useEffect, useState } from 'react';

const OffersAdmin = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedOffers = await fetchOffers();
        setOffers(fetchedOffers);
      } catch (error) {
        console.error('Failed to fetch offers:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
        Fetch Offers
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Competences</th>
            </tr>
          </thead>
          <tbody>
            {offers.length > 0 ? (
              offers.map((offer) => (
                <tr key={offer._id} className="border-t">
                  <td className="py-2 px-4">{offer.title}</td>
                  <td className="py-2 px-4">{offer.description}</td>
                  <td className="py-2 px-4">{offer.slayer} MAD</td>
                  <td className="py-2 px-4">
                    {Array.isArray(offer.competences)
                      ? offer.competences.join(', ')
                      : offer.competences}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No offers available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffersAdmin;
