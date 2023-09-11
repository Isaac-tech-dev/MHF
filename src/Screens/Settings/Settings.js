import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";

export default function Settings() {

  const navigation = useNavigation();

  const Out = () => {
    navigation.navigate("Welcome");
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text onPress={Out}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 22,
  },
});