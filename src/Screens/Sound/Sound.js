import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Sound() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.containerText}>
        <Image source={require("../../../assets/Icons/Down.png")} />
        <Image source={require("../../../assets/Icons/Playlist.png")} />
      </View>
      <Text style={styles.text}>Calming Playlist</Text>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={require("../../../assets/images/Illustration.png")} />
      </View>
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Text style={{fontWeight: '400', fontSize: 35}}>Rain On Glass</Text>
        <Text style={{fontWeight: '200', fontSize: 16}}>By: Painting with Passion</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../../assets/Icons/Player.png")}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 22,
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  text: {
    color: "#2a2a2a",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 40,
  },
  textLight: {
    color: "#2a2a2a",
    fontSize: 22,
    fontWeight: "300",
  },
  containerSlide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
