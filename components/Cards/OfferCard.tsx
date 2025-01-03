import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

interface OfferCardProps {
  title: string;
  subtitle: string;
  offer: string;
  image: string; // The image can be passed dynamically or as a static require
}

export function OfferCard({ title, subtitle, offer, image }: OfferCardProps) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={require("../../assets/images/food.png")}
        style={styles.image}
        resizeMode="cover"
      ></ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.offerContainer}>
          <Text style={styles.offer}>{offer}</Text>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2; // 48 = padding (16) * 2 + gap between cards (16)

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  offerContainer: {
    marginTop: 8,
    backgroundColor: "#FFE8E8",
    padding: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  offer: {
    color: "#FF4444",
    fontSize: 12,
    fontWeight: "600",
  },
});
