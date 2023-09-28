const app = require("../../../app");
const {
  registerControllerUser,
  ownerProfileController,
  loginControllerUser,
  ownerProfileUpdateController,
  allOwnerController,
} = require("../../../controller/users.controller");
const { ownerProfileService } = require("../../../service/register.service");

const userRouter = require("express").Router();
userRouter.route("/register").post((req, res) => {
  registerControllerUser(req, res);
});

userRouter.route("/login").post((req, res) => {
  loginControllerUser(req, res);
});

userRouter
  .route("/ownerprofile")
  .get((req, res) => {
    ownerProfileController(req, res);
  })
  .put((req, res) => {
    ownerProfileUpdateController(req, res);
  });
userRouter.route("/all-owners/:id").get((req, res) => {
  allOwnerController(req, res);
});

module.exports = userRouter;
