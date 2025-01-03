import React from "react";

const EventsTable = () => {
  // const api = process.env.REACT_APP_BACKEND_API;

  //     const [events, setEvents] = useState([]);
  //   useEffect(() => {
  //     const fetchEvents = async () => {
  //       try {
  //         const response = await axios.get(`https://uems-backend-9uce.onrender.com/events`);
  //         const events = response.data;

  //         setEvents(events);
  //       } catch (error) {
  //         console.error("Error fetching events data:", error);
  //       }
  //     };

  //     fetchEvents();
  //   }, []);

  const events = [
    {
      name: "Tech Conference 2025",
      date: "2025-03-15",
      description:
        "A conference focusing on emerging technologies and innovation.",
    },
    {
      name: "Art Expo",
      date: "2025-04-10",
      description: "An exhibition showcasing modern and contemporary art.",
    },
    {
      name: "Music Fest",
      date: "2025-05-20",
      description: "A festival celebrating live music from various genres.",
    },
    {
      name: "Food & Wine Festival",
      date: "2025-06-05",
      description:
        "A festival featuring fine dining and wine tasting experiences.",
    },
  ];

  return (
    <div class="container">
      <h1>Events</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
