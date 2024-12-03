import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { useAppContext } from "@/app/appContext";
import { sendMessageOnSocket } from "@/app/helper";
const CustomTopBar = (props: any) => {
  const { sharedData } = useAppContext();
  const { title } = props;
  const insets = useSafeAreaInsets();
  const headertitle = title === "index" ? "Welcome Simon" : "Card management";
  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.title}>{headertitle}</Text>
      <View style={[styles.iconView, { paddingTop: insets.top }]}>
        <Pressable
          onPress={() => {
            Alert.alert(
              "Connect with Agent",
              "May we have your consent to securely access your app to help you better?",
              [
                { text: "No" },
                {
                  text: "Yes",
                  onPress: () => {
                    sendMessageOnSocket(sharedData.socket, "screen-start");
                  },
                },
              ]
            );
          }}
        >
          <Feather name="cast" size={24} color="black" />
        </Pressable>
        <FontAwesome6 name="user-large" size={24} color="black" />
      </View>
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
  },
  backButton: {
    position: "absolute",
    left: 10,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
  },
  iconView: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    gap: 20,
  },
});

export default CustomTopBar;
