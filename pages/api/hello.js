import prisma from "../../prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method === "GET") {
    res
      .status(200)
      .json(await prisma.user.findUnique({ where: { name: "isfopo" } }));
  }
};
