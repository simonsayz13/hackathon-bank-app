import { Pressable, ScrollView, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FlashingBackground from "@/components/FlashingBackground";
const Statements = () => {
  const navigation = useNavigation();
  const months = [
    "December",
    "November",
    "October",
    "September",
    "August",
    "July",
    "June",
    "May",
    "April",
    "March",
    "February",
    "January",
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Download or print statements</Text>
        <Pressable
          style={styles.iconView}
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#006a4d",
              paddingVertical: 16,
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginBottom: 4,
              }}
            >
              <Ionicons name="document-outline" size={30} color="white" />
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                Do it online, get it faster
              </Text>
            </View>
            <View
              style={{
                marginVertical: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>
                Whether you need to prove who you are, your address or your
                income, the quickest way could be to download a summary of your
                transactions. You can then save, email or print it from your
                device.
              </Text>
            </View>
            <View
              style={{
                marginVertical: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>
                If you need a full statement, it can be found and downloaded
                from your digital inbox. If you need further help you can chat
                with us.
              </Text>
            </View>
          </View>
          <View>
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
                2024
              </Text>
            </View>
            <View style={{ paddingLeft: 12, paddingBottom: 12 }}>
              {months.map((month) => (
                <FlashingBackground key={month} disabled={month !== "December"}>
                  <Pressable
                    style={{
                      paddingVertical: 12,
                      borderBottomColor: "grey",
                      borderBottomWidth: 0.18,
                    }}
                    onPress={() => {
                      navigation.navigate("viewer");
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                      {month}
                    </Text>
                  </Pressable>
                </FlashingBackground>
              ))}
            </View>
          </View>
        </ScrollView>
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
    // position: "relative",
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

export default Statements;
