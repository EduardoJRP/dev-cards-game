"use client";

import React from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-row justify-center page-background min-w-0 min-h-0 overflow-auto h-screen p-2 md:p-10">
      <header className="">
        <Navbar />
      </header>
      <main className="flex-1 flex-col h-full min-w-0 min-h-0 overflow-auto justify-center items-center p-4 pt-16 m-4 mb-2 rounded-2xl bg-purple-500">
        <SignedIn>
          <div className="flex flex-col items-center justify-center max-h-screen">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-8 text-white">
              Welcome to DevCards!
            </h1>
            <div className="text-md md:text-lg lg:text-xl">
              Hi there! This is a simple game where you can play with your friends and test your skills. Click the button below to start playing!
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col items-center justify-center h-full">
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
          </div>
        </SignedOut>
      </main>
    </div>
  );
}
