import express from "express";
import dotenv from 'dotenv'
import { Server } from "socket.io";
import { createServer } from 'http'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
})

io.on("connection", (socket) => {
    socket.on("message", (data) => {
        console.log(data);
        io.emit("receive-message", data)
    })
})


app.get('/', (req, res) => {
    res.send("working")
})

export default server