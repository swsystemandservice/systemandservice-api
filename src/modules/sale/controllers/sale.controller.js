import SaleService from "../services/sale.service.js";

export default {
  async getSales(req, res) {
    const data = await SaleService.findAll();
    res.status(200).json({
      success: true,
      data,
    });
  },
  async getSalesByCustomerId(req, res) {
    const { id } = req.params;
    const data = await SaleService.findAllByCustomerId(id);
    res.status(200).json({
      success: true,
      data,
    });
  },
  async getSaleById(req, res) {
    const { id } = req.params;
    const data = await SaleService.findOneById(+id);
    res.status(200).json({
      success: true,
      data: data ? data : {},
    });
  },
  async createSale(req, res) {
    const data = await SaleService.create(req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async patchSale(req, res) {
    const { id } = req.params;
    const data = await SaleService.patchById(id, req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async deleteSale(req, res) {
    const { id } = req.params;
    const puestion = await SaleService.deleteById(id);
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
  }
};
