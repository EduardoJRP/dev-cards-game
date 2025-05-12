var express = require("express");
var router = express.Router();

// logged user
router
  .route("/")
  .get((req, res) => {
    // query user
    const myProfile = [
      {
        user_id: 125,
        username: "luismd",
        created_at: "1746100000",
      },
    ];
    res.send(myProfile);
  })
  .put((req, res) => {
    // edit user
    const editedProfile = [
      {
        user_id: 125,
        username: "luismdEdited",
        created_at: "1746100000",
      },
    ];
    res.send(editedProfile);
  });

router.param("user_id", (req, res, next, user_id) => {
  req.user_id = user_id;
  next();
});

module.exports = router;
