"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Accounts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      fname: {
        type: Sequelize.STRING,
      },
      lname: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.TEXT,
      },
      tel: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.DECIMAL,
      },
      weight: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
      },
      height: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
      },
      dob: {
        type: Sequelize.DATE,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      image: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "StatusEnums",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    await queryInterface.dropTable("Accounts");
  },
};
