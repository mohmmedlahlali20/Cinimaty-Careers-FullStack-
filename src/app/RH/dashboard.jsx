'use client'

import { useState } from 'react'
import JobOfferList from './components/JobOfferList'
import ApplicationList from './components/ApplicationList'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import CreateJobOffer from './components/CreateJobOffer'


export default function Dashboard() {
  const [jobOffers, setJobOffers] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering' },
    { id: 2, title: 'Marketing Specialist', department: 'Marketing' },
  ])

  const [applications, setApplications] = useState([
    { id: 1, candidateName: 'John Doe', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 2, candidateName: 'Jane Smith', jobTitle: 'Marketing Specialist', status: 'Interviewed' },
  ])

  const handleCreateOffer = (newOffer) => {
    setJobOffers([...jobOffers, { ...newOffer, id: Date.now() }])
  }

  const handleUpdateOffer = (updatedOffer) => {
    setJobOffers(jobOffers.map(offer => offer.id === updatedOffer.id ? updatedOffer : offer))
  }

  const handleDeleteOffer = (offerId) => {
    setJobOffers(jobOffers.filter(offer => offer.id !== offerId))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">HR Dashboard</h1>
      <Tabs defaultValue="job-offers">
        <TabsList>
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
    </div>
  )
}

