import db from "../../../databases/models";

const RepairRepository = {
  findAll: async () =>
    await db.Repairs.findAll({
      order: [["created_at", "ASC"]],
    }),
  findOneById: async (id) => await db.Repairs.findByPk(id),
  findRepairByIdSale: async (id) =>
    await db.Repairs.findAll({
      where: {
        sale_id: id,
      },
      include: [
        {
          model: db.Accounts,
          as: 'account'
        },
        {
          model: db.Sales,
          as: 'sale'
        },
      ],
    }),
  create: async (data) => await db.Repairs.create(data),
  patchById: async (id, data) =>
    await db.Repairs.update(data, {
      where: {
        id,
      },
    }),
  deleteById: async (id) =>
    await db.Repairs.destroy({
      where: {
        id,
      },
    }),
};

export default RepairRepository;
