import prisma from "../../../prisma/client";

export default async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;

    const room = await prisma.room.findUnique({
      where: { id },
      include: { users: true, messages: true },
    });

    res.status(200).json(room);
  }
};
