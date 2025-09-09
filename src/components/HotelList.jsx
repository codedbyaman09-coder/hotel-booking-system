import React from "react";

const hotels = [
  { id: 1, name: "Taj Hotel", location: "Mumbai", price: 5000 },
  { id: 2, name: "Oberoi", location: "Delhi", price: 4500 },
  { id: 3, name: "Leela Palace", location: "Bangalore", price: 4000 },
];

export default function HotelList() {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">Available Hotels</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="text-blue-600 font-bold">₹{hotel.price}/night</p>
          </div>
        ))}
      </div>
    </div>
  );
}
