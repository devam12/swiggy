import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="animated" options={{ headerShown: false }} />
      <Stack.Screen name="circle" options={{ headerShown: false }} /> */}
      <Stack.Screen name="merge" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
