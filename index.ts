import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.post("/api", async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).send("Email is required field!");

    try {
        const createdRow = await prisma.waitList.create({
            data: {
                email,
            },
        });
        res.json(createdRow);
    } catch (error) {
        res.status(400).send({ message: error });
    }
});

app.post("/users", async (req, res) => {
    const { firstName, lastName, email, phoneCode, phoneNum, message } = req.body;
    if (
        !firstName ||
        !lastName ||
        !email ||
        !phoneCode ||
        !phoneNum ||
        !message
    )
        return res.status(400).send("These fields are required!");

    try {
        const createdList = await prisma.submitForm.create({
            data: { firstName, lastName, email, phoneCode, phoneNum, message },
        });
        res.json(createdList);
    } catch (error) {
        res.status(400).send({ message: error });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// {
// 	"firstName": "Andrii",
// 	"lastName": "Shevchuk",
// 	"email": "andrii.shevchuk@gmail.com",
// 	"phoneCode": "+1",
// 	"phoneNum": "9295611188",
// 	"message": "Hello, my name is Andrii Shevchuk."
// }
