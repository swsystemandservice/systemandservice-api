"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.StatusEnums, { foreignKey: "status" }); // Model StatusEnums Join ID กับ Model Question ด้วย status
    }
  }

  Question.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      alias: DataTypes.STRING,
      email: DataTypes.STRING,
      views: DataTypes.INTEGER,
      count_comment: DataTypes.INTEGER,
      tag: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Questions",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Question;
};
