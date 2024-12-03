import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "expo-router";
import FlashingBackground from "@/components/FlashingBackground";
const { width } = Dimensions.get("window");

const CreditPaymentIcon = () => (
  <View
    style={{
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#11b67a",
        height: 36,
        width: 1,
      }}
    />
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "grey",
      }}
    >
      <AntDesign name="download" size={24} color="black" />
    </View>
  </View>
);
const accountDetail = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.balanceContainer}>
        <View style={styles.balanceView}>
          <Text style={styles.balanceText}>£520.12</Text>
          <Text style={styles.balanceDescription}>
            Balance aftering pending
          </Text>
        </View>
        <View style={styles.balanceView}>
          <Text style={styles.balanceText}>£100.00</Text>
          <Text style={styles.balanceDescription}>Overdraft limit</Text>
        </View>
      </View>
      <View style={styles.overdraftOptionsButtonContainer}>
        <Text style={{ color: "white", fontSize: 16 }}>
          Your overdraft options
        </Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </View>
      <View style={styles.monthSelectionContainer}>
        <View style={styles.monthButtonView}>
          <Text style={styles.monthText}>November</Text>
        </View>
        <View
          style={[
            styles.monthButtonView,
            { borderBottomColor: "black", borderBottomWidth: 2 },
          ]}
        >
          <Text style={styles.monthText}>All</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.actionButtonContainer}>
            <Text>In</Text>
          </View>
          <View style={styles.actionButtonContainer}>
            <Text>Out</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <FlashingBackground>
            <Pressable
              onPress={() => {
                navigation.navigate("statements");
              }}
            >
              <Ionicons name="document-outline" size={30} color="black" />
            </Pressable>
          </FlashingBackground>
          <AntDesign name="search1" size={28} color="black" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ backgroundColor: "white" }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "grey",
              }}
            >
              <Text style={{ padding: 14 }}>Wed 25 November</Text>
            </View>
            <View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <CreditPaymentIcon />
                  <Text style={{ fontWeight: 600, fontSize: 16 }}>
                    NICKY LAI
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "#006a4d",
                        fontSize: 17,
                        fontWeight: "bold",
                      }}
                    >
                      + £250.50
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        alignSelf: "flex-end",
                        fontSize: 12,
                      }}
                    >
                      £770.62
                    </Text>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    padding: 20,
  },
  balanceView: {
    width: "50%",
  },
  balanceText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  balanceDescription: {
    fontSize: 12,
  },
  overdraftOptionsButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#006a4d",
    width: width,
    padding: 10,
  },
  monthSelectionContainer: {
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    flexDirection: "row",
  },
  monthButtonView: {
    alignItems: "center",
    width: "33%",
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  monthText: { fontSize: 15, fontWeight: 500 },
  actionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "white",
    marginBottom: 8,
  },
  actionButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 10,
    width: 70,
    alignItems: "center",
  },
});

export default accountDetail;
