const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());
app.get('/' , function (req , res){
    res.json({
        "mess ":" successfully fucked up"
    })
})

app.listen(PORT , ()=>{
    console.log("App is listening on port : " , PORT);
})