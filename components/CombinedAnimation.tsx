import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const { width, height } = Dimensions.get("window");
const diameter = Math.min(width, height);

const CombinedAnimation = ({ onComplete }: any) => {
  const [showFirstAnimation, setShowFirstAnimation] = useState(true);

  const circleOpacity = useRef(new Animated.Value(1)).current;
  const circleScale = useRef(new Animated.Value(1)).current;
  const circleTranslateY = useRef(new Animated.Value(0)).current;

  const locationCircleScale = useRef(new Animated.Value(1)).current;
  const locationOuterCircleScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (showFirstAnimation) {
      Animated.parallel([
        Animated.timing(circleOpacity, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(circleScale, {
          toValue: 0.0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(circleTranslateY, {
          toValue: -height / 2 + diameter / 2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => setShowFirstAnimation(false));
    } else {
      Animated.parallel([
        Animated.timing(locationCircleScale, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(locationOuterCircleScale, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onComplete();
      });
    }
  }, [showFirstAnimation]);

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../assets/images/map.png")}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageOpacity}
      > */}
      {showFirstAnimation ? (
        // CircleAnimation
        <Animated.View
          style={[
            styles.circleWrapper,
            {
              opacity: circleOpacity,
              transform: [
                { scale: circleScale },
                { translateY: circleTranslateY },
              ],
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
      ) : (
        <View style={styles.locationContent}>
          <View style={styles.iconContainer}>
            <Animated.View
              style={[
                styles.outCircle,
                { transform: [{ scale: locationOuterCircleScale }] },
              ]}
            >
              <Animated.View
                style={[
                  styles.innerCircle,
                  { transform: [{ scale: locationCircleScale }] },
                ]}
              ></Animated.View>
            </Animated.View>

            <MaterialIcons
              name="location-pin"
              size={32}
              color="black"
              style={{ position: "absolute", zIndex: 2, top: 60, right: 75 }}
            />
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
      )}
      {/* </ImageBackground> */}
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
  // backgroundImage: {
  // flex: 1,
  // width: "100%",
  // height: "100%",
  // justifyContent: "center",
  // alignItems: "center",
  // borderRadius: "50%",
  // },
  // backgroundImageOpacity: {
  //   opacity: 0.7,
  // },
  circleWrapper: {
    position: "absolute",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  locationContent: {
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 60,
  },
  innerCircle: {
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

export default CombinedAnimation;
