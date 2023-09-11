import { View, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
//import { setItem } from "../../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

export default function Welcome() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Onboarding");
    //setItem("onboarded", "1");
  };
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../../../assets/images/strength.png")}
                  autoPlay
                  loop
                />
                <Image source={require("../../../assets/images/strength.png")} style={styles.image}/>
              </View>
            ),
            title: "Discover Your Inner Strength",
            subtitle:
              "Unearth the resilience within you as you embark on a journey towards better mental health. Our app will guide you in discovering your inner strength and building emotional resilience through mindful practices and expert guidance.",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../../../assets/images/emotional.png")}
                  autoPlay
                  loop
                />
                <Image source={require("../../../assets/images/Mind.png")} style={styles.image}/>
              </View>
            ),
            title: "Your Path to Emotional Wellness",
            subtitle:
              "Welcome to a transformative experience that leads you on a path to emotional wellness. With our app, you'll gain access to a wide range of tools and resources designed to help you navigate life's challenges, reduce stress, and nurture your emotional well-being.",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../../../assets/images/mental.png")}
                  autoPlay
                  loop
                />
                <Image source={require("../../../assets/images/mental.png")} style={styles.image}/>
              </View>
            ),
            title: "Embrace Mental Fitness",
            subtitle:
              "Embrace the concept of mental fitness and take control of your emotional health. Our app empowers you to proactively improve your mental well-being through exercises, meditation, and a supportive community. Start your journey towards a healthier mind today.",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  image: {
    width: width * 0.9,
    height: width,
  }
});
