"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");
const storeUser = async (res) => {
    try {
    let response = await axios.get('http://localhost:3000/users')
        const chars = response.data;
        
        console.log(chars)
        for(let char of chars) {
        const formatChars ={
           firstName: char.firstName,
           lastName: char.lastName,
           email: char.email,
           password: char.password,  
           address: char.address, 
            };
        let [newChar, created ] = await Models.User.findOrCreate({
           where: {firstName: char.firstName},
          defaults: formatChars
       })
       }
       res.send("data initialised")
    } catch (err) {
        console.log(err.message)
    }
}
module.exports = {
    storeUser
}