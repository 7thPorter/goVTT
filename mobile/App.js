import React from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

import Chat from "./components/Chat";
import CharacterSheet from "./components/CharacterSheet";
import Board from "./components/Board";
import { SocketContext, socket } from "./components/contexts/socket";

const background = require("./assets/images/street3.jpg");

//I had to modify this a little bit to be a react component, but it still works, so all good.
const App = () => {
  //This block is what's being displayed on screen. Pretty straightforward.
  return (
    <SocketContext.Provider value={socket}>
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <ImageBackground source={background} style={styles.boardImage}>
            <Board />
          </ImageBackground>
        </View>
        <View style={styles.slide2}>
          <Chat />
        </View>
        <View style={styles.slide3}>
          <CharacterSheet />
        </View>
      </Swiper>
    </SocketContext.Provider>
  );
};

//This block sets the style for what's being displayed in the styles.container line above. Use CSS-esque elements inside the object.
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#ede1e8",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCF5E5",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  boardImage: {
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: 50,
  },
});

export default App;
