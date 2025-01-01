import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const { width } = Dimensions.get("window");

export const LocationAnimation = () => {
  const circleScale = new Animated.Value(1);
  const outCircleScale = new Animated.Value(1);

  useEffect(() => {
    // Animated.loop(
    Animated.parallel([
      Animated.timing(circleScale, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),

      Animated.timing(outCircleScale, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    // ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Animated.View
            style={[
              styles.outCircle,
              { transform: [{ scale: outCircleScale }] },
            ]}
          >
            <Animated.View
              style={[styles.circle, { transform: [{ scale: circleScale }] }]}
            >
              <MaterialIcons name="location-pin" size={32} color="black" />
            </Animated.View>
          </Animated.View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.deliveringText}>DELIVERING TO</Text>
          <View style={styles.addressContainer}>
            <FontAwesome6 name="location-dot" size={24} color="#FF4500" />
            <Text style={styles.number}>4</Text>
          </View>
          <Text style={styles.address}>
            Vejalpur, Ahmedabad, Gujarat, India
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    width: width * 0.8,
  },
  iconContainer: {
    marginBottom: 60,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFF0E6",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  outCircle: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: "#E8E8E8",
    // backgroundColor: "trasperent",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  textContainer: {
    alignItems: "center",
  },
  deliveringText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    letterSpacing: 1,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  number: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 8,
  },
  address: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});

export default LocationAnimation;
