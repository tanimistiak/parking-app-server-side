const {
  publicUsersService,
  publicUserProfileService,
  publicUsersProfileService,
  allPublicUsersService,
  publicUsersProfileUpdateService,
  publicUsersRetrieveImageService,
} = require("../service/publicUsers.service");

module.exports.publicUsersController = (req, res) => {
  publicUsersService(req, res);
};
module.exports.publicUsersProfileController = (req, res) => {
  publicUsersProfileService(req, res);
};
module.exports.allPublicUsersController = (req, res) => {
  allPublicUsersService(req, res);
};

module.exports.publicUsersProfileUpdateController = (req, res) => {
  publicUsersProfileUpdateService(req, res);
};

module.exports.publicUsersRetrieveImageController = (req, res) => {
  publicUsersRetrieveImageService(req, res);
};
