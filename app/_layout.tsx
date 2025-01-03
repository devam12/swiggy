import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  useEffect(() => {
    prepareApp();
  }, []);

  const prepareApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn("Error preparing app: ", error);
    }
  };

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
