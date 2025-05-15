import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-purple-500 text-white p-4">
      <h1 className="text-lg font-bold">Devconnect</h1>
      <div className="flex space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}