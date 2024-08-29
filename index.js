const express = require("express");
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.get('/' , function (req , res){
    
    res.json({
        "mess ":" successfully fucked up"
    })
})
app.get('/page', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT , ()=>{
    console.log("App is listening on port : " , PORT);
})