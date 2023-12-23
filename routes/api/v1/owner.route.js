const {
  ownerProfileController,
  loginControllerUser,
  ownerProfileUpdateController,

  ownerRegisterController,
  ownerFindController,
} = require("../../../controller/owner.controller");

const ownerRouter = require("express").Router();

ownerRouter.route("/register").post((req, res) => {
  ownerRegisterController(req, res);
});

ownerRouter.route("/login").post((req, res) => {
  loginControllerUser(req, res);
});

ownerRouter
  .route("/ownerprofile")
  .get((req, res) => {
    ownerProfileController(req, res);
  })
  .put((req, res) => {
    ownerProfileUpdateController(req, res);
  });
ownerRouter.route("/all-owners/:email").get((req, res) => {
  ownerFindController(req, res);
});


module.exports = ownerRouter;
