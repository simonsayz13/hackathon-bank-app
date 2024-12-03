import { useAppContext } from "@/app/appContext";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";

const FlashingBorder = ({
  children,
  enabled,
}: {
  children: any;
  enabled?: boolean;
}) => {
  const borderAnimation = useSharedValue(0);
  const { sharedData } = useAppContext();

  useEffect(() => {
    // Start infinite loop animation for the border
    borderAnimation.value = withRepeat(
      withTiming(1, { duration: 1000 }), // Duration of one cycle
      -1, // Repeat indefinitely
      true // Reverse the animation
    );
  }, [borderAnimation]);

  // Animated style for the border
  const animatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      borderAnimation.value,
      [0, 1],
      ["transparent", "#ff0000"] // Flash between white and red
    );
    return {
      borderColor,
      padding:
        sharedData.message.componentId !== ("tab-card" || "btn-show-pin")
          ? 5
          : 0,
      height: sharedData.message.componentId === "tab-card" ? 40 : undefined,
      width: sharedData.message.componentId === "tab-card" ? 40 : undefined,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2, // Border width around the children,
      borderRadius: 10,
    };
  });
  const inAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: "transparent",
      padding: 0,
      borderWidth: 0, // Border width around the children
    };
  });

  return (
    <Animated.View style={[enabled ? animatedStyle : inAnimatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default FlashingBorder;
