import React, { useState } from "react";

const EventForm = ({ onAddEvent }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const newEvent = { name, date, description };
    onAddEvent(newEvent);

    // Reset form
    setName("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 m-5 border rounded shadow-sm">
      <h2 className="text-center mb-4">Create Event</h2>
      <div className="mb-3">
        <label htmlFor="eventName" className="form-label">
          Event Name:
        </label>
        <input
          type="text"
          id="eventName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter event name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventDate" className="form-label">
          Date:
        </label>
        <input
          type="date"
          id="eventDate"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventDescription" className="form-label">
          Description:
        </label>
        <textarea
          id="eventDescription"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter event description"
          rows="3"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
