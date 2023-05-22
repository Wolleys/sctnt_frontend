import React, { useState } from 'react';

const SupplyChainEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    // Add more properties for event details if needed
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Add a New Supply Chain Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Type:
          <input type="text" name="eventType" onChange={handleChange} />
        </label>
        {/* Add more form fields for event details */}
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default SupplyChainEventForm;
