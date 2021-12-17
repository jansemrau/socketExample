const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/admin", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/client", (req, res) => {
    res.sendFile(__dirname + "/client.html");
});

io.on("connection", (socket) => {
    socket.on("change color", (color) => {
        io.emit("change color", color);
    });
    socket.on("change picture", (pictureString) => {
        io.emit("change picture", pictureString);
    });
});
server.listen(4000, () => {
    console.log("listening on *:3000");
});
