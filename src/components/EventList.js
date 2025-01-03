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
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//     {events.map((event, index) => (
//       <div key={index} className="card" style={{ width: "18rem" }}>
//         <div className="card-body">
//           <h5 className="card-title">{event.name}</h5>
//           <p className="card-text">
//             <strong>Date:</strong> {event.date}
//             <br />
//             {event.description}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
  <div className="container my-3">
    <h2 className="my-3">Events</h2>
  <div className="row">
    {events.map((event, index) => (
      <div key={index} className="col-md-4 mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">
              <strong>Date:</strong> {event.date}
              <br />
              {event.description}
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
);
};

export default EventsTable;
