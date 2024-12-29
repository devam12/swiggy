import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  LayoutChangeEvent,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface LoadingLabelProps {
  minutes: number;
}

export const LoadingLabel: React.FC<LoadingLabelProps> = ({ minutes }) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the animation loop for the gradient
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000, // Duration for one full loop of the gradient animation
        useNativeDriver: true,
      })
    ).start();
  }, [animation]);

  // Interpolate animation to move the gradient
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-100%", "100%"], // Moves the gradient from left to right
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setLabelWidth(width); // Set the width of the label dynamically
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View
        style={styles.contentContainer}
        onLayout={handleLayout} // Measure label width
      >
        <Text style={styles.icon}>⚡</Text>
        <Text style={styles.minutes}>{minutes}</Text>
        <Text style={styles.label}>MINS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  contentContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    zIndex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  icon: {
    fontSize: 14,
    color: "#FFB800",
    marginRight: 4,
  },
  minutes: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: "#666666",
    marginLeft: 2,
  },
  borderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 2,
    // borderColor: "transparent", // Border color itself is transparent
  },
  animatedGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
  },
  gradient: {
    flex: 1,
    width: "200%", // Ensures the gradient is wide enough to animate
  },
});
