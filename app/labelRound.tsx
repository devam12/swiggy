import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";
import AnimatedBorderLabel from "@/components/AnimatedBorderLabel";

export default function labelRound() {
  const styles = dynamicStyles(130, 50);
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Lottie
          source={require("../assets/json/animation.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
        <AnimatedBorderLabel minutes={6} showBolt={true} />
      </View>
    </View>
  );
}

const dynamicStyles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    labelContainer: {
      width: width - 16,
      height: height - 16,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    lottie: {
      width: width,
      height: height,
      position: "absolute",
    },
  });
