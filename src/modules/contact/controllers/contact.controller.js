import ContactService from "../services/contact.service";

export default {
  async getContact(req, res) {
    const { order, search } = req.query;
    const data = await ContactService.findAll(order, search);
    res.status(200).json({
      success: true,
      data,
    });
  },
  createContact: async (req, res) => {
    const data = await ContactService.create(req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
};
