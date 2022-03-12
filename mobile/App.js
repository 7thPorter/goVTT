//Elements imported from packages
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Modal,
} from "react-native";
import Swiper from "react-native-swiper";

//Elements imported from local components/project files
import Chat from "./components/Chat";
import CharacterSheet from "./components/CharacterSheet";
import Board from "./components/Board";
import { SocketContext, socket } from "./components/contexts/socket";

//Images imported from the assets folder
const background = require("./assets/images/street3.jpg");
const logo = require("./assets/PocketTable.png");

const App = () => {
  //States used in this component
  const [intro, setIntro] = useState(true);

  //This function runs on component mount
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 4000);
  }, []);

  //This block is what's being displayed on screen. Pretty straightforward.
  return (
    <SocketContext.Provider value={socket}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={intro}
        onRequestClose={() => {
          setIntro(false);
        }}
        style={styles.logoContainer}
      >
        {/* <View style={styles.logoBG}> */}
        <View style={styles.shim} />
        <Image source={logo} style={styles.logo} />
        <View style={styles.shim} />
        {/* </View> */}
      </Modal>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
      >
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
  logo: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 2,
    alignSelf: "center",
    flex: 2,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 1)",
  },
  // logoBG: {
  //   backgroundColor: "rgba(0, 0, 0, 1)",
  // },
  shim: {
    flex: 1,
  },
});

export default App;
