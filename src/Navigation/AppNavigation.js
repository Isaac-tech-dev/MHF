import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Onboarding/Welcome";
import Splash from "../Screens/Onboarding/Splash";
import Onboarding from "../Screens/Onboarding/Onboarding";
import Home from "../Screens/Home/Home";
import Sound from "../Screens/Sound/Sound";
import Community from "../Screens/Community/Community";
import Settings from "../Screens/Settings/Settings";

//ICONS
import { Foundation, Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="home"
              color={focused ? "#371B34" : "#CDD0E3"}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={Sound}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="music"
              color={focused ? "#371B34" : "#CDD0E3"}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Coummunity"
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="people"
              color={focused ? "#371B34" : "#CDD0E3"}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              color={focused ? "#371B34" : "#CDD0E3"}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={Onboarding}
        />
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false }}
          component={TabNav}
        />
        {/* <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
