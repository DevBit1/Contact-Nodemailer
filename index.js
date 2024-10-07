import { config } from "dotenv";
config({
    path: "./config/.env"
})
import express from "express";
import { createServer } from "http"
import dbConnect from "./config/dbConnect.js";
import submitForm from "./app/controllers/contact.controller.js";
import authenticate from "./app/middlewares/auth.middleware.js";
import getAllForms from "./app/controllers/admin.controller.js";



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/contact', submitForm)
app.get('/admin', authenticate, getAllForms)

app.get('/', (req, res) => {
    res.json({
        message: "Hello there!!"
    })
})

dbConnect()

const server = createServer(app)

server.listen(port, () => {
    console.log(`Server started at ${port}`)
})