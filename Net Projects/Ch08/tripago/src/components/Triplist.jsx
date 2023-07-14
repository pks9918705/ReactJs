import React, { useEffect, useState } from "react";

export default function Triplist() {
  const [trip, setTrip] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  console.log(trip);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTrip(data);
      });
  }, [url]);

  return (
    <div className="container">
      <h1>Trip List</h1>
      <div className="buttons">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=Dubai")}
        >
          Only Dubai
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips ")}>
          All
        </button>
      </div>

      <ul>
        {trip.map((trip) => (
          <li key={trip.id}>
            <h4>Title:{trip.title}</h4>
            <p>Price:{trip.price}</p>
            <small>Location:{trip.location}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
