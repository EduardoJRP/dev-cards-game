import React from "react";
import { useRouter } from "next/navigation";

interface GameDescriptionCardProps {
  game_id: number;
  name: string;
  description: string;
  difficulty: number;
  rating: number;
  best_player: string;
  high_score: number;
  author_user: string;
}

const GameDescriptionCard: React.FC<GameDescriptionCardProps> = ({
  game_id,
  name,
  description,
  difficulty,
  rating,
  best_player,
  high_score,
  author_user,
}) => {
  const route = useRouter();
  return (
    <div
      className="rounded-2xl shadow-md w-full max-w-xs cursor-pointer p-6 pt-4 bg-white dark:bg-gray-950 border border-solid border-violet-950 dark:border-violet-600"
      onClick={() => {
        route.push("/games/" + game_id);
      }}
    >
      <h2 className="text-xl font-bold mb text-center text-gray-950 dark:text-gray-200">
        {name}
      </h2>
      <p className="text-sm font-bold italic text-gray-900 dark:text-gray-400 mb-3 text-center">
        {description}
      </p>
      <p className="text-xs text-gray-900 dark:text-gray-400">
        Difficulty: {difficulty}
      </p>
      <p className="text-xs text-gray-900 dark:text-gray-400">
        Rating: {rating}
      </p>
      <p className="text-xs text-gray-900 dark:text-gray-400">
        Best Player: {best_player}
      </p>
      <p className="text-xs text-gray-900 dark:text-gray-400">
        High Score: {high_score}
      </p>
      <p className="text-xs text-gray-900 dark:text-gray-400">
        Author: {author_user}
      </p>
    </div>
  );
};

export default GameDescriptionCard;
