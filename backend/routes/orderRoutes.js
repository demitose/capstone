const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.orderController.getOrders(res);
});
router.post("/create", (req, res) => {
  Controllers.orderController.createOrders(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.orderController.updateOrderController(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.orderController.deleteOrderController(req, res);
});

router.get("/init", (req, res) => {
  Controllers.populateController.storeOrder(res);
});

module.exports = router;
