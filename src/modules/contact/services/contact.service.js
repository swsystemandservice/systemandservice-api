import ContactRepository from "../repositories/contact.repository.js";

const ContactService = {
  findAll: async () => await ContactRepository.findAll(),
  create: async (data) => {
    await ContactRepository.create({ ...data });
    return await ContactRepository.findAll();
  },
};

export default ContactService;
