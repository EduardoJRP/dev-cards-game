"use client";

import React from "react";
import "./globals.css";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className="page-background">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-5xl font-semibold mb-8 text-white">Our Games</h1>
        <main className="flex flex-row justify-between gap-4 w-full px-8">
          <div className="flex-1 bg-purple-500 text-white text-center p-4 rounded shadow">hi</div>
          <div className="flex-1 bg-purple-500 text-white text-center p-4 rounded shadow">hi2</div>
        </main>
      </div>
    </div>
  );
}
