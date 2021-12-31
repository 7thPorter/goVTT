import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
} from "react-native";

//Here I'm importing the image files from the assets folder.
const gilda = require("../assets/images/gilda.png");
const klaus = require("../assets/images/klaus.png");
const auron = require("../assets/images/auron.png");
const lexa = require("../assets/images/lexa.png");
const steven = require("../assets/images/steven.png");

//This is REALLY hardcoded right now, but I'm going to find a solution!
const Board = () => {
  const [selected, setSelected] = useState(null);
  const [tokenIsAt, setTokenIsAt] = useState(null);
  return (
    <ScrollView style={styles.scrollContainerVertical}>
      <View style={styles.container}>
        {[...Array(50)].map((element, i) => (
          <Pressable
            onPress={() => {
              setSelected(null);
              if (selected === i) {
                setSelected(null);
              } else {
                setSelected(i);
              }
            }}
            onLongPress={() => {
              setTokenIsAt(null);
              setTokenIsAt(i);
            }}
            key={i}
          >
            <View
              style={selected === i ? styles.selected : styles.grid}
              key={i}
            >
              {tokenIsAt === i ? (
                <Image source={gilda} style={styles.token} />
              ) : null}
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

{
  /* <View style={styles.grid}>
          <Image source={gilda} style={styles.token} />
        </View> */
}

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
  grid: {
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
  selected: {
    width: Dimensions.get("window").width / 5,
    shadowColor: "yellow",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.43,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: "yellow",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    backgroundColor: "transparent",
  },
});

export default Board;
