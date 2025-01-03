import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AnimatedBorderLabelProps {
  minutes: number;
  showBolt?: boolean;
}

export function AnimatedBorderLabel({
  minutes = 6,
  showBolt = true,
}: AnimatedBorderLabelProps) {
  return (
    <View style={styles.container}>
      {showBolt && <Text style={styles.bolt}>⚡</Text>}
      <Text style={styles.minutes}>{minutes}</Text>
      <Text style={styles.label}>MINS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
  },

  bolt: {
    fontSize: 14,
    color: "#FF6B6B",
    marginRight: 4,
  },
  minutes: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
});

export default AnimatedBorderLabel;
