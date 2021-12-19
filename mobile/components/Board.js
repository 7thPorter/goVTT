import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Image } from "react-native";

//Here I'm importing the image files from the assets folder.
const gilda = require("../assets/images/gilda.png");
const klaus = require("../assets/images/klaus.png");
const auron = require("../assets/images/auron.png");
const lexa = require("../assets/images/lexa.png");
const steven = require("../assets/images/steven.png");

//This is REALLY hardcoded right now, but I'm going to find a solution!
const Board = () => {
  return (
    <ScrollView style={styles.scrollContainerVertical}>
      <View style={styles.container}>
        <View style={styles.element}>
          <Image source={gilda} style={styles.token} />
        </View>
        <View style={styles.element}>
          <Image source={klaus} style={styles.token} />
        </View>
        {[...Array(9)].map((element) => (
          <View style={styles.element} key={element}></View>
        ))}
        <View style={styles.element}>
          <Image source={auron} style={styles.token} />
        </View>
        {[...Array(1)].map((element) => (
          <View style={styles.element} key={element}></View>
        ))}
        <View style={styles.element}>
          <Image source={lexa} style={styles.token} />
        </View>
        {[...Array(3)].map((element) => (
          <View style={styles.element} key={element}></View>
        ))}
        <View style={styles.element}>
          <Image source={steven} style={styles.token} />
        </View>
        {[...Array(52)].map((element) => (
          <View style={styles.element} key={element}></View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainerVertical: {
    marginTop: 40,
    flex: 1,
    height: 1000,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  element: {
    width: Dimensions.get("window").width / 5,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dotted",
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    backgroundColor: "transparent",
  },
  //If I don't specify the width and height here, this won't work properly. Seems like basically, the width and height are the container limits within which to contain the image.
  token: {
    resizeMode: "contain",
    width: 75,
    height: 75,
  },
});

export default Board;
