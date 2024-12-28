import { Link } from "expo-router";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import AnimatedPlaceholderSearchBar from "./../components/SearchBar";
import BottomSheetComponent from "@/components/BottomSheet";
import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setIsOpen(true);
    }, 1500);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <AnimatedPlaceholderSearchBar />
      <Link href="/check">Check</Link>

      <BottomSheetComponent isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <Text>Awesome 🎉</Text>
      </BottomSheetComponent>
    </ScrollView>
  );
}
