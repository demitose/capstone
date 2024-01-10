"use strict";
const User = require("./user"); 
const MakeupProduct = require("./makeupProduct");
const Order = require("./orders");
const OrderItem = require("./orderItem")

async function init() {
  await MakeupProduct.sync();
  await User.sync(); 
await Order.sync();
await OrderItem.sync();

}

init();



module.exports = {
  User, 
  MakeupProduct,
  Order,
  OrderItem,
};
