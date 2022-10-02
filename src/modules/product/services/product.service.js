import ProductRepository from "../repositories/product.repository.js";

const ProductService = {
  findAll: async () => await ProductRepository.findAll(),
  findOneById: async (id) => await ProductRepository.findOneById(id),
  create: async (data) => {
    await ProductRepository.create({ ...data });
    return await ProductRepository.findAll();
  },
  decrement: async (id, data) => {
    return await ProductRepository.decrement(id, data);
  },
  patchById: async (id, data) => {
    const result = await ProductRepository.findOneById(id);
    if (result) {
      const updated = await ProductRepository.patchById(result.id, { ...data });
      if (updated) {
        return await ProductRepository.findOneById(id);
      }
    }
    return null;
  },
  deleteById: async (id) => {
    const result = await ProductRepository.findOneById(id);
    if (result) {
      const deleted = await ProductRepository.deleteById(id);
      if (deleted) {
        return await ProductRepository.findAll();
      }
    }
    return false;
  },
};

export default ProductService;
