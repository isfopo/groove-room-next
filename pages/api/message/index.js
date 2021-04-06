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
      orderBy: {
        createdAt: "asc",
      },
    });

    res.status(200).json(messages);
  }

  if (req.method === "POST") {
    const {
      body: { user, currentUser, room, content },
    } = req;

    if (user === currentUser) {
      const message = await prisma.message.create({
        data: {
          content,
          author: {
            connect: { id: user },
          },
          room: {
            connect: { id: room },
          },
        },
      });
      console.log(message);
      res.status(200).json(message);
    } else {
      res.sendStatus(400);
    }
  }
};
