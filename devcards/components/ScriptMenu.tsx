import React from "react";
import GameDescriptionCard from "./GameDescriptionCard";

interface Game {
  game_id: number;
  name: string;
  description: string;
  difficulty: number;
  rating: number;
  best_player: string;
  high_score: number;
  author_user: string;
}

interface ScriptMenuProps {
  title: string;
}

const ScriptMenu: React.FC<ScriptMenuProps> = ({ title }) => {
  const publicGames: Game[] = [
    {
      game_id: 1,
      name: "Game 1",
      description: "First game",
      difficulty: 1,
      rating: 3.523,
      best_player: "luis",
      high_score: 152,
      author_user: "luis",
    },
    {
      game_id: 2,
      name: "Game 2f",
      description: "Second game",
      difficulty: 2,
      rating: 4.8,
      best_player: "eduardo",
      high_score: 180,
      author_user: "luis",
    },
    {
      game_id: 3,
      name: "Game 3",
      description: "Third game",
      difficulty: 30,
      rating: 4.12,
      best_player: "miguel",
      high_score: 140,
      author_user: "luis",
    },
    {
      game_id: 4,
      name: "Game 4",
      description: "First game",
      difficulty: 1,
      rating: 3.523,
      best_player: "luis",
      high_score: 152,
      author_user: "luis",
    },
    {
      game_id: 5,
      name: "Game 5",
      description: "Second game",
      difficulty: 2,
      rating: 4.8,
      best_player: "eduardo",
      high_score: 180,
      author_user: "luis",
    },
    {
      game_id: 6,
      name: "Game 6 has a long very long name very long description",
      description:
        "Sixth game has a long very long name very long description does not fit",
      difficulty: 30,
      rating: 4.12,
      best_player: "miguel",
      high_score: 140,
      author_user: "luis",
    },
  ]; // get /games

  return (
    <div className="p-4 py-10 m-10 rounded-sm w-5/6 bg-[#FFFFFF19] dark:bg-[#000000AA] border-solid border dark:border-violet-600">
      <h1 className="text-gray-950 dark:text-gray-300 text-2xl font-semibold mb-4">
        {title}
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {publicGames.map((game, index) => (
          <GameDescriptionCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default ScriptMenu;
