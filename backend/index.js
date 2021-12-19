const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
port = 3000;

//This block listens for connection and lets us know when someone has successfully connected.
io.on("connection", (socket) => {
  console.log("A user connected!: " + socket.id);

  //Here, we're receiving the message from the client, and using it. In this case, we're sending the message back out to all of the sockets listening to our server.
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });

  //This should receive the emission from the CharacterSheet component and send it to the listener in the Chat component.
  socket.on("name", (name) => {
    console.log(name);
    io.to(name.id).emit(name);
  });
});

//This line has the server listening on the port, and when the connection is made, it'll tell us.
server.listen(port, () => console.log(`Server is running on port: ${port}`));
