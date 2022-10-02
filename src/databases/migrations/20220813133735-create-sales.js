"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      account_id: {
        type: Sequelize.STRING,
        references: {
          model: "Accounts",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      customer_id: {
        type: Sequelize.STRING,
        references: {
          model: "Accounts",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      product_id1: {
        type: Sequelize.STRING,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity1: {
        type: Sequelize.INTEGER,
      },
      price1: {
        type: Sequelize.DECIMAL,
      },
      product_id2: {
        type: Sequelize.STRING,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity2: {
        type: Sequelize.INTEGER,
      },
      price2: {
        type: Sequelize.DECIMAL,
      },
      product_id3: {
        type: Sequelize.STRING,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity3: {
        type: Sequelize.INTEGER,
      },
      price3: {
        type: Sequelize.DECIMAL,
      },
      product_id4: {
        type: Sequelize.STRING,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity4: {
        type: Sequelize.INTEGER,
      },
      price4: {
        type: Sequelize.DECIMAL,
      },
      sum_price: {
        type: Sequelize.DECIMAL,
      },
      status_payment: {
        type: Sequelize.STRING,
      },
      purchase_date: {
        type: Sequelize.DATE,
      },
      payment_date: {
        type: Sequelize.DATE,
      },
      warranty: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sales");
  },
};
