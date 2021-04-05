import prisma from "../../prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method === "POST") {
    // find or create user

    let user = await prisma.user.findUnique({
      where: { name: req.body.name },
    });

    if (user == null) {
      user = await prisma.user.create({
        data: {
          name: req.body.name,
          avatar: req.body.picture,
        },
      });
    }

    console.log(user);
    res.status(200).json(user);
  }
};
