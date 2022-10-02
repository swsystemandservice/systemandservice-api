import RepairRepository from "../repositories/repair.repository.js";

const RepairService = {
  findAll: async () => await RepairRepository.findAll(),
  findOneById: async (id) => await RepairRepository.findOneById(id),
  findRepairByIdSale: async (id) => await RepairRepository.findRepairByIdSale(id),
  create: async (data, file) => {
    const status = data.status || 'รอให้บริการ'
    await RepairRepository.create({ ...data, image1: file ? file.filename : "", status });
    return await RepairRepository.findAll();
  },
  patchById: async (id, data, file) => {
    const result = await RepairRepository.findOneById(id);
    if (result) {
      const updated = await RepairRepository.patchById(result.id, { ...data, image1: file ? file.filename : result.image1 });
      if (updated) {
        return await RepairRepository.findOneById(id);
      }
    }
    return null;
  },
  deleteById: async (id) => {
    const result = await RepairRepository.findOneById(id);
    if (result) {
      const deleted = await RepairRepository.deleteById(id);
      if (deleted) {
        return await RepairRepository.findAll();
      }
    }
    return false;
  },
};

export default RepairService;
