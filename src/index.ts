import express, { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const app = express();

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
    const { todo } = req.body; //リクエストの中身を定数に代入
    const todos = await prisma.user.createMany({ //複数の新規データを作成する
        data: todo, //todoに代入する
    })
    res.json(todos);　//json形式で送信する

});
