const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const MakeupProduct = require("./makeupProduct");
const User = require("./user");
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
  userID: {
    type: DataTypes.INTEGER, allowNull: true, required: false,
    references: {
        model: User, 
        key: "userID", //column name of the referenced model
        indexes: [{ unique: true }],
    }
},
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    MakeupProductID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: MakeupProduct, 
            key: "makeupID", 
            indexes: [{ unique: true }],
        }
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "orderItems", 
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = orderItem;
