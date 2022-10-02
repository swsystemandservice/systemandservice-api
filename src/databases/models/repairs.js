"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Repairs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Accounts && this.belongsTo(models.Accounts, { foreignKey: "service_staff", as: "account" });
      models.Sales && this.belongsTo(models.Sales, { foreignKey: "sale_id", as: "sale" });
    }
  }
  Repairs.init(
    {
      sale_id: DataTypes.INTEGER,
      symptom1: DataTypes.STRING,
      symptom2: DataTypes.STRING,
      symptom3: DataTypes.STRING,
      symptom4: DataTypes.STRING,
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
      image3: DataTypes.STRING,
      status: DataTypes.STRING,
      service_staff: DataTypes.INTEGER,
      success_date: DataTypes.STRING,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Repairs",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Repairs;
};
