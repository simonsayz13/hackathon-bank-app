import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { initializeSocket, sendMessageOnSocket } from "./helper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AppProvider } from "./appContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  // const [messages, setMessages] = useState([]);
  // // const socket = initializeSocket();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="paymentTransfer"
            options={{
              presentation: "modal", // Show as a modal
              headerShown: false, // Show header for the modal
              title: "Payments",
            }}
          />
          <Stack.Screen
            name="statements"
            options={{
              presentation: "modal", // Show as a modal
              headerShown: false, // Show header for the modal
              title: "Statements",
            }}
          />
        </Stack>
        <StatusBar style="dark" />
      </ThemeProvider>
    </AppProvider>
  );
}
