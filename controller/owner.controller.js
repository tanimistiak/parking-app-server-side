const {
  ownerProfileService,
  loginUserService,
  ownerProfileUpdateService,

  ownerRegisterService,
  ownerFindService,
  ownerUpdateService,
} = require("../service/owner.service");

module.exports.ownerRegisterController = (req, res) => {
  ownerRegisterService(req, res);
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
module.exports.ownerFindController = (req, res) => {
  ownerFindService(req, res);
};
module.exports.ownerUpdateController = (req, res) => {
  ownerUpdateService(req, res);
};
