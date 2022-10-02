import ProductService from "../services/product.service.js";

export default {
  async getProducts(req, res) {
    const data = await ProductService.findAll();
    res.status(200).json({
      success: true,
      data,
    });
  },
  async getProductById(req, res) {
    const { id } = req.params;
    const data = await ProductService.findOneById(id);
    res.status(200).json({
      success: true,
      data: data ? data : {},
    });
  },
  async createProduct(req, res) {
    const data = await ProductService.create(req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async decrementProduct(req, res) {
    const { id } = req.params;
    const data = await ProductService.decrement(id, req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async patchProduct(req, res) {
    const { id } = req.params;
    const data = await ProductService.patchById(id, req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async deleteProduct(req, res) {
    const { id } = req.params;
    const puestion = await ProductService.deleteById(id);
    if (puestion) {
      res.status(200).json({
        success: true,
        data: puestion,
      });
    } else {
      res.status(204).json({
        success: false,
      });
    }
  },
};
