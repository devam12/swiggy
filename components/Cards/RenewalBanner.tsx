import React from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const RenewalBanner = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Debashis, your one expires soon!</Text>
        <Text style={styles.subtitle}>
          You've saved ₹1,351 with current plan. Renew now & keep saving
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/animated")}
      >
        <Text style={styles.buttonText}>Renew</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F3FF",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#5D3FD3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
