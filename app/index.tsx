import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AnimatedPlaceholderSearchBar from "./../components/SearchBar";
import BottomSheetComponent from "@/components/BottomSheet";
import React, { useState } from "react";
import ScrollViewPlainLayout from "@/components/ScrollViewPlainLayout";
import CardsGrid from "@/components/Cards/CardsGrid";
import AnimatedPagination from "@/components/AnimatedPagination";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onRefresh = () => {
    setIsOpen(true);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
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
          <CardsGrid />
          <AnimatedPagination></AnimatedPagination>
          <BottomSheetComponent
            isOpen={isOpen}
            initialSnapIndex={2}
            onDismiss={() => {
              setIsOpen(false);
            }}
          >
            <Image
              source={require("../assets/images/food.png")}
              style={styles.image}
              resizeMode="cover"
            />

            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              style={styles.closeIconBottomSheet}
            >
              <AntDesign
                name="closecircle"
                size={36}
                color="white"
                // style={styles.closeIconBottomSheet}
                onPress={() => setIsOpen(false)}
              />
            </TouchableOpacity>
          </BottomSheetComponent>
        </ScrollViewPlainLayout>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  closeIconBottomSheet: {
    position: "absolute",
    borderRadius: 20,
    right: 20,
    zIndex: 1,
    top: 25,
  },
});
