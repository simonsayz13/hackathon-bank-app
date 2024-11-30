import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const ViewPIN = () => {
  const [shownClicked, setShownClicked] = useState<boolean>(false);
  const [showPIN, setShowPIN] = useState<boolean>(true);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {!shownClicked ? (
        <View style={styles.infoContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.infoImageContainer}>
              <MaterialCommunityIcons
                name="shield-half-full"
                size={150}
                color="#11b67a"
              />
            </View>
            <Text
              style={{ marginVertical: 6, fontSize: 20, fontWeight: "bold" }}
            >
              Protect your PIN in public
            </Text>
            <View style={{ marginTop: 16, marginHorizontal: 40 }}>
              <Text style={{ textAlign: "center" }}>
                When you show your PIN, it will appear on-screen for a few
                seconds. So make sure no-one else can see it.
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: 200 }}>
            <Pressable
              style={styles.shownButton}
              onPress={() => {
                setShownClicked(true);
              }}
            >
              <Text style={styles.buttonText}>Show PIN</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingBottom: 103,
          }}
        >
          <View>
            <View style={{ paddingVertical: 90, alignItems: "center" }}>
              <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                {showPIN ? "3333" : "****"}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Club Lloyds</Text>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>**** 1234</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Pressable
              style={styles.shownButton}
              onPress={() => {
                setShowPIN((prev) => !prev);
              }}
            >
              <Text style={styles.buttonText}>
                {showPIN ? "Hide PIN" : "Show PIN"}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoImageContainer: {},
  shownButton: {
    width: 340,
    margin: 18,
    height: 56,
    borderRadius: 14,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default ViewPIN;
