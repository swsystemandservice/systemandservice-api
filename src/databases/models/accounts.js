"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.StatusEnums && this.belongsTo(models.StatusEnums, { foreignKey: "status" });
    }
  }
  Accounts.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      address: DataTypes.TEXT,
      tel: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.DECIMAL,
      weight: DataTypes.DECIMAL,
      height: DataTypes.DECIMAL,
      dob: DataTypes.DATE,
      start_date: DataTypes.DATE,
      image: DataTypes.STRING,
      role: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Accounts",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Accounts;
};
