import prisma from "../../../prisma/client";

export default async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { room, user },
    } = req;

    const messages = await prisma.message.findMany({
      where: {
        AND: {
          author: {
            id: user,
          },
          room: {
            id: room,
          },
        },
      },
    });

    res.status(200).json(messages);
  }
};
