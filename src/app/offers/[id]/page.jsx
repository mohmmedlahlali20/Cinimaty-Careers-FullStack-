import React from "react";
import fetchOffer from "../utils/GetOneOffer";
import Form from "./components/Form";
import onSubmit from "../utils/Application"; // Import onSubmit

export default async function OfferPage({ params }) {
    const { id } = params;
    const offer = await fetchOffer(id);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-extrabold text-gray-800">{offer.title}</h1>
                    <p className="text-gray-600 mt-4 leading-relaxed">{offer.description}</p>
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700">Competences:</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            {offer.competences.map((competence, index) => (
                                <li
                                    key={index}
                                    className="text-gray-600 bg-purple-100 px-4 py-2 rounded-lg shadow-sm inline-block"
                                >
                                    {competence}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Form id={id} onSubmit={onSubmit} />
            </div>
        </div>
    );
}
