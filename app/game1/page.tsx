"use client";

import GameBestScores from "@/components/GameBestScores";
import NavBar from "@/components/layout/Navbar";
import React from "react";

const game1 = () => {
  return (
    <div
      className="flex flex-row page-background min-h-screen"
      style={{ backgroundColor: "#4B2067" }}
    >
      <header>
        <NavBar />
      </header>
      <main>
        <GameBestScores game_id={1} new_score={230} />
      </main>
    </div>
  );
};

export default game1;
