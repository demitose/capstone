const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class orderItem extends Model {}
//Sequelize will create this table if it doesn't exist on startup
orderItem.init(
  {  orderItemID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
    makeupID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    orderID: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "orderItems", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = orderItem;
