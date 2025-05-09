var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Friends...");
});

// admin
router.get("/all", function (req, res, next) {
  res.send("All friends...");
});

// authorized user
router
  .route("/:user_id")
  .get((req, res) => {
    // query state of relationship
    console.log({ "Main user": req.main_user, "Friend user": req.friend_user });
    res.send({
      isFriend: false,
      requestFromFriend: true,
      requestToFriend: false,
    });
  })
  .put((req, res) => {
    // logic to change state of relationship in DB (sent, accept or reject request)
    res.send({
      isFriend: true,
      requestFromFriend: false,
      requestToFriend: false,
    });
  })
  .delete((req, res) => {
    // change state of relationship in DB (deleted)
    res.send({
      isFriend: false,
      requestFromFriend: false,
      requestToFriend: false,
    });
  });

router.param("user_id", (req, res, next, user_id) => {
  req.main_user = 1; // id del usuario que inicia sesión...
  console.log(user_id);
  req.friend_user = user_id;
  next();
});

module.exports = router;
