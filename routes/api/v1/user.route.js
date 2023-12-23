const {
  publicUsersProfileController,

  publicUsersRetrieveImageController,
  publicUsersLoginController,
  allPublicUserDeleteController,
  userFindController,
  userRegisterController,
  userProfileUpdateController,
} = require("../../../controller/user.controller");
const userRouter = require("express").Router();
userRouter.route("/register").post((req, res) => {
  userRegisterController(req, res);
});
userRouter.route("/retrieveimage/:email").get((req, res) => {
  publicUsersRetrieveImageController(req, res);
});
userRouter.route("/login").post((req, res) => {
  publicUsersLoginController(req, res);
});

userRouter
  .route("/userprofile")
  .get((req, res) => {
    userFindController(req, res);
  })
  .put((req, res) => {
    userProfileUpdateController(req, res);
  });

userRouter.route("/all-users/:email").get((req, res) => {
  userFindController(req, res);
});
userRouter.route("/all-users/delete").delete((req, res) => {
  allPublicUserDeleteController(req, res);
});
module.exports = userRouter;
