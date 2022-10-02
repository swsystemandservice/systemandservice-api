"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Accounts && this.belongsTo(models.Accounts, { foreignKey: "account_id", as: 'account' });
      models.Accounts && this.belongsTo(models.Accounts, { foreignKey: "customer_id", as: 'customer' });
      models.Products && this.belongsTo(models.Products, { foreignKey: "product_id1", as: 'product1' });
      models.Products && this.belongsTo(models.Products, { foreignKey: "product_id2", as: 'product2' });
      models.Products && this.belongsTo(models.Products, { foreignKey: "product_id3", as: 'product3' });
      models.Products && this.belongsTo(models.Products, { foreignKey: "product_id4", as: 'product4' });
      models.Repairs && this.hasMany(models.Repairs, { foreignKey: "sale_id", as: 'repairs' });
    }
  }
  Sales.init(
    {
      account_id: DataTypes.STRING,
      customer_id: DataTypes.STRING,
      product_id1: DataTypes.STRING,
      quantity1: DataTypes.INTEGER,
      price1: DataTypes.DECIMAL,
      product_id2: DataTypes.STRING,
      quantity2: DataTypes.INTEGER,
      price2: DataTypes.DECIMAL,
      product_id3: DataTypes.STRING,
      quantity3: DataTypes.INTEGER,
      price3: DataTypes.DECIMAL,
      product_id4: DataTypes.STRING,
      quantity4: DataTypes.INTEGER,
      price4: DataTypes.DECIMAL,
      sum_price: DataTypes.DECIMAL,
      status_payment: DataTypes.STRING,
      purchase_date: DataTypes.DATE,
      payment_date: DataTypes.DATE,
      warranty: DataTypes.STRING,
    },
    {
      // setting sequelize
      sequelize,
      modelName: "Sales",
      freezeTableName: true,
      underscored: true,
      underscoreAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Sales;
};
