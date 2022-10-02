import SaleRepository from "../repositories/sale.repository.js";

const SaleService = {
  findAll: async () => await SaleRepository.findAll(),
  findAllByCustomerId: async (id) => await SaleRepository.findAllByCustomerId(id),
  findOneById: async (id) => await SaleRepository.findOneById(id),
  create: async (data) => {
    await SaleRepository.create({ ...data });
    return await SaleRepository.findAll();
  },
  patchById: async (id, data) => {
    const result = await SaleRepository.findOneById(id);
    if (result) {
      const updated = await SaleRepository.patchById(result.id, { ...data });
      if (updated) {
        return await SaleRepository.findOneById(id);
      }
    }
    return null;
  },
  deleteById: async (id) => {
    const result = await SaleRepository.findOneById(id);
    if (result) {
      const deleted = await SaleRepository.deleteById(id);
      if (deleted) {
        return await SaleRepository.findAll();
      }
    }
    return false;
  },
};

export default SaleService;
