"use client";

import React from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScriptMenu from "../components/ScriptMenu";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-row justify-center page-background min-h-screen p-10">
      <header className="">
        <Navbar />
      </header>
      <div className="rounded-xl m-8 p-8 bg-purple-500">
        <SignedIn>
          <main className="flex flex-col items-center justify-center max-h-screen">
            <h1 className="text-5xl font-semibold mb-8 text-white">
              Our Games
            </h1>
            <ScriptMenu title="🎮 Library" />
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
    </div>
  );
}
