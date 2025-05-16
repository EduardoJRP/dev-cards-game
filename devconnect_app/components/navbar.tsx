"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavBar() {
  const route = useRouter();

  return (
    <nav className="flex items-center justify-between bg-purple-500 text-white p-4">
      <h1 className="text-lg font-bold">Devconnect</h1>
      <div className="flex space-x-4">
        <button onClick={() => {route.push("/")}}className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
          Home
        </button>
        <SignedIn>
          <UserButton showName={true}/>
        </SignedIn>
      </div>
    </nav>
  );
}