import db from "../../../databases/models";

const ContactRepository = {
  findAll: async () =>
    await db.Contacts.findAll({
      order: [["id", "DESC"]],
    }),
  create: async (data) => await db.Contacts.create(data),
};

export default ContactRepository;
