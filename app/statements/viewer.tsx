import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Viewer = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.iconView}
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <Feather name="chevron-left" size={28} color="black" />
        </Pressable>
        <Text style={styles.title}>December 2024</Text>
        <View style={{ position: "absolute", right: 10 }}>
          <Entypo name="share-alternative" size={24} color="black" />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FontAwesome6 name="file-pdf" size={48} color="black" />
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
  backButton: {
    position: "absolute",
  },
  backText: {
    color: "#fff",
    fontSize: 16,
  },
  iconView: {
    position: "absolute",
    left: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
});

export default Viewer;
