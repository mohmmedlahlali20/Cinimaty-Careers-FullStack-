'use client';

import { useState, useEffect } from 'react';
import JobOfferList from './components/JobOfferList';
import CreateJobOffer from './components/CreateJobOffer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import createOffer from './utils/CreateOffer';
import fetchOffers from '../(client)/offers/utils/getOffers';
import ApplicationList from './components/ApplicationList';
import FetchApplication from './utils/GetApplication';

export default function Dashboard() {
  const [jobOffers, setJobOffers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadOffers = async () => {
    try {
      const offers = await fetchOffers();
      setJobOffers(offers || []);
    } catch (err) {
      setError('Failed to fetch job offers');
    } finally {
      setLoading(false);
    }
  };

  const loadApplications = async () => {
    try {
      const apps = await FetchApplication();
      setApplications(apps || []);
    } catch (err) {
      setError('Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOffers();
    loadApplications();
  }, []);

  const handleCreateOffer = async (formData) => {
    const newOffer = await createOffer(formData);
    setJobOffers([...jobOffers, newOffer]);
  };

  const handleUpdateOffer = (updatedOffer) => {
    setJobOffers(jobOffers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer)));
  };

  const handleDeleteOffer = (offerId) => {
    setJobOffers(jobOffers.filter((offer) => offer.id !== offerId));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            offers={jobOffers}
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
