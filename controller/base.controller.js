const { ipService } = require("../service/base.service");

module.exports.ipController = (req, res) => {
  ipService(req, res);
};
