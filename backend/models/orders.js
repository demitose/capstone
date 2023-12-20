const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Orders extends Model {}

Orders.init(
    {   
        orderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
        autoIncrement: true,
        primaryKey: true,
    },
        userID: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
    }
);

module.exports = Orders;