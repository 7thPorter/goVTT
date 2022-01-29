// import cors from "cors";
import express from "express";
// import { ApolloServer } from "apollo-server-express";

const app = express();
const httpServer = require("http").createServer(app);
// const apolloServer = new ApolloServer({});
const io = require("socket.io")(server);

//---------------
//----------
//THIS IS THE SOCKET SERVER
const socketPort = 3000;

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
    io.to(socket.id).emit(name);
  });
});

//This line has the server listening on the port, and when the connection is made, it'll tell us.
httpServer.listen(socketPort, () =>
  console.log(`Socket server is listening on port: ${socketPort}`)
);
//----------
//---------------
//--------------------
//---------------
//----------
//THIS IS THE APOLLO SERVER
// app.use(cors());

// apolloServer.applyMiddleware({
//   app,
//   path: "/graphql",
// });

// app.listen(
//   {
//     port: 8000,
//   },
//   () => {
//     console.log("Apollo Server is listening to http://localhost:8000/graphql");
//   }
// );
//----------
//---------------
