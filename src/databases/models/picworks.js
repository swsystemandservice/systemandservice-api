"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Picworks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Picworks.init(
    {
      name: DataTypes.STRING,
      image_album: DataTypes.STRING,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Picworks",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Picworks;
};
