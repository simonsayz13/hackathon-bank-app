import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "expo-router";
import FlashingBackground from "@/components/FlashingBackground";
import { useAppContext } from "@/app/appContext";
import { sendMessageOnSocket } from "@/app/helper";

const Cards = () => {
  const navigation = useNavigation();
  const { sharedData } = useAppContext();
  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.cardScrollViewContainer}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View style={styles.cardContainer}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  LLOYDS BANK
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 20 }}>*** 1234</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 12 }}>12/27</Text>
                  <Text style={{ fontSize: 12 }}>MR SIMON TAN</Text>
                </View>
                <FontAwesome5 name="cc-visa" size={28} color="black" />
              </View>
            </View>
            <View style={styles.cardTypeContainer}>
              <Text>Club Lloyds</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            margin: 18,
            height: 40,
            borderRadius: 10,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Apple Pay
          </Text>
        </View>
        <View style={styles.actionsContainer}>
          <Pressable style={styles.actionView}>
            <View style={styles.actionIcon}>
              <FontAwesome name="vcard" size={24} color="black" />
            </View>
            <Text style={styles.actionLabelText}>Card details</Text>
          </Pressable>
          {sharedData.message.componentId === "btn-view-pin" ? (
            <FlashingBackground
              enabled={sharedData.message.componentId === "btn-view-pin"}
            >
              <Pressable
                style={styles.actionView}
                onPress={() => {
                  navigation.navigate("viewPIN");
                  sendMessageOnSocket(sharedData.socket, "screen-view-pin");
                }}
              >
                <View style={styles.actionIcon}>
                  <Feather name="eye" size={30} color="black" />
                </View>
                <Text style={styles.actionLabelText}>View PIN</Text>
              </Pressable>
            </FlashingBackground>
          ) : (
            <View style={{ padding: 7 }}>
              <Pressable
                style={styles.actionView}
                onPress={() => {
                  navigation.navigate("viewPIN");
                  sendMessageOnSocket(sharedData.socket, "screen-view-pin");
                }}
              >
                <View style={styles.actionIcon}>
                  <Feather name="eye" size={30} color="black" />
                </View>
                <Text style={styles.actionLabelText}>View PIN</Text>
              </Pressable>
            </View>
          )}
          <Pressable style={styles.actionView}>
            <View style={styles.actionIcon}>
              <MaterialCommunityIcons
                name="credit-card-refresh"
                size={30}
                color="black"
              />
            </View>
            <Text style={styles.actionLabelText}>Replace Card</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardScrollViewContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "#11b67a",
    width: 260,
    height: 160,
    borderRadius: 12,
    padding: 8,
    justifyContent: "space-between",
  },
  cardTypeContainer: {
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionView: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  actionIcon: {
    borderRadius: 30,
    borderWidth: 3,
    width: 60,
    height: 60,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  actionLabelText: {
    fontSize: 11,
  },
});

export default Cards;
