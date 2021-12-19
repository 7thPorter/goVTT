import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { SocketContext } from "./contexts/socket";

const CharacterSheet = () => {
  const socket = useContext(SocketContext);

  //These states are storing my content for the race list. They look a little different because dropdown-picker is looking for these states specifically.
  //RaceOpen is a boolean indicating whether the dropdown menu is open or closed.
  //RaceValue is the current value of the menu. It starts with nothing selected, so it's null, but will update with whatever choice the user chooses.
  //RaceItems is just the list of all the races you find in the dropdown menu.
  const [raceOpen, setRaceOpen] = useState(false);
  const [raceValue, setRaceValue] = useState(null);
  const [raceItems, setRaceItems] = useState([
    { label: "Dragonborn", value: "dragonborn" },
    { label: "Dwarf", value: "dwarf" },
    { label: "Elf", value: "elf" },
    { label: "Gnome", value: "gnome" },
    { label: "Half-Elf", value: "half-elf" },
    { label: "Half-Orc", value: "half-orc" },
    { label: "Halfling", value: "halfling" },
    { label: "Human", value: "human" },
    { label: "Tiefling", value: "tiefling" },
    { label: "Orc", value: "orc" },
    { label: "Leonin", value: "leonin" },
    { label: "Satyr", value: "satyr" },
    { label: "Fairy", value: "fairy" },
    { label: "Harengon", value: "harengon" },
    { label: "Aarakocra", value: "aarakocra" },
    { label: "Genasi", value: "genasi" },
    { label: "Goliath", value: "goliath" },
    { label: "Aasimar", value: "aasimar" },
    { label: "Bugbear", value: "bugbear" },
    { label: "Goblin", value: "goblin" },
    { label: "Firbolg", value: "firbolg" },
    { label: "Hobgoblin", value: "hobgoblin" },
    { label: "Kenku", value: "kenku" },
    { label: "Kobold", value: "kobold" },
    { label: "Lizardfolk", value: "lizardfolk" },
    { label: "Tabaxi", value: "tabaxi" },
    { label: "Triton", value: "triton" },
    { label: "Yuan-ti Pureblood", value: "yuan-ti pureblood" },
    { label: "Feral Tiefling", value: "feral tiefling" },
    { label: "Tortle", value: "tortle" },
    { label: "Changeling", value: "changeling" },
    { label: "Kalashtar", value: "kalashtar" },
    { label: "Shifter", value: "shifter" },
    { label: "Warforged", value: "warforged" },
    { label: "Gith", value: "gith" },
    { label: "Centaur", value: "centaur" },
    { label: "Loxodon", value: "loxodon" },
    { label: "Minotaur", value: "minotaur" },
    { label: "Simic Hybrid", value: "simic hybrid" },
    { label: "Vedalken", value: "vedalken" },
    { label: "Verdan", value: "verdan" },
    { label: "Locathah", value: "locathah" },
    { label: "Grung", value: "grung" },
  ]);
  const [classOpen, setClassOpen] = useState(false);
  const [classValue, setClassValue] = useState(null);
  const [classItems, setClassItems] = useState([
    { label: "Barbarian", value: "barbarian" },
    { label: "Bard", value: "bard" },
    { label: "Cleric", value: "cleric" },
    { label: "Druid", value: "druid" },
    { label: "Fighter", value: "fighter" },
    { label: "Monk", value: "monk" },
    { label: "Paladin", value: "paladin" },
    { label: "Ranger", value: "ranger" },
    { label: "Rogue", value: "rogue" },
    { label: "Sorcerer", value: "sorcerer" },
    { label: "Warlock", value: "warlock" },
    { label: "Wizard", value: "wizard" },
  ]);
  const [nameIsPressed, setNameIsPressed] = useState(false);
  const [characterName, setCharacterName] = useState("No Name");
  const [nameInput, onChangeNameInput] = useState(`${characterName}`);
  const [strength, setStrength] = useState(9);
  const [strengthMod, setStrengthMod] = useState(-1);
  const [dexterity, setDexterity] = useState(18);
  const [dexterityMod, setDexterityMod] = useState(4);
  const [constitution, setConstitution] = useState(12);
  const [constitutionMod, setConstitutionMod] = useState(1);
  const [intelligence, setIntelligence] = useState(18);
  const [intelligenceMod, setIntelligenceMod] = useState(+4);
  const [wisdom, setWisdom] = useState(10);
  const [wisdomMod, setWisdomMod] = useState(0);
  const [charisma, setCharisma] = useState(14);
  const [charismaMod, setCharismaMod] = useState(2);

  const onRaceOpen = useCallback(() => {
    setClassOpen(false);
  }, []);
  const onClassOpen = useCallback(() => {
    setRaceOpen(false);
  }, []);
  const onPressName = useCallback(() => {
    setNameIsPressed(!nameIsPressed);
  }, [nameIsPressed, setNameIsPressed]);
  const changeName = useCallback(() => {
    setCharacterName(nameInput);
    setNameIsPressed(!nameIsPressed);
  }, [setCharacterName, nameInput, setNameIsPressed, nameIsPressed]);

  useEffect(() => {
    const name = {
      name: characterName,
      id: socket.id,
    };
    socket.emit("name", name);
  }, [characterName]);

  const pressAttribute = (event) => {
    console.log(event.target);

    let attributeMod = {
      attribute: "attribute",
      mod: 0,
      roll: 0,
    };
    switch (attribute) {
      case "strength":
        attributeMod.mod = strengthMod;
        break;
      case "dexterity":
        attributeMod.mod = dexterityMod;
        break;
      case "constitution":
        attributeMod.mod = constitutionMod;
        break;
      case "intelligence":
        attributeMod.mod = intelligenceMod;
        break;
      case "wisdom":
        attributeMod.mod = wisdomMod;
        break;
      case "charisma":
        attributeMod.mod = charismaMod;
        break;
      default:
        break;
    }
    emitAttribute(attributeMod);
  };

  const emitAttribute = (attributeMod) => {
    attributeMod.roll = Math.ceil(Math.random() * 20);
    console.log(attributeMod.roll);
  };

  return (
    <>
      <Pressable onLongPress={onPressName} style={styles.nameplateContainer}>
        {nameIsPressed ? (
          <TextInput
            style={styles.textInput}
            autocorrect={false}
            onChangeText={onChangeNameInput}
            value={nameInput}
            onSubmitEditing={changeName}
          />
        ) : (
          <Text style={styles.nameplate}>Character Name: {characterName}</Text>
        )}
      </Pressable>
      <View style={styles.container}>
        <View style={styles.picker}>
          <Text>Race:</Text>
          <DropDownPicker
            open={raceOpen}
            value={raceValue}
            items={raceItems}
            setOpen={setRaceOpen}
            setValue={setRaceValue}
            setItems={setRaceItems}
            onOpen={onRaceOpen}
            onChangeValue={(value) => {
              console.log(value);
            }}
          />
        </View>
        <View style={styles.picker}>
          <Text>Class:</Text>
          <DropDownPicker
            open={classOpen}
            value={classValue}
            items={classItems}
            setOpen={setClassOpen}
            setValue={setClassValue}
            setItems={setClassItems}
            onOpen={onClassOpen}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.attributeBox}>
          <Text
            style={styles.attributeName}
            nativeID="strength"
            onPress={pressAttribute}
          >
            Strength
          </Text>
          <Text style={styles.attributeModifier}>
            {strengthMod >= 0 ? "+" + strengthMod : strengthMod}
          </Text>
          <Text style={styles.attributeNumber}>{strength}</Text>
        </View>
        <View style={styles.attributeBox}>
          <Text
            style={styles.attributeName}
            nativeID="dexterity"
            onPress={pressAttribute}
          >
            Dexterity
          </Text>
          <Text style={styles.attributeModifier}>
            {dexterityMod >= 0 ? "+" + dexterityMod : dexterityMod}
          </Text>
          <Text style={styles.attributeNumber}>{dexterity}</Text>
        </View>
        <View style={styles.attributeBox}>
          <Text
            style={styles.attributeName}
            nativeID="constitution"
            onPress={pressAttribute}
          >
            Constitution
          </Text>
          <Text style={styles.attributeModifier}>
            {constitutionMod >= 0 ? "+" + constitutionMod : constitutionMod}
          </Text>
          <Text style={styles.attributeNumber}>{constitution}</Text>
        </View>
        <View style={styles.attributeBox}>
          <Text
            style={styles.attributeName}
            nativeID="intelligence"
            onPress={pressAttribute}
          >
            Intelligence
          </Text>
          <Text style={styles.attributeModifier}>
            {intelligenceMod >= 0 ? "+" + intelligenceMod : intelligenceMod}
          </Text>
          <Text style={styles.attributeNumber}>{intelligence}</Text>
        </View>
        <View style={styles.attributeBox}>
          <Text
            style={styles.attributeName}
            nativeID="wisdom"
            onPress={pressAttribute}
          >
            Wisdom
          </Text>
          <Text style={styles.attributeModifier}>
            {wisdomMod >= 0 ? "+" + wisdomMod : wisdomMod}
          </Text>
          <Text style={styles.attributeNumber}>{wisdom}</Text>
        </View>
        <View style={styles.attributeBox}>
          <Text
            style={styles.attributeName}
            nativeID="charisma"
            onPress={pressAttribute}
          >
            Charisma
          </Text>
          <Text style={styles.attributeModifier}>
            {charismaMod >= 0 ? "+" + charismaMod : charismaMod}
          </Text>
          <Text style={styles.attributeNumber}>{charisma}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
  },
  picker: {
    flex: 1,
    flexDirection: "column",
    marginTop: 5,
  },
  textInput: {
    height: 40,
    width: 350,
    paddingLeft: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "center",
  },
  nameplateContainer: {
    marginTop: 40,
  },
  nameplate: {
    fontWeight: "bold",
  },
  attributeBox: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 15,
    backgroundColor: "white",
    width: Dimensions.get("window").width / 6 - 6,
    margin: 1,
    padding: 3,
    alignItems: "center",
    height: 70,
    borderWidth: 0.2,
    borderColor: "black",
  },
  attributeName: {
    fontSize: 7,
  },
  attributeModifier: {
    fontSize: 28,
  },
  attributeNumber: {
    fontSize: 14,
  },
});

export default CharacterSheet;
