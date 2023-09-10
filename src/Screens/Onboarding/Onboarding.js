import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {

  const navigation = useNavigation();

  const next = () => {
    navigation.navigate("Tab");
  }
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Its Ok Not To Be OKAY !!</Text>
      </View>

      <View style={styles.containerImage}>
        <Image source={require('../../../assets/images/Main.png')} className="w-2/4 h-2/4 flex items-start"/>
      </View>

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={{color: '#fff'}}>Let Us Help You</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AEAFF7",
  },
  containerText: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImage: {
    flex: 0.6,
  },
  text: {
    color:'#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  button: {
    padding: 20,
    backgroundColor: '#371B34',
    borderRadius: 10,
    position: 'absolute',
    top: '90%',
    left: '10%',
    alignItems: 'center',
    width: '80%'
  }
});
