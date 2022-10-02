"use strict";

const data = [
  {
    name: "active",
  },
  {
    name: "inactive",
  },
  {
    name: "deleted",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    data.map((item) => {
      item.created_at = new Date();
      item.updated_at = new Date();
    });

    await queryInterface.bulkInsert("StatusEnums", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("StatusEnums", null, {});
  },
};
