'use client'
import React, {useState} from 'react';

function Form({ id, onSubmit }) {

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        cv: null,
        letterCover: "",
        numeroTelephone: "",
        localisation: "",
        dateDisponibilite: "",
        offerId: id,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Apply for this Offer
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nom
                    </label>
                    <input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleChange}
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Nom"
                    />
                </div>
                <div>
                    <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Prénom
                    </label>
                    <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Prénom"
                    />
                </div>
                <div>
                    <label
                        htmlFor="cv"
                        className="block text-sm font-medium text-gray-700"
                    >
                        CV
                    </label>
                    <input
                        id="cv"
                        name="cv"
                        type="file"
                        required
                        value={formData.cv}
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="letterCover"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Lettre de motivation
                    </label>
                    <textarea
                        id="letterCover"
                        name="letterCover"
                        rows="4"
                        value={formData.letterCover}
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Expliquez pourquoi vous êtes le meilleur candidat..."
                    ></textarea>
                </div>
                <div>
                    <label
                        htmlFor="numeroTelephone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Numéro de Téléphone
                    </label>
                    <input
                        id="numeroTelephone"
                        name="numeroTelephone"
                        type="tel"
                        value={formData.numeroTelephone}
                        required
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="06xxxxxxxx"
                    />
                </div>
                <div>
                    <label
                        htmlFor="localisation"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Localisation
                    </label>
                    <input
                        id="localisation"
                        name="localisation"
                        type="text"
                        value={formData.localisation}
                        required
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Votre localisation"
                    />
                </div>
                <div>
                    <label
                        htmlFor="dateDisponibilite"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Date de disponibilité
                    </label>
                    <input
                        id="dateDisponibilite"
                        name="dateDisponibilite"
                        type="date"
                        value={formData.dateDisponibilite}
                        required
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
                <div>
                    <input
                        id="offerId"
                        name="offerId"
                        type="hidden"
                        value={id}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 transition duration-300"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}

export default Form;