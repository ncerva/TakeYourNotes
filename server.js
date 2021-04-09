const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const mainDir = path.join(__dirname, "/public");

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/notes/:id", function(req, res) {
    const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})
