import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.containerText}>
        <Image source={require('../../../assets/Icons/Hamburger.png')}/>
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "300", fontSize: 15, marginBottom: 10 }}>
              Let’s open up to the thing that matters amoung the people{" "}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ color: "#EF5DA8", fontWeight: "700", fontSize: 20 }}
              >
                Join Now
              </Text>
              <Image
                source={require("../../../assets/Icons/play.png")}
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../../../assets/Icons/Meetup.png")} />
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "rgba(240, 158, 84, 0.3)",
          height: 157,
          width: "100%",
          borderRadius: 20,
          marginBottom: 40,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "400" }}>Meditation</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "300", fontSize: 15, marginBottom: 10 }}>
              Aura is the most important thing that matters to you.join us on
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ color: "#F09A59", fontWeight: "700", fontSize: 20 }}
              >
                06:00 PM
              </Text>
              <Image
                source={require("../../../assets/Icons/Time.png")}
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../../../assets/Icons/Meditation.png")} />
          </View>
        </View>
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
