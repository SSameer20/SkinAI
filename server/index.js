const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express();




// Middle Ware
app.use(bodyParser.json());
app.use(cors());



//variables
const PORT = process.env.PORT;

// Routes
app.get("/",(req, res) => {
    res.sendFile(__dirname + "/files/index.html")
})

app.get("/doc",(req, res) => {
    res.sendFile(__dirname + "/files/SkinAI_SRS.docx")
})

// Listen
app.listen(PORT, (req, res) => {
    console.log(`Server Is Running http://localhost:${PORT}`)
})
