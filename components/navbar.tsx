"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ThemeToggleButton from "./ThemeToggleButton";
import React from "react";

export default function NavBar() {
  const route = useRouter();
  const buttonClass =
    "bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full transition";

  return (
    <nav className="flex flex-col justify-between bg-purple-500 text-white p-4 m-4 mb-2 rounded-2xl h-[calc(100vh-2rem)] w-40">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-lg font-bold">Devconnect</h1>
        <button
          onClick={() => {
            route.push("/");
          }}
          className={buttonClass}
        >
          Home
        </button>
        <button
          onClick={() => {
            route.push("/game1");
          }}
          className={buttonClass}
        >
          Game Scores
        </button>
        <ThemeToggleButton />
      </div>
      <SignedIn>
        <UserButton showName={true} />
      </SignedIn>
    </nav>
  );
}
