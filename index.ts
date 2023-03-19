import express from 'express'
import dotenv from "dotenv"
const app = express()
dotenv.config()
const PORT = Number(process.env.PORT) 


app.get("/", (req, res) => {
    res.send('Hello from Kunal')
})

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`)
})