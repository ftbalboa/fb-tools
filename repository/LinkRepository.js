const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const LinkRepository = {
  delete: async (id) => {
    return await prisma.link.delete({ where: { id } });
  },
  new: async ({ title, url }) => {
    return await prisma.link.create({
      data: {
        title,
        url,
      },
    });
  },
  getAll: async () => {
    return await prisma.link.findMany();
  },
};

module.exports = LinkRepository;
