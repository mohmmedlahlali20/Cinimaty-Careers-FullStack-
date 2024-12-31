'use client'
import React, { useState } from "react";

function Form({ id, onSubmit }) {
    console.log(id);

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        cv: "",
        letterCover: "",
        numeroTelephone: "",
        localisation: "",
        // dateDisponibilite: "",
        offerId: id
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === "cv") {
            setFormData({ ...formData, [name]: files[0] }); 
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        formDataToSend.append("nom", formData.nom);
        formDataToSend.append("prenom", formData.prenom);
        formDataToSend.append("letterCover", formData.letterCover);
        formDataToSend.append("numeroTelephone", formData.numeroTelephone);
       formDataToSend.append("localisation", formData.localisation);
        // formDataToSend.append("dateDisponibilite", formData.dateDisponibilite);
        formDataToSend.append("offerId", id);
        formDataToSend.append("cv", formData.cv); 
    
        try {
            const response = await fetch(`/api/Application`, {
                method: "POST",
                body: formDataToSend, 
            });
    
            if (response.ok) {
                alert("Application submitted successfully!");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit application.");
        }
    };
    

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Apply for this Offer
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                        CV
                    </label>
                    <input
                        id="cv"
                        name="cv"
                        type="file"
                        required
                        onChange={handleChange}
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
                <div>
                    <label htmlFor="letterCover" className="block text-sm font-medium text-gray-700">
                        Lettre de motivation
                    </label>
                    <textarea
                        id="letterCover"
                        name="letterCover"
                        rows="4"
                        value={formData.letterCover}
                        onChange={handleChange}
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Expliquez pourquoi vous êtes le meilleur candidat..."
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="numeroTelephone" className="block text-sm font-medium text-gray-700">
                        Numéro de Téléphone
                    </label>
                    <input
                        id="numeroTelephone"
                        name="numeroTelephone"
                        type="tel"
                        value={formData.numeroTelephone}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="06xxxxxxxx"
                    />
                </div>
                <div>
                    <label htmlFor="localisation" className="block text-sm font-medium text-gray-700">
                        Localisation
                    </label>
                    <input
                        id="localisation"
                        name="localisation"
                        type="text"
                        value={formData.localisation}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Votre localisation"
                    />
                </div>
                {/* <div>
                    <label htmlFor="dateDisponibilite" className="block text-sm font-medium text-gray-700">
                        Date de disponibilité
                    </label>
                    <input
                        id="dateDisponibilite"
                        name="dateDisponibilite"
                        type="date"
                        value={formData.dateDisponibilite}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div> */}
                <div>
                    <input id="offerId" name="offerId" type="hidden" value={id} />
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
