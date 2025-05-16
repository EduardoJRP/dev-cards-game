import React from "react";

type Score = {
  username: string;
  max_score: number;
  new_score?: boolean;
};

type GameBestScoresProps = {
  game_id: number;
  new_score?: number;
};

const GameBestScores: React.FC<GameBestScoresProps> = ({
  game_id,
  new_score,
}) => {
  const scoresList: Score[] = [
    // get scores/i gets also game name
    { username: "lms", max_score: 152 },
    { username: "asdf", max_score: 90 },
  ];

  const getUsername = function () {
    return "Coffee";
  };

  const saveScore = function (score: Score) {
    console.log("Modal: Wait" + score);
    console.log("Modal: Score saved");
  };

  let canSaveScore: boolean = false;
  const SCORES_NUM_ROWS = 15;
  const displayScores: Score[] = scoresList.slice(0, SCORES_NUM_ROWS);

  if (new_score !== undefined) {
    for (let i = 0; i < displayScores.length; i++) {
      console.log(new_score);
      if (new_score > displayScores[i].max_score) {
        if (displayScores.length === SCORES_NUM_ROWS) {
          displayScores.pop();
        }
        displayScores.splice(i, 0, {
          username: getUsername(),
          max_score: new_score,
          new_score: true,
        });
        canSaveScore = true;
        break;
      }
    }
  }

  return (
    <div className="p-4 rounded bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">
        Best Scores - Game {game_id}
      </h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="text-left px-2 py-1">Username</th>
            <th className="text-left px-2 py-1">Max Score</th>
            {canSaveScore && <th className="text-left px-2 py-1">Action</th>}
          </tr>
        </thead>
        <tbody>
          {displayScores.map((score, index) => (
            <tr key={index}>
              <td className="px-2 py-1">{score.username}</td>
              <td className="px-2 py-1">{score.max_score}</td>
              <td className="px-2 py-1">
                {score.new_score && (
                  <button onClick={() => saveScore(score)}>Save score</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameBestScores;
