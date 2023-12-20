const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.makeupProductController.getMakeupProduct(res);
});
router.post("/create", (req, res) => {
  Controllers.makeupProductController.createMakeupProduct(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.makeupProductController.updateMakeupProductController(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.makeupProductController.deleteMakeupProductController(req, res);
});

router.get("/init", (req, res) => {
  Controllers.populateController.storeMakeupProduct(res);
});

module.exports = router;
