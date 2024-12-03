import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import FlashingBackground from "@/components/FlashingBackground";
import { useAppContext } from "@/app/appContext";
const Home = () => {
  const navigation = useNavigation();

  const { sharedData } = useAppContext();

  console.log(sharedData);
  return (
    <View style={styles.container}>
      <View>
        <Text>{sharedData.message.componentId}</Text>
        <ScrollView
          style={[styles.scrollViewContainer]}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.buttonContainer, { backgroundColor: "black" }]}>
            <Text style={[styles.buttonText, { color: "white" }]}>Summary</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Everyday</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save & invest</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Borrow</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <FlashingBackground>
          <Pressable
            style={styles.accountView}
            onPress={() => {
              navigation.navigate("accountDetail");
            }}
          >
            <View style={styles.accountContainer}>
              <View style={styles.productDetailContainer}>
                <Text style={styles.productNameText}>Club lloyds</Text>
                <Text style={styles.productDetailsText}>
                  66-66-66 / 12341234
                </Text>
              </View>
              <View>
                <Text style={styles.balanceText}>£520.33</Text>
              </View>
            </View>
            <View style={styles.productActionView}>
              <Text style={{ fontSize: 14, fontWeight: 400 }}>
                Your overdraft options
              </Text>
              <AntDesign name="arrowright" size={20} color="black" />
            </View>
          </Pressable>
        </FlashingBackground>
        <View style={styles.accountView}>
          <View style={[styles.accountContainer, { borderRadius: 8 }]}>
            <View style={styles.productDetailContainer}>
              <Text style={styles.productNameText}>
                Club Lloyds Monthly Saver
              </Text>
              <Text style={styles.productDetailsText}>66-66-66 / 12341234</Text>
            </View>
            <View>
              <Text style={styles.balanceText}>£120.10</Text>
            </View>
          </View>
        </View>
        <View style={styles.accountView}>
          <View style={[styles.accountContainer, { borderRadius: 8 }]}>
            <View style={styles.productDetailContainer}>
              <Text style={styles.productNameText}>
                Club Lloyds Advantage ISA Saver
              </Text>
              <Text style={styles.productDetailsText}>66-66-66 / 11111111</Text>
            </View>
            <View>
              <Text style={styles.balanceText}>£7,429.10</Text>
            </View>
          </View>
        </View>

        <View style={styles.accountView}>
          <View style={[styles.accountContainer, { borderRadius: 8 }]}>
            <View
              style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../assets/images/scottish-widow-logo.webp")}
                  style={styles.image}
                />
              </View>
              <View style={styles.productDetailContainer}>
                <Text style={styles.productNameText}>Personal Pension</Text>
                <Text style={styles.productDetailsText}>42312423</Text>
              </View>
            </View>
            <View>
              <Text style={styles.balanceText}>£1,234.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollViewContainer: { padding: 10 },
  buttonContainer: {
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    width: 100,
    alignItems: "center",
    marginRight: 8,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
  },
  accountContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "white",
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productDetailContainer: { gap: 2 },
  productNameText: {
    width: 180,
    fontWeight: 600,
    fontSize: 16,
  },
  productDetailsText: {
    color: "grey",
    fontSize: 14,
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 600,
  },
  productActionView: {
    borderTopColor: "black",
    borderTopWidth: 0.2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  accountView: {
    marginBottom: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  image: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    width: 26,
    height: 26,
  },
});

export default Home;
