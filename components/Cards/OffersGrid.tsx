import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { OfferCard } from "./OfferCard";

const offerData = [
  {
    id: "1",
    title: "Food Delivery",
    subtitle: "GET READY TO PARTY",
    offer: "FLAT ₹175 OFF & FREE DEL",
    image: "../../assets//images/background-food.png",
  },
  {
    id: "2",
    title: "Fresh Meals",
    subtitle: "HEALTHY & DELICIOUS",
    offer: "50% OFF ON FIRST ORDER",
    image: "../../assets//images/background-food.png", // Replace with your image URL
  },
  {
    id: "3",
    title: "Quick Bites",
    subtitle: "SNACKS & MORE",
    offer: "BUY 1 GET 1 FREE",
    image: "../../assets//images/background-food.png",
  },
  {
    id: "4",
    title: "Premium Dining",
    subtitle: "LUXURY EXPERIENCE",
    offer: "30% OFF ON WEEKENDS",
    image: "../../assets//images/background-food.png",
  },
];

export function OffersGrid() {
  return (
    // <ScrollView style={styles.container}>
    <View style={styles.grid}>
      {offerData.map((offer) => (
        <View key={offer.id} style={styles.cardWrapper}>
          <OfferCard
            title={offer.title}
            subtitle={offer.subtitle}
            offer={offer.offer}
            image={offer.image}
          />
        </View>
      ))}
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 16,
  },
  cardWrapper: {
    marginBottom: 16,
  },
});
