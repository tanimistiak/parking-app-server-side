// const bodyParser = require("body-parser");
const fs = require("fs");
const {
  publicUsersController,
  publicUsersProfileController,
  allPublicUsersController,
  publicUsersProfileUpdateController,
  publicUsersRetrieveImageController,
  publicUsersLoginController,
} = require("../../../controller/publicUsers.controller");
const upload = require("../../../utils/multerInstance");

const publicUsersRouter = require("express").Router();
publicUsersRouter
  .route("/register")
  .post(upload.single("file"), async (req, res) => {
    publicUsersController(req, res);
  });
publicUsersRouter.route("/retrieveimage/:email").get((req, res) => {
  publicUsersRetrieveImageController(req, res);
});
publicUsersRouter.route("/login").post((req, res) => {
  publicUsersLoginController(req, res);
});

publicUsersRouter
  .route("/userprofile")
  .get((req, res) => {
    publicUsersProfileController(req, res);
  })
  .put((req, res) => {
    publicUsersProfileUpdateController(req, res);
  });

publicUsersRouter.route("/all-users/:id").get((req, res) => {
  allPublicUsersController(req, res);
});
module.exports = publicUsersRouter;
