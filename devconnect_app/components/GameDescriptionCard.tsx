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
      className="rounded-2xl shadow-md p-4 bg-white w-full max-w-xs cursor-pointer"
      onClick={() => {
        route.push("/games/" + game_id);
      }}
    >
      {/* <h2 className="text-xl font-bold mb-2">{game_id}</h2> */}
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm font-bold italic text-gray-700 mb-1">
        {description}
      </p>
      <p className="text-xs text-gray-600">Difficulty: {difficulty}</p>
      <p className="text-xs text-gray-600">Rating: {rating}</p>
      <p className="text-xs text-gray-600">Best Player: {best_player}</p>
      <p className="text-xs text-gray-600">High Score: {high_score}</p>
      <p className="text-xs text-gray-600">Author: {author_user}</p>
    </div>
  );
};

export default GameDescriptionCard;
