import CustomTopBar from "@/components/ui/CustomTopBar";
import StackTopBar from "@/components/ui/StackTopBar";
import { Stack } from "expo-router";

export default function CardsStack() {
  return (
    <Stack screenOptions={{ header: () => <CustomTopBar title={"cards"} /> }}>
      <Stack.Screen name="index" options={{ title: "cards" }} />
      <Stack.Screen
        name="viewPIN"
        options={{
          title: "View PIN",
          header: () => <StackTopBar title={"View PIN"} />,
        }}
      />
    </Stack>
  );
}
