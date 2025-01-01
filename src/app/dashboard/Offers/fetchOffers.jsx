'use client';
import React, { useEffect, useState } from 'react';
import AddNewOffer from '../../(RH)/Offers/AddNewOffer';
import fetchOffers from '../../(client)/offers/utils/getOffers';

const OffersAdmin = () => {
    const [offers, setOffers] = useState([]);
    const [filteredOffers, setFilteredOffers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedContract, setSelectedContract] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');  
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedOffers = await fetchOffers();
                setOffers(fetchedOffers);
                setFilteredOffers(fetchedOffers);
            } catch (error) {
                console.error('Failed to fetch offers:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filterOffers = () => {
            let filtered = offers;

            if (searchQuery) {
                filtered = filtered.filter((offer) =>
                    offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    offer.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            if (selectedContract) {
                filtered = filtered.filter((offer) => offer.contract === selectedContract);
            }

            if (selectedStatus) {
                filtered = filtered.filter((offer) => offer.status === selectedStatus);
            }

            setFilteredOffers(filtered);
        };

        filterOffers();
    }, [searchQuery, selectedContract, selectedStatus, offers]);

    const truncateDescription = (description) => {
        const words = description.split(' ');
        return words.slice(0, 3).join(' ') + (words.length > 3 ? '...' : '');
    };

    const handleAddOffer = (newOffer) => {
        setOffers((prevOffers) => [...prevOffers, newOffer]);
        setFilteredOffers((prevOffers) => [...prevOffers, newOffer]);
      };

    return (
        <div className=" p-10 bg-gray-100">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
                Fetch Offers
            </h1>

            <div className="mb-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-lg"
                        placeholder="Search by title or description"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <select
                        className="p-2 border border-gray-300 rounded-lg"
                        value={selectedContract}
                        onChange={(e) => setSelectedContract(e.target.value)}
                    >
                        <option value="">All Contracts</option>
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                    <select
                        className="p-2 border border-gray-300 rounded-lg"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
               
            </div>

            <div>
            {isPopupOpen && (
                        <AddNewOffer
                            onClose={() => setIsPopupOpen(false)}
                            onSave={handleAddOffer}
                        />
                    )}
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                <table className="table-auto w-full">
                    <thead className="bg-gray-700 text-white">
                        <tr>
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">Description</th>
                            <th className="py-3 px-6">Salary</th>
                            <th className="py-3 px-6">Contract</th>
                            <th className="py-3 px-6">Localisation</th>
                            <th className="py-3 px-6">Company Name</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Phone</th>
                            <th className="py-3 px-6">Competences</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOffers.length > 0 ? (
                            filteredOffers.map((offer) => (
                                <tr key={offer._id} className="border-t">
                                    <td className="py-4 px-6 text-center">{offer.title}</td>
                                    <td className="py-4 px-6">{truncateDescription(offer.description)}</td>
                                    <td className="py-4 px-6 text-center">{offer.salary} MAD</td>
                                    <td className="py-4 px-6 text-center">{offer.contract}</td>
                                    <td className="py-4 px-6">{offer.localisation}</td>
                                    <td className="py-4 px-6">{offer.companyName}</td>
                                    <td className="py-4 px-6 text-center">{offer.status}</td>
                                    <td className="py-4 px-6">{offer.contactEmail}</td>
                                    <td className="py-4 px-6">{offer.contactPhone}</td>
                                    <td className="py-4 px-6">
                                        {Array.isArray(offer.competences)
                                            ? offer.competences.join(', ')
                                            : offer.competences}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10" className="text-center py-4 text-gray-500">
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
