'use client'
import React, { useEffect, useState } from "react";
import fetchOffer from "../utils/GetOneOffer"; 
import Form from "./components/Form";
import { Briefcase, MapPin, CreditCard, Building, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';

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
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-xl font-semibold text-gray-700 animate-pulse">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-xl font-semibold text-red-600 bg-white p-6 rounded-lg shadow-lg">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="lg:flex lg:gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white overflow-hidden shadow-xl rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{offer.title}</h1>
                                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                                    <div className="flex items-center mr-4 mb-2">
                                        <Briefcase className="h-5 w-5 mr-2" />
                                        {offer.contract}
                                    </div>
                                    <div className="flex items-center mr-4 mb-2">
                                        <MapPin className="h-5 w-5 mr-2" />
                                        {offer.localisation}
                                    </div>
                                    <div className="flex items-center mr-4 mb-2">
                                        <CreditCard className="h-5 w-5 mr-2" />
                                        {offer.salary} MAD
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <Building className="h-5 w-5 mr-2" />
                                        {offer.companyName}
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed">{offer.description}</p>
                                <div className="border-t border-gray-200 pt-4">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Compétences requises</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {offer.competences.map((competence, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                                            >
                                                {competence}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 bg-white overflow-hidden shadow-xl rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Détails de l'offre</h2>
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                   
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                                        <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            {offer.status}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Email de contact</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            <a href={`mailto:${offer.contactEmail}`} className="text-blue-600 hover:underline flex items-center">
                                                <Mail className="h-5 w-5 mr-2" />
                                                {offer.contactEmail}
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Téléphone de contact</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            <a href={`tel:${offer.contactPhone}`} className="text-blue-600 hover:underline flex items-center">
                                                <Phone className="h-5 w-5 mr-2" />
                                                {offer.contactPhone}
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">Date de création</dt>
                                        <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                            <Calendar className="h-5 w-5 mr-2" />
                                            {new Date(offer.createdAt).toLocaleString()}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/3">
                        <div className="sticky top-8">
                            <Form id={id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

