import { StyleSheet, View, Text, Image } from "react-native";

const Apply = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#11b67a",
      }}
    >
      <Image source={require("../../assets/images/ltb-logo.webp")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Apply;
