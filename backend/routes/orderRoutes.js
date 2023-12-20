const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/", (req, res) => {
  Controllers.orderController.getOrder(res);
});
router.post("/create", (req, res) => {
  Controllers.OrderController.createOrder(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.OrderController.updateOrderController(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.OrderController.deleteOrderController(req, res);
});

router.get("/init", (req, res) => {
  Controllers.populateController.storeOrder(res);
});

module.exports = router;
