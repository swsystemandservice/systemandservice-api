"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StatusEnum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Questions }) {
      // define association here
      this.hasMany(Questions, { foreignKey: "status" }); // Model Questions Join status กับ Model StatusEnums ด้วย ID
    }
  }

  StatusEnum.init(
    {
      name: DataTypes.STRING,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "StatusEnums",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return StatusEnum;
};
