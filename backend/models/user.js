const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}
//Sequelize will create this table if it doesn't exist on startup
User.init(
  {  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    address: {
      type: DataTypes.STRING, 
      allowNull: true, 
      required: false,
          
  },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = User;
