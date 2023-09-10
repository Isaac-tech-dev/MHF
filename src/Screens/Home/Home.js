import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerText}>
        <AntDesign name="menu-fold" size={24} color="black" />
        <Text>Hello</Text>
      </View>
      <Text style={styles.text}>
        <Text style={styles.textLight}>Welcome back,</Text> Sarina!
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 20 }}>
        How are you feeling today ?
      </Text>

      <View style={styles.containerSlide}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#EF5DA8",
              width: 69.58,
              height: 72.95,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Image source={require("../../../assets/Icons/Happy.png")} />
          </View>
          <Text>Happy</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#AEAFF7",
              width: 69.58,
              height: 72.95,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Image source={require("../../../assets/Icons/Calm.png")} />
          </View>
          <Text>Calm</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#F09E54",
              width: 69.58,
              height: 72.95,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Image source={require("../../../assets/Icons/Relax.png")} />
          </View>
          <Text>Relax</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#A0E3E2",
              width: 69.58,
              height: 72.95,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Image source={require("../../../assets/Icons/Focus.png")} />
          </View>
          <Text>Focus</Text>
        </View>
      </View>

      <Text style={{ fontSize: 22, fontWeight: "200", marginBottom: 20 }}>
        Today’s Task
      </Text>

      <View
        style={{
          backgroundColor: "#FCDDEC",
          height: 157,
          width: "100%",
          borderRadius: 20,
          marginBottom: 40,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "400" }}>
          Peer Group Meetup
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: 1 }}>
            <Text>
              Let’s open up to the thing that matters amoung the people{" "}
            </Text>
            <Text>Peer Group Meetup</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../../../assets/Icons/Meetup.png")} />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#F09E54",
          height: 157,
          width: "100%",
          borderRadius: 20,
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
    fontSize: 22,
    fontWeight: "700",
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
