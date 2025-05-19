"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ThemeToggleButton from "../components/ThemeToggleButton";
import React from "react";

export default function NavBar() {
  const route = useRouter();

  return (
    <nav className="flex flex-col justify-between bg-purple-500 text-white p-4 m-4 rounded-2xl h-screen w-40">
      <div className="flex flex-col items-between">
        <h1 className="text-lg font-bold">Devconnect</h1>
        <button
          onClick={() => {
            route.push("/");
          }}
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
        >
          Home
        </button>
        <ThemeToggleButton />
      </div>
      <SignedIn>
        <UserButton showName={true} />
      </SignedIn>
    </nav>
  );
}
