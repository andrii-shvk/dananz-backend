import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from 'cors';

const app = express();
const PORT = 5000;
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json());
app.post("/api", async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).send('Email is required field!');

    try {
        const createdRow = await prisma.waitList.create({
            data: {
                email
            }
        })
        res.json(createdRow)
    } catch (error) {
        res.status(400).send({message: error})
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
