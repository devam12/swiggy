import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Shrink animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      // Slide up animation
      Animated.timing(translateAnim, {
        toValue: -height,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onFinish(); // Call when animation finishes
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              { scale: scaleAnim },
              { translateY: translateAnim },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.contentContainer,
          { opacity: scaleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }) 
          },
        ]}
      >
        <Text style={styles.text}>Your App Name</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6200EA",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: width * 2,
    height: height * 2,
    borderRadius: width,
    backgroundColor: "#6200EA",
    position: "absolute",
  },
  contentContainer: {
    position: "absolute",
    top: height / 2 - 20,
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
