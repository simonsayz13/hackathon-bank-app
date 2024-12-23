import { Pressable, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
const PaymentTransfer = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Pay & transfer</Text>
        <Pressable
          style={styles.iconView}
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#11b67a",
        }}
      >
        <Image source={require("../assets/images/ltb-logo.webp")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
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

export default PaymentTransfer;
