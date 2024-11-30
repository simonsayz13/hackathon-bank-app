import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Feather from "@expo/vector-icons/Feather";

const StackTopBar = (props: any) => {
  const { title } = props;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Pressable
        style={[styles.backIconView, { paddingTop: insets.top }]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={26} color="black" />
      </Pressable>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {title === "Club Lloyds" && (
        <View style={[styles.rightIcon, { paddingTop: insets.top }]}>
          <SimpleLineIcons name="question" size={24} color="black" />
          <Feather name="more-horizontal" size={24} color="black" />
        </View>
      )}
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
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  backIconView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    position: "absolute",
    left: 10,
    gap: 20,
  },
  rightIcon: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    gap: 20,
  },
});

export default StackTopBar;
