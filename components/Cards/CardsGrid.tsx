import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RenewalBanner } from "./RenewalBanner";
import { ServiceCard } from "./ServiceCard";
import { CreditCardBanner } from "./CreditCardBanner";

const CardsGrid = () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <RenewalBanner />

      <View style={styles.grid}>
        <ServiceCard
          title="FOOD DELIVERY"
          subtitle="GET READY TO PARTY"
          offer="FLAT ₹175 OFF & FREE DEL"
          image={require("../../assets/images/splash.png")}
        />

        <ServiceCard
          title="INSTAMART"
          subtitle="NEW YEAR CELEBRATIONS"
          offer="EXTRA ₹100 OFF"
          image={require("../../assets/images/splash.png")}
          timer="6 MINS"
        />
      </View>

      <View style={styles.grid}>
        <ServiceCard
          title="DINEOUT"
          subtitle="YEAR END FIESTA"
          offer="UP TO 50% OFF"
          image={require("../../assets/images/splash.png")}
        />

        <ServiceCard
          title="GENIE"
          subtitle="SEND PARCELS"
          offer=""
          image={require("../../assets/images/splash.png")}
        />
      </View>

      <View style={styles.grid}>
        <ServiceCard
          title="SCENES"
          subtitle="NYE PARTIES"
          offer="NEW"
          image={require("../../assets/images/splash.png")}
        />
      </View>

      <CreditCardBanner />
    </View>
  );
};

export default CardsGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  grid: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
});
