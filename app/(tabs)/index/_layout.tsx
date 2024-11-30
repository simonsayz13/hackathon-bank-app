import CustomTopBar from "@/components/ui/CustomTopBar";
import StackTopBar from "@/components/ui/StackTopBar";
import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ header: () => <CustomTopBar title={"index"} /> }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="accountDetail"
        options={{
          title: "Club Lloyds",
          header: () => <StackTopBar title={"Club Lloyds"} />,
        }}
      />
    </Stack>
  );
}
