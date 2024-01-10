const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user");
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
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: User, 
            key: "userID", 
            indexes: [{ unique: true }],
        }
    },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
    },
    {
        sequelize: sequelizeInstance,
        modelName: "orders",
        timestamps: true,
        freezeTableName: true,
      }
);

module.exports = Orders;