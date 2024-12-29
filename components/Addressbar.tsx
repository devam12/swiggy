import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface AddressBarProps {
  location?: string;
  onLocationPress?: () => void;
}

export function AddressBar({
  location = "B510, Galleria, Hiranandani Gardens,...",
  onLocationPress,
}: AddressBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.workText}>Work</Text>
        <TouchableOpacity onPress={onLocationPress}>
          <Text style={styles.locationText} numberOfLines={1}>
            {location}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>one</Text>
        </View>
        <Ionicons name="person-circle" size={40} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // backgroundColor: "#ffffff",
    
  },
  leftSection: {
    flex: 1,
  },
  workText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 14,
    color: "#666666",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  badge: {
    backgroundColor: "#FFF1E8",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  badgeText: {
    color: "#FF5722",
    fontSize: 14,
    fontWeight: "500",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
});
