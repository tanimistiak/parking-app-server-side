const {
  publicUsersService,

  publicUsersRetrieveImageService,
  publicUsersLoginService,
  allPublicUserDeleteService,
  userFindService,
  userRegisterService,
  userProfileUpdateService,
} = require("../service/user.service");

module.exports.userRegisterController = (req, res) => {
  userRegisterService(req, res);
};

module.exports.userFindController = (req, res) => {
  userFindService(req, res);
};

module.exports.userProfileUpdateController = (req, res) => {
  userProfileUpdateService(req, res);
};

module.exports.publicUsersRetrieveImageController = (req, res) => {
  publicUsersRetrieveImageService(req, res);
};

module.exports.publicUsersLoginController = (req, res) => {
  publicUsersLoginService(req, res);
};

module.exports.allPublicUserDeleteController = (req, res) => {
  allPublicUserDeleteService(req, res);
};
