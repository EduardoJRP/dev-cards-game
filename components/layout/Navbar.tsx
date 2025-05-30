"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ThemeToggleButton from "../ThemeToggleButton";
import React from "react";
import { Button } from "../ui/Button";

export default function Navbar() {
  const route = useRouter();

  return (
    <nav className="flex flex-col h-full items-center justify-between bg-purple-500 text-white min-w-0 min-h-0 overflow-auto p-4 m-4 mb-2 rounded-2xl">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-center p-4">DevCards</h1>
        <div className="flex flex-col items-center space-y-3">
          <Button
            label="Home"
            onClick={() => {
              route.push("/");
            }}
          />
          <Button
            label="Scores"
            onClick={() => {
              route.push("/game1");
            }}
          >
            Game Scores
          </Button>
          <ThemeToggleButton />
        </div>
      </div>
      <SignedIn>
        <UserButton showName={true} />
      </SignedIn>
    </nav>
  );
}
