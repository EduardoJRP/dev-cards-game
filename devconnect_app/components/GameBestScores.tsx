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
    if (canSaveScore) {
      console.log("Modal: Wait" + score);
      console.log("Modal: Score saved");
      canSaveScore = false;
    }
  };

  let canSaveScore: boolean = false;
  let numCols = 2;
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
        numCols++;
        canSaveScore = true;
        break;
      }
    }
  }

  return (
    <div className="p-4 py-10 w-5/6 rounded bg-[#FFFFFF19] dark:bg-[#000000AA]">
      <h2 className="text-center text-gray-950 dark:text-gray-300 text-2xl font-semibold mb-4 line-clamp-2">
        🚀 Best Scores - Game {game_id}
      </h2>
      <table className="w-full table-fixed border-collapse bg-white dark:bg-gray-950 border border-solid border-violet-950 dark:border-violet-600 rounded tracking-wider">
        <thead>
          <tr>
            <th
              className={`text-md font-semibold text-center text-gray-950 dark:text-gray-200 px-2 py-1 w-1/${numCols}`}
            >
              Username
            </th>
            <th
              className={`text-md font-semibold text-center text-gray-950 dark:text-gray-200 px-2 py-1 w-1/${numCols}`}
            >
              Max Score
            </th>
            {canSaveScore && (
              <th
                className={`text-md font-semibold text-center text-gray-950 dark:text-gray-200 px-2 py-1 w-1/${numCols}`}
              >
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {displayScores.map((score, index) => (
            <tr key={index}>
              <td className="text-sm text-center text-gray-950 dark:text-gray-200 px-2 py-1">
                {score.username}
              </td>
              <td className="text-sm text-center text-gray-950 dark:text-gray-200 px-2 py-1">
                {score.max_score}
              </td>
              <td className="text-sm text-center text-gray-950 dark:text-gray-200 px-2 py-1">
                {score.new_score && canSaveScore && (
                  <button
                    className="p-2 border border-solid rounded-sm cursor-pointer hover:bg-blue-500 bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                    onClick={() => saveScore(score)}
                  >
                    Save score
                  </button>
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
