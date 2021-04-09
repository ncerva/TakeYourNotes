const { response } = require('express');
const http = require('http');
const fs = require('fs')
const PORT = 8080;

// linking
const handleRequest = (req,res) => {
    fs.readFile(`${__dirname}/index.html`, (err,data) =>{
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
    });
    fs.readFile(`${__dirname}/notes.html`, (err,data) =>{
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
    });
};
const server = http.createServer(handleRequest);
server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
