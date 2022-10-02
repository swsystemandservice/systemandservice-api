"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contacts.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      tel: DataTypes.STRING,
      title_service: DataTypes.STRING,
      service: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Contacts",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Contacts;
};
