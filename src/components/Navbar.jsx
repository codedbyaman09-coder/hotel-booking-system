import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">HotelBooking</h1>
      <ul className="flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Hotels</li>
        <li className="hover:text-blue-600 cursor-pointer">Bookings</li>
      </ul>
    </nav>
  );
}
