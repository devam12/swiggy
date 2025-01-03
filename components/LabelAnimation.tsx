import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Lottie from "lottie-react-native";
import AnimatedBorderLabel from "@/components/AnimatedBorderLabel";

export default function LabelAnimation() {
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const styles = dynamicStyles(130, 50);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {animationVisible && (
          <Lottie
            source={require("../assets/json/animation.json")}
            autoPlay
            onAnimationFinish={() => setAnimationVisible(false)}
            speed={0.5}
            loop={false}
            style={styles.lottie}
          />
        )}
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
      backgroundColor: "white",
      borderRadius: 20,
    },
    lottie: {
      width: width,
      height: height,
      position: "absolute",
    },
  });
