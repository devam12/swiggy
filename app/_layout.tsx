import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  animatedView: {
    width: "100%",
    height: "100%",
  },
  splashImage: {
    width: "100%",
    height: "100%",
  },
});
