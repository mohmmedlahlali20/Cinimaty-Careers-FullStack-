'use client'
import React, { useEffect, useState } from "react";
import fetchOffer from "../utils/GetOneOffer"; 
import Form from "./components/Form";

export default function OfferPage({ params }) {
    const { id } = params;
    const [offer, setOffer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOffer = async () => {
            try {
                const fetchedOffer = await fetchOffer(id);
                setOffer(fetchedOffer);
            } catch (error) {
                setError('Failed to fetch offer details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        getOffer();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl font-semibold text-gray-700">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl font-semibold text-red-600">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-extrabold text-gray-800">{offer.title}</h1>
                    <p className="text-gray-600 mt-4 leading-relaxed">{offer.description}</p>

                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700">Details de l'offre :</h2>
                        <ul className="space-y-2 mt-4">
                            <li><strong>ID:</strong> {offer._id}</li>
                            <li><strong>Contrat:</strong> {offer.contract}</li>
                            <li><strong>Localisation:</strong> {offer.localisation}</li>
                            <li><strong>Salaire:</strong> {offer.salary} MAD</li>
                            <li><strong>Nom de l'entreprise:</strong> {offer.companyName}</li>
                            <li><strong>Status:</strong> {offer.status}</li>
                            <li><strong>Email de contact:</strong> <a href={`mailto:${offer.contactEmail}`} className="text-blue-500">{offer.contactEmail}</a></li>
                            <li><strong>Téléphone de contact:</strong> <a href={`tel:${offer.contactPhone}`} className="text-blue-500">{offer.contactPhone}</a></li>
                            <li><strong>Date de création:</strong> {new Date(offer.createdAt).toLocaleString()}</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700">Compétences :</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            {offer.competences.map((competence, index) => (
                                <li
                                    key={index}
                                    className="text-gray-600 m-3 bg-purple-100 px-4 py-2 rounded-lg shadow-sm inline-block"
                                >
                                    {competence}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Form id={id} />
            </div>
        </div>
    );
}
