'use client';

import { useState } from 'react';
import JobOfferList from './components/JobOfferList';
import ApplicationList from './components/ApplicationList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import CreateJobOffer from './components/CreateJobOffer';
import createOffer from './utils/CreateOffer';

export default function Dashboard() {
  const [jobOffers, setJobOffers] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering' },
    { id: 2, title: 'Marketing Specialist', department: 'Marketing' },
  ]);

  const [applications, setApplications] = useState([
    { id: 1, candidateName: 'John Doe', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 2, candidateName: 'Jane Smith', jobTitle: 'Marketing Specialist', status: 'Interviewed' },
  ]);

  const handleCreateOffer = async (formData) => {
    await createOffer(formData); 
  };

  const handleUpdateOffer = (updatedOffer) => {
    setJobOffers(jobOffers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer)));
  };

  const handleDeleteOffer = (offerId) => {
    setJobOffers(jobOffers.filter((offer) => offer.id !== offerId));
  };

  return (
   

      <main className="flex-1 p-6 bg-gray-100">
        <Tabs defaultValue="job-offers">
          <TabsList className="mb-4">
            <TabsTrigger value="job-offers">Job Offers</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          <TabsContent value="job-offers">
            <CreateJobOffer onCreateOffer={handleCreateOffer} />
            <JobOfferList
              jobOffers={jobOffers}
              onUpdateOffer={handleUpdateOffer}
              onDeleteOffer={handleDeleteOffer}
            />
          </TabsContent>
          <TabsContent value="applications">
            <ApplicationList applications={applications} />
          </TabsContent>
        </Tabs>
      </main>

  );
}
