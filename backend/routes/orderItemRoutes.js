const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.orderItemController.getorderItem(res);
});
router.post("/create", (req, res) => {
  Controllers.orderItemController.createorderItem(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.orderItemController.updateorderItemController(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.orderItemController.deleteorderItemController(req, res);
});

router.get("/init", (req, res) => {
  Controllers.populateController.storeorderItem(res);
});

module.exports = router;
