import { Tabs, useNavigation } from "expo-router";
import React from "react";
import { Platform, Pressable } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
// import FlashingBackground from "@/components/FlashingBackground";

export default function TabLayout() {
  const navigation = useNavigation();
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="apply"
        options={{
          headerShown: false,
          title: "Apply",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={24}
              name="pencil.and.list.clipboard"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bank-transfer"
              size={30}
              color={color}
            />
          ),
          tabBarButton: (props) => {
            return (
              <Pressable
                {...props}
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate("paymentTransfer"); // Navigate to the modal
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color }) => (
            // <FlashingBackground>
            <AntDesign name="creditcard" size={24} color={color} />
            // </FlashingBackground>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
