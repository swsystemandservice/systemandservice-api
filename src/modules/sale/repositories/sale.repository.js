import db from "../../../databases/models";

const SaleRepository = {
  findAll: async () =>
    await db.Sales.findAll({
      include: [
        {
          model: db.Accounts,
          as: 'account'
        },
        {
          model: db.Accounts,
          as: 'customer'
        },
        {
          model: db.Repairs,
          as: 'repairs'
        },
      ],
      order: [["created_at", "ASC"]],
    }),
    findAllByCustomerId: async (id) =>
    await db.Sales.findAll({
      where: {
        customer_id: id,
      },
      include: [
        {
          model: db.Accounts,
          as: 'account'
        },
        {
          model: db.Accounts,
          as: 'customer'
        },
        {
          model: db.Repairs,
          as: 'repairs'
        },
      ],
      order: [["created_at", "ASC"]],
    }),
  findOneById: async (id) =>
    await db.Sales.findByPk(id, {
      include: [
        {
          model: db.Products,
          as: 'product1'
        },
        {
          model: db.Products,
          as: 'product2'
        },
        {
          model: db.Products,
          as: 'product3'
        },
        {
          model: db.Products,
          as: 'product4'
        },
        {
          model: db.Accounts,
          as: 'account'
        },
        {
          model: db.Accounts,
          as: 'customer'
        },
      ],
    }),
  create: async (data) => await db.Sales.create(data),
  patchById: async (id, data) =>
    await db.Sales.update(data, {
      where: {
        id: id,
      },
    }),
  deleteById: async (id) =>
    await db.Sales.destroy({
      where: {
        id,
      },
    }),
};

export default SaleRepository;
