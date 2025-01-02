'use client'

import React, { useEffect, useState } from 'react';
import fetchApplicationByUserEmail from '../utils/getApplictionByUserEmail';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function MesOffers() {
  const [applications, setApplications] = useState(null);
  const [error, setError] = useState(null);


  const token = Cookies.get('token')
  
  const tokenDecoded = jwtDecode(token)

  console.log(tokenDecoded.email);
  

  useEffect(() => {
    async function fetchData() {
      const email = tokenDecoded.email; 
      const response = await fetchApplicationByUserEmail(email);

      if (response.success) {
        setApplications(response.data);
      } else {
        setError(response.message);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="text-center p-6 ">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto"></div>
    <p className="mt-4 text-gray-600 text-xl">Loading...</p>
    <p className="mt-4 text-gray-600 text-3xl font-semibold">Check if you have any offers you've applied for</p>
  </div>
</div>

    );
  }

  if (!applications) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 py-10">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Mes Offres</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {applications.OfferName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Nom:</span> {applications.nom}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Prénom:</span> {applications.prenom}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Téléphone:</span> {applications.numeroTelephone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Localisation:</span> {applications.localisation}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Candidat:</span> {applications.condidateurName}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Email:</span> {applications.condidateurEmail}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Lettre de Motivation:</span> {applications.letterCover}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <a
            href={applications.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition"
          >
            Télécharger le CV
          </a>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Créé le: {new Date(applications.createdAt).toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
