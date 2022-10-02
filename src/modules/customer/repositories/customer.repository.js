import db from "../../../databases/models";

const CustomerRepository = {
  findAll: async () =>
    await db.Customers.findAll({
      order: [["created_at", "ASC"]],
    }),
  findOneById: async (id) => await db.Customers.findByPk(id),
  create: async (data) => {
    const count = (await db.Customers.count()) + 1;
    data.id = "C000" + count;
    return await db.Customers.create(data);
  },
  patchById: async (id, data) =>
    await db.Customers.update(data, {
      where: {
        id: id,
      },
    }),
  deleteById: async (id) =>
    await db.Customers.destroy({
      where: {
        id,
      },
    }),
};

export default CustomerRepository;
