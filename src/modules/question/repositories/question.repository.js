import db from "../../../databases/models";
import { Op } from "sequelize";
import { isEmpty } from "lodash";
import { StatusItmeEnum } from "../../../common/status.enum.js";

const QuestionRepository = {
  findAll: async (order, search) =>
    await db.Questions.findAll({
      where: {
        title: !isEmpty(search) ? { [Op.like]: `%${search}%` } : "false",
        status: {
          [Op.eq]: StatusItmeEnum.ACTIVE,
        },
      },
      include: [
        {
          model: db.StatusEnums,
          attributes: [
            ["id", "statusId"],
            ["name", "statusName"],
          ], // id AS statusId, name AS statusName
        },
      ],
      order: [[isEmpty(order) ? "id" : order, "DESC"]],
    }),
  findOneById: async (id) =>
    await db.Questions.findByPk(id, {
      where: {
        status: {
          [Op.eq]: StatusItmeEnum.ACTIVE,
        },
      },
      include: [
        {
          model: db.StatusEnums,
          attributes: [
            ["id", "statusId"],
            ["name", "statusName"],
          ],
        },
      ],
    }),
  create: async (data) => await db.Questions.create(data),
  patchById: async (id, data) =>
    await db.Questions.update(data, {
      where: {
        id: id,
      },
    }),
  deleteById: async (id) =>
    await db.Questions.destroy({
      where: {
        id,
      },
    }),
  findCommentByQuestionId: async (questionId) =>
    await db.Comments.findAll({
      where: {
        question_id: {
          [Op.eq]: questionId,
        },
      },
      include: [
        {
          model: db.Questions,
          attributes: [["id", "questionId"]],
        },
      ],
      order: [["id", "DESC"]],
    }),
  createComment: async (data) => await db.Comments.create(data),
};

export default QuestionRepository;
