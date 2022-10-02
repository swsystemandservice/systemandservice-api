import db from "../../../databases/models";
import { Op } from "sequelize";
import { isEmpty } from "lodash";

const ProductRepository = {
  findAll: async () =>
    await db.Products.findAll({
      order: [["created_at", "ASC"]],
    }),
  findOneById: async (id) => await db.Products.findByPk(id),
  create: async (data) => {
    let id = 1;
    const querySearchId = await db.Products.findAll({
      attributes: ["id"],
      where: {
        id: { [Op.like]: `%${data.id}%` },
      },
      limit: 1,
      order: [["created_at", "DESC"]],
    });

    if (!isEmpty(querySearchId)) {
      const arrSplitId = querySearchId[0].dataValues.id.split(data.id);
      id = +arrSplitId[1] + 1;
    }

    data.id = `${data.id}00${id}`;
    return await db.Products.create(data);
  },
  decrement: async (id, data) => {
    await db.Products.decrement({ quantity: data.quantity }, { where: { id } });
  },
  patchById: async (id, data) => {
    await db.Products.update(data, {
      where: {
        id: id,
      },
    });
  },
  deleteById: async (id) =>
    await db.Products.destroy({
      where: {
        id,
      },
    }),
};

export default ProductRepository;
