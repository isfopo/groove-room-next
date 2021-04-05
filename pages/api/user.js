import prisma from "../../prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method === "POST") {
    // find or create user

    let user = await prisma.user.findUnique({
      where: { name: req.body.name },
      include: { rooms: true },
    });

    if (user == null) {
      user = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          avatar: req.body.picture,
        },
        include: { rooms: true },
      });
    }

    res.status(200).json(user);
  }
};
