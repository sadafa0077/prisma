import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
    const { todo } = req.body;
    const todos = await prisma.user.create({
        data: todo,
    });
    res.json(todos);
});
