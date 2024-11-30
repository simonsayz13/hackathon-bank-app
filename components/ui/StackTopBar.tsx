import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
const StackTopBar = (props: any) => {
  const { title } = props;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Pressable
        style={styles.iconView}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={26} color="black" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.6,
    position: "relative",
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: "auto",
    left: -10,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    position: "relative",
    gap: 20,
  },
});

export default StackTopBar;
