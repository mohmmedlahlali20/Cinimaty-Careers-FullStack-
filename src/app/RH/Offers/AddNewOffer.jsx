'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Swal from 'sweetalert2';

const AddNewOffer = ({ onClose, onSave }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    contract: '',
    localisation: '',
    companyName: '',
    status: '',
    contactEmail: '',
    contactPhone: '',
    competences: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Offer created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setFormData({
        title: '',
        description: '',
        salary: '',
        contract: '',
        localisation: '',
        companyName: '',
        status: '',
        contactEmail: '',
        contactPhone: '',
        competences: '',
      });
      onClose();
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Error creating offer: ${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
              <input
                type="number"
                name="salary"
                placeholder="Salary (MAD)"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Job Details</h3>
            <div className="space-y-4">
              <select
                name="contract"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.contract}
                onChange={handleChange}
                required
              >
                <option value="">Select Contract</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Freelance">Freelance</option>
              </select>
              <input
                type="text"
                name="localisation"
                placeholder="Localisation"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.localisation}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <select
                name="status"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <input
                type="email"
                name="contactEmail"
                placeholder="Contact Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.contactEmail}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contactPhone"
                placeholder="Contact Phone"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.contactPhone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="competences"
                placeholder="Competences (comma-separated)"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.competences}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Offer</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="mt-6 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors ml-auto"
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewOffer;
