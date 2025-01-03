import React, { useState } from 'react';
import axios from 'axios';

const AddEventForm = () => {
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/eventDetails', eventData);
            alert(response.data); // Show success message
            setEventData({ name: '', date: '', description: '' }); // Clear the form
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Failed to add event. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={eventData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={eventData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Description:</label>
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default AddEventForm;
