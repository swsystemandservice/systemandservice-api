"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Questions }) {
      // define association here
      this.belongsTo(Questions, { foreignKey: "question_id" });
    }
  }
  
  Comments.init(
    {
      alias: DataTypes.STRING,
      description: DataTypes.TEXT,
      question_id: DataTypes.INTEGER,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Comments",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Comments;
};
