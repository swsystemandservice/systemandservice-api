"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Repairs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sales",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      symptom1: {
        type: Sequelize.STRING,
      },
      symptom2: {
        type: Sequelize.STRING,
      },
      symptom3: {
        type: Sequelize.STRING,
      },
      symptom4: {
        type: Sequelize.STRING,
      },
      image1: {
        type: Sequelize.STRING,
      },
      image2: {
        type: Sequelize.STRING,
      },
      image3: {
        type: Sequelize.STRING,
      },
      service_staff: {
        type: Sequelize.STRING,
        references: {
          model: "Accounts",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      success_date: {
        type: Sequelize.STRING,
      },
      status: {
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
    await queryInterface.dropTable("Repairs");
  },
};
