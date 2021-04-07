import prisma from "../../../prisma/client";
import { getSession } from "next-auth/client";
const SpotifyWebApi = require("spotify-web-api-node");

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
    const spotifyWebApi = new SpotifyWebApi();

    const session = await getSession({ req });

    const {
      user: { accessToken },
    } = session;
    spotifyWebApi.setAccessToken(accessToken);
    const me = await spotifyWebApi.getMe();

    const user = await prisma.user.findUnique({
      where: {
        name: me.body.display_name,
      },
    });

    const {
      body: { room, content },
    } = req;
    // TODO: also verify if user in in room
    if (user) {
      const message = await prisma.message.create({
        data: {
          content,
          author: {
            connect: { id: user.id },
          },
          room: {
            connect: { id: room },
          },
        },
      });

      res.status(200).json(message);
    } else {
      res.sendStatus(400);
    }
  }
};
