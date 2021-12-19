import React, { useContext, useState, useEffect } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import { SocketContext } from "./contexts/socket";

const Chat = () => {
  //Here is where we use the socket context we defined in the socket context component and started in App.js
  const socket = useContext(SocketContext);

  //chatMessage deals with the message currently being typed, while chatMessages is a list of all of the messages that have been entered.
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const [otherName, setOtherName] = useState("");

  //This block completes the socket connection between the backend server (backend/index.js) and the client (mobile/App.js).
  //These are also my listeners for server emissions to update chat.
  useEffect(() => {
    socket.on("chat message", (msg) => {
      console.log(msg.text);
      console.log(chatMessages);
      setChatMessages([...chatMessages, msg]);
      setOtherName(msg.sender);
    });
    socket.on("name", (name) => {
      console.log("NAME VARIABLE: ", name);
      setUserName(name.name);
    });
  }, [setChatMessages, setUserName]);

  //Here, we're telling the socket to emit something called "chat message" to the server with the chatMessage from state attached. Then, we clear chatMessage.
  const submitChatMessage = () => {
    const msg = {
      text: chatMessage,
      sender: userName,
      type: "chat",
    };
    socket.emit("chat message", msg);
    setChatMessage("");
  };

  //This block is Defining how the chat displays. If the sender matches the sender of the message, it displays differently.
  const chatMessagesMap = chatMessages.map((message) => (
    <Text
      style={message.sender === userName ? styles.ownText : styles.text}
      key={message.sender + message.text}
    >
      {message.sender !== userName ? otherName + ": " : null}
      {message.text}
    </Text>
  ));

  //This block is just what's actually being output on screen.
  return (
    <KeyboardAvoidingView style={styles.view} behavior="padding">
      {chatMessagesMap}
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        value={chatMessage}
        onChangeText={(enteredMessage) => {
          setChatMessage(enteredMessage);
        }}
        onSubmitEditing={() => {
          submitChatMessage();
        }}
      />
    </KeyboardAvoidingView>
  );
};

//This is our CSS for the component, essentially, even though React-Native doesn't use CSS per se.
const styles = StyleSheet.create({
  ownText: {
    backgroundColor: "lightgreen",
    color: "black",
    borderRadius: 20,
    padding: 8,
    margin: 3,
    marginRight: 20,
    alignSelf: "flex-end",
  },
  text: {
    backgroundColor: "lightblue",
    color: "black",
    borderRadius: 20,
    padding: 8,
    margin: 3,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  textInput: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    marginBottom: 40,
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "center",
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Chat;
