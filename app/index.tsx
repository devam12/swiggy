import { Link } from "expo-router";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import AnimatedPlaceholderSearchBar from "./../components/SearchBar";
import BottomSheetComponent from "@/components/BottomSheet";
import { useState } from "react";
import ScrollViewPlainLayout from "@/components/ScrollViewPlainLayout";
import CardsGrid from "@/components/Cards/CardsGrid";
import { LoadingLabel } from "@/components/loadingLabel";
import AnimatedPagination from "@/components/AnimatedPagination";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onRefresh = () => {
    setIsOpen(true);
  };

  return (
    <ScrollViewPlainLayout
      onRefresh={onRefresh}
      title="Hello"
      SubHeaderComponent={
        <AnimatedPlaceholderSearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      }
      keepSafe={true}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          height: "100%",
        }}
      >
        <AnimatedPagination ></AnimatedPagination>
        <LoadingLabel minutes={6}></LoadingLabel>
        <CardsGrid />
      </View>
    </ScrollViewPlainLayout>
  );
}
