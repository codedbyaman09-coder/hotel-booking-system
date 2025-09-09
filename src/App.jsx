import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HotelList from "./components/HotelList";
import BookingForm from "./components/BookingForm";

export default function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <HotelList />
        <BookingForm addBooking={addBooking} />
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Your Bookings</h2>
          <ul className="space-y-2">
            {bookings.map((b, i) => (
              <li key={i} className="p-4 bg-white shadow rounded-lg">
                <p><strong>Hotel:</strong> {b.hotel}</p>
                <p><strong>Name:</strong> {b.name}</p>
                <p><strong>Check-in:</strong> {b.checkin}</p>
                <p><strong>Check-out:</strong> {b.checkout}</p>
                <p><strong>Guests:</strong> {b.guests}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
