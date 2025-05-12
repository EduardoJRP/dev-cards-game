var express = require("express");
var router = express.Router();

// general scoreboard
router.get("/", (req, res) => {
  // query total score by user
  const usersScores = [
    {
      user_id: "123",
      total_score: 5000,
    },
    {
      user_id: "125",
      total_score: 4230,
    },
  ];
  res.send(usersScores);
});

router
  .route("/:game_id")
  .get((req, res) => {
    // middleware: query scores by game_id
    res.send([
      {
        user_id: "123",
        total_score: 1000,
      },
      {
        user_id: "125",
        total_score: 800,
      },
    ]);
  })
  .patch((req, res) => {
    // middleware: query game & user id and add/update new score
    const newScore = [
      {
        user_id: "125",
        total_score: 1200,
      },
    ];
    res.send(newScore);
  })
  .delete((req, res) => {
    const deletionResult = false;
    res.send(deletionResult);
  });

router.param("user_id", (req, res, next, user_id) => {
  req.user_id = user_id;
  next();
});

module.exports = router;
