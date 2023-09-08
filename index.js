const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
app.use(fileupload());
app.use(express.static(__dirname+"/Public"));
app.listen(3000, function() {
    console.log('Server running on port 3000');
});
app.get("/", function(req, res) {
    res.sendFile(__dirname+"/Public/TGSWebsite-Products.html");
});
app.get("/Tutorials", function(req, res) {
    res.sendFile(__dirname+"/Public/TGSWebsite-Tutorials.html");
});
app.get("/BookLessons", function(req, res) {
    res.sendFile(__dirname+"/Public/TGSWebsite-BookLessons.html");
});
app.get("/AboutMe", function(req, res) {
    res.sendFile(__dirname+"/Public/TGSWebsite-AboutMe.html");
});