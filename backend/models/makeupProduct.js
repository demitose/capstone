const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class MakeupProduct extends Model {}

MakeupProduct.init(
    {   
        makeupID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
        autoIncrement: true,
        primaryKey: true,
    },
        catagories: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
            required: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
            required: true,
        },
    },
    { 
        sequelize: sequelizeInstance,
        modelName: "makeupProduct",
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = MakeupProduct;