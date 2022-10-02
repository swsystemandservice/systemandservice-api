import CustomerRepository from "../repositories/customer.repository.js";

const CustomerService = {
  findAll: async () => await CustomerRepository.findAll(),
  findOneById: async (id) => await CustomerRepository.findOneById(id),
  create: async (data) => {
    await CustomerRepository.create({ ...data });
    return await CustomerRepository.findAll();
  },
  patchById: async (id, data) => {
    const result = await CustomerRepository.findOneById(id);
    if (result) {
      const updated = await CustomerRepository.patchById(result.id, { ...data });
      if (updated) {
        return await CustomerRepository.findOneById(id);
      }
    }
    return null;
  },
  deleteById: async (id) => {
    const result = await CustomerRepository.findOneById(id);
    if (result) {
      const deleted = await CustomerRepository.deleteById(id);
      if (deleted) {
        return await CustomerRepository.findAll();
      }
    }
    return false;
  },
};

export default CustomerService;
