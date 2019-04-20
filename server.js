const express = require("express");
var app = express();

port = process.env.PORT || 3000;
cwd = process.cwd()
app.use(express.static(__dirname));
app.get("/", (req, res, next) => {
    res.sendFile(cwd + 'index.html')
})
app.listen(port, () => {
    console.log("Hello there!!!");
})