const express = require("express");
const { ipController } = require("../../../controller/base.controller");
const baseRouter = express.Router();
baseRouter.route("/").get((req, res) => {
  ipController(req, res);
});
module.exports = baseRouter;
