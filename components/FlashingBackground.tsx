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
      borderWidth: 2, // Border width around the children
    };
  });
  const inAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: "transparent",
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
