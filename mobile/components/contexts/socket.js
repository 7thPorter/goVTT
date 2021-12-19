//This small component sets me up to use socket everywhere within the app. We're going to import it into App.js, wrap the entire app in it,
//and bring the context back up when we need it on a per-component basis.
import React from "react";
import io from "socket.io-client";

export const socket = io("http://192.168.1.54:3000");
export const SocketContext = React.createContext();
