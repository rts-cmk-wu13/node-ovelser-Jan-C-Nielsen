const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("hallo world")
})
app.listen(3000);
