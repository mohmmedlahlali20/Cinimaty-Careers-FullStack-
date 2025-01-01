'use client';

import { useState } from 'react';
import { Button } from "../../components/ui/button";
import AddNewOffer from "../Offers/AddNewOffer";

export default function CreateJobOffer({ onCreateOffer }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSave = (newOffer) => {
    onCreateOffer(newOffer);
    alert("Job offer created successfully!");
    setIsPopupOpen(false); 
  };

  return (
    <div className="max-w-md p-6">
      <div className="flex justify-between items-center">
        <Button
          className="mr-2"
          variant="outline"
          onClick={() => setIsPopupOpen(true)}
        >
          Create Offer
        </Button>
      </div>

      {isPopupOpen && (
        <AddNewOffer
          onClose={() => setIsPopupOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
