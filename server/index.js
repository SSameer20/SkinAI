const express = require('express');
const bodyParser = require('body-parser') 
const app = express();


// middle ware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("port listening on 3001");
})

app.get("/home/login", (req, res)=> {
    const {Email, Password} = req.body;
    console.log(Email + " " + Password);
    res.send("Logion Successful")
})

app.listen(3001, (req, res) => {
    console.log("Server is running on port 3001");

})