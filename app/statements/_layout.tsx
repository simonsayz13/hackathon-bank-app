import CustomTopBar from "@/components/ui/CustomTopBar";
import StackTopBar from "@/components/ui/StackTopBar";
import { Stack } from "expo-router";

export default function StatementsStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "statements" }} />
      <Stack.Screen name="viewer" />
    </Stack>
  );
}
