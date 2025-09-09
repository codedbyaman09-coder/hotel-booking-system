import React, { useState } from "react";

export default function BookingForm({ addBooking }) {
  const [hotel, setHotel] = useState("");
  const [name, setName] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ hotel, name, checkin, checkout, guests });
    setHotel("");
    setName("");
    setCheckin("");
    setCheckout("");
    setGuests(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg mt-8 space-y-4"
    >
      <h2 className="text-xl font-bold">Book a Hotel</h2>
      <input
        type="text"
        placeholder="Hotel Name"
        value={hotel}
        onChange={(e) => setHotel(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <div className="flex gap-4">
        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Book Now
      </button>
    </form>
  );
}
