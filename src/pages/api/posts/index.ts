// src/pages/api/posts/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const posts = await prisma.post.findMany();
      return res.json(posts);
    case 'POST':
      const { title, content } = req.body;
      const post = await prisma.post.create({
        data: { title, content },
      });
      return res.json(post);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
