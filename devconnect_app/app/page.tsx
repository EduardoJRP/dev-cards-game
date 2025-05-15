"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import NavBar from "../components/navbar";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="page-background min-h-screen"
      style={{ backgroundColor: "#4B2067" }}
    >
      <header>
        <NavBar />
      </header>
      <SignedIn>
        <main className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl font-semibold mb-8 text-white">Our Games</h1>
          <div className="flex flex-row justify-between gap-4 w-full px-8">
            <button onClick={() => router.push("/game1")} className="flex-1 bg-purple-400 text-white text-center p-4 rounded shadow">
              game1
            </button>
            <button onClick={() => router.push("/game2")} className="flex-1 bg-purple-400 text-white text-center p-4 rounded shadow">
              game2
            </button>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <main className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl font-semibold mb-8 text-white">
            You need to log in!
          </h1>
          <div className="bg-purple-400 text-white text-center p-8 rounded shadow">
            <p className="text-lg text-white mb-4">
              Please log in to view the games.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <SignInButton mode="modal">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </div>
        </main>
      </SignedOut>
    </div>
  );
}
