import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Triplist() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips, isPending } = useFetch(url);

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
      {isPending && <div>Loading Trips ......</div>}

      <ul>
        {trips &&
          trips.map((trip) => (
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
