"use strict";

const data = [
  {
    title: "คิดว่าในอนาคต AI จะอยู่เหนือมนุษย์หรือไม่ ?",
    description: "<p>ได้ไปดูวิดีโอหนึ่งมาโดยบังเอิญ เป็นเกี่ยวกับบุคคลคนหนึ่งกล่าวไว้ว่าAI นั้นเป็นสิ่งที่อันตรายกว่าอาวุธชีวภาพ ผมก็พึ่งนึกได้ว่าตอนนี้เขากำลังพัฒนา AI กันอย่างต่อเนื่องและมันมีวิดีโอที่คนไปคุยสัมภาษณ์กับ AI แบบมันดูน่ากลัว มันดูมีการคิดการอ่านเหมือนคนเลย ผมเลยอยากรู้มากว่าในอนาคตจุดที่ AI มันถูกพัฒนาจนถึงจุดที่มันคิดเองได้เรียนรู้เองได้ AI จะมาอยู่เหนือมนุษย์หรือเปล่า และมนุษย์จะมีวิธีรับมือยังไง</p>",
    alias: "John",
    email: "email@email.com",
    status: 1,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    data.map((item) => {
      item.created_at = new Date();
      item.updated_at = new Date();
    });

    await queryInterface.bulkInsert("Questions", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
