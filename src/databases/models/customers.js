"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customers.init(
    {
      name: DataTypes.STRING,
      tel: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Customers",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Customers;
};
