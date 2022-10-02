import db from "../../../databases/models";
import { Op } from "sequelize";
import { isEmpty } from "lodash";

const AccountRepository = {
  findAll: async (query) => {
    return await db.Accounts.findAll({
      ...query,
      order: [["created_at", "ASC"]],
    });
  },
  findOneById: async (id) => await db.Accounts.findByPk(id),
  patchById: async (id, data) =>
    await db.Accounts.update(data, {
      where: {
        id: id,
      },
    }),
  deleteById: async (id) =>
    await db.Accounts.destroy({
      where: {
        id,
      },
    }),
  create: async (data) => {
    let id = 1;
    const keyword = data.role === "customer" ? "C000" : "U000";
    const querySearchId = await db.Accounts.findAll({
      attributes: ["id"],
      where: {
        id: { [Op.like]: `%${keyword}%` },
      },
      order: [["created_at", "DESC"]],
    });

    if (!isEmpty(querySearchId)) {
      const arrSplitId = querySearchId[0].dataValues.id.split(keyword);
      id = +arrSplitId[1] + 1;
    }

    data.id = `${keyword}${id}`;
    return await db.Accounts.create(data);
  },
  findByUsername: async (username) =>
    await db.Accounts.findOne({
      where: {
        username,
      },
    }),
  updateById: async (id, data) =>
    await db.Accounts.update(data, {
      where: {
        id: id,
      },
    }),
};

export default AccountRepository;
