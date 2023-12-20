"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");
const storeMakeupProduct = async (res) => {
    try {
    let response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
        const chars = response.data;
        
        console.log(chars)
        for(let char of chars) {
        const formatChars ={
           image: char.image_link,
           catagories: char.category,
           price: char.price,
           title: char.name,   
            };
        let [newChar, created ] = await Models.MakeupProduct.findOrCreate({
           where: {title: char.name},
          defaults: formatChars
       })
       }
       res.send("data initialised")
    } catch (err) {
        console.log(err.message)
    }
}
module.exports = {
    storeMakeupProduct
}