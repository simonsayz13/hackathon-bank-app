import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const FlashingBackground = ({ children }:{children:any}) => {
    const backgroundColor = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(backgroundColor, {
                    toValue: 1, // Transition to the second color
                    duration: 1000, // 1 second
                    useNativeDriver: false, // Required for color animations
                }),
                Animated.timing(backgroundColor, {
                    toValue: 0, // Transition back to the first color
                    duration: 1000, // 1 second
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [backgroundColor]);

    const interpolatedColor = backgroundColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['#ffcccc', '#ccffcc'], // Flash between light red and light green
    });

    return (
        <Animated.View style={[styles.flashingBackground, { backgroundColor: interpolatedColor }]}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    flashingBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FlashingBackground