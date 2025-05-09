var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Chats...");
});

// admin
router.get("/all", function (req, res, next) {
  res.send("All chats...");
});

router
  .route("/:user_id")
  .get((req, res) => {
    // middleware: query chat messages
    res.send([
      { msg_id: "10001", msg: "Hello", user_id: 1, timestamp: "1746800000" },
      { msg_id: "10002", msg: "Hi", user_id: 2, timestamp: "1746820000" },
    ]);
  })
  .patch((req, res) => {
    // middleware: add message at the end of the chat in DB
    const chat = [
      { msg_id: "10001", msg: "Hello", user_id: 1, timestamp: "1746800000" },
      { msg_id: "10002", msg: "Hi", user_id: 2, timestamp: "1746820000" },
    ];
    chat.push({
      msg_id: "10003",
      msg: "Bye", // need to add as a parameter...
      user_id: 1,
      timestamp: "1746830000",
    });
    res.send(chat);
  });

router.put("/:user_id/:msg_id", function (req, res, next) {
  // middleware: edit message
  const msgObject = {
    msg_id: "10001",
    msg: "Hello",
    user_id: 1,
    timestamp: "1746800000",
  };
  msgObject.msg = "Hola"; // need to add as a parameter...
  res.send(msgObject);
});

router.delete("/:user_id/:msg_id", function (req, res, next) {
  // middleware: delete message
  res.send({
    isFriend: false,
    requestFromFriend: false,
    requestToFriend: true,
  });
});

router.param("user_id", (req, res, next, user_id) => {
  req.msg = "Mensaje default"; // texto que escribe el usuario al crear o editar mensaje
  req.main_user = null; // id del usuario que inicia sesión...
  req.friend_user = user_id;
  next();
});

module.exports = router;
