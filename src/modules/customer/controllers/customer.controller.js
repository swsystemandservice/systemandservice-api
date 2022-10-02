import CustomerService from "../services/customer.service.js";

export default {
  async getCustomers(req, res) {
    const data = await CustomerService.findAll();
    res.status(200).json({
      success: true,
      data,
    });
  },
  async getCustomerById(req, res) {
    const { id } = req.params;
    const data = await CustomerService.findOneById(id);
    res.status(200).json({
      success: true,
      data: data ? data : {},
    });
  },
  async createCustomer(req, res) {
    const data = await CustomerService.create(req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async patchCustomer(req, res) {
    const { id } = req.params;
    const data = await CustomerService.patchById(id, req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async deleteCustomer(req, res) {
    const { id } = req.params;
    const puestion = await CustomerService.deleteById(id);
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
