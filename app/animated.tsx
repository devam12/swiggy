import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const diameter = Math.min(width, height);

const AnimatedComponennt = () => {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -height / 2 + diameter / 2,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imageWrapper,
          {
            opacity,
            transform: [{ scale }, { translateY }],
            width: diameter,
            height: diameter,
            borderRadius: diameter / 2,
          },
        ]}
      >
        <Image
          source={require("../assets/images/EntryImage.png")}
          style={styles.image}
        />
      </Animated.View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "absolute", // Allow free movement
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AnimatedComponennt;
