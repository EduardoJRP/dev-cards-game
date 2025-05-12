var express = require("express");
var router = express.Router();

// logged user
router.get("/", function (req, res, next) {
  // query public games in DB
  const allGames = [
    {
      game_id: "10002",
      game_description: "Basic verbs in English",
      game_data: { cards: [{ Run: "Correr" }] },
      is_public: true,
      creator_user_id: 125,
      created_at: "1746900000",
    },
  ];
  res.send(allGames);
});

// logged admin
router.get("/all", function (req, res, next) {
  // query in DB
  const allGames = [
    {
      game_id: "10001",
      game_description: "Numbers in English",
      game_data: { cards: [{ One: "1" }] },
      is_public: false,
      creator_user_id: 123,
      created_at: "1746800000",
    },
    {
      game_id: "10002",
      game_description: "Basic verbs in English",
      game_data: { cards: [{ Run: "Correr" }] },
      is_public: true,
      creator_user_id: 125,
      created_at: "1746900000",
    },
  ];
  res.send(allGames);
});

router
  .route("/:game_id")
  .get((req, res) => {
    // middleware: query game by id
    res.send({
      game_id: "10001",
      game_description: "Numbers in English",
      game_data: { cards: [{ One: "1" }] },
      is_public: false,
      creator_user_id: 123,
      created_at: "1746800000",
    });
  })
  .put((req, res) => {
    // middleware: query game & creator user id and edit info in DB
    const editedGame = [
      {
        game_id: "10001",
        game_description: "Numbers in English",
        game_data: { cards: [{ One: "1" }, { Two: "2" }] },
        is_public: false,
        creator_user_id: 123,
        created_at: "1746800000",
      },
    ];
    res.send(editedGame);
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
