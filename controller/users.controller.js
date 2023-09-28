const {
  registerServiceUser,
  ownerProfileService,
  loginUserService,
  ownerProfileUpdateService,
  allOwnerService,
} = require("../service/register.service");

module.exports.registerControllerUser = (req, res) => {
  registerServiceUser(req, res);
};

module.exports.loginControllerUser = (req, res) => {
  loginUserService(req, res);
};

module.exports.ownerProfileController = (req, res) => {
  ownerProfileService(req, res);
};
module.exports.ownerProfileUpdateController = (req, res) => {
  ownerProfileUpdateService(req, res);
};
module.exports.allOwnerController = (req, res) => {
  allOwnerService(req, res);
};
