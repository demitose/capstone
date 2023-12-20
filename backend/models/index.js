"use strict";
const User = require("./user"); 
const MakeupProduct = require("./makeupProduct");


async function init() {
  await MakeupProduct.sync();
  await User.sync(); 


}

init();



module.exports = {
  User, 
  MakeupProduct,
};
