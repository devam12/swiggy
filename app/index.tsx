import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from "react-native";
import AnimatedPlaceholderSearchBar from "../components/SearchBar";
import ScrollViewPlainLayout from "@/components/ScrollViewPlainLayout";
import CardsGrid from "@/components/Cards/CardsGrid";
import AnimatedPagination from "@/components/AnimatedPagination";
import BottomSheetComponent from "@/components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import CombinedAnimation from "@/components/CombinedAnimation";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onRefresh = () => setIsOpen(true);

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const prepareApp = async () => {
      try {
        setShowComponent(true);
        await setTimeout(() => {
          Animated.timing(slideAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }, 2000);
      } catch (error) {
        console.error("Error during splash screen animation:", error);
      }
    };

    prepareApp();
  }, [slideAnimation]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -1000],
                  }),
                },
              ],
            },
          ]}
        >
          <CombinedAnimation
            onComplete={() => setIsSplashVisible(false)}
          ></CombinedAnimation>
        </Animated.View>
        {showComponent && (
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
            <AnimatedPagination />
            <BottomSheetComponent
              isOpen={isOpen}
              initialSnapIndex={2}
              onDismiss={() => setIsOpen(false)}
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
                <AntDesign name="closecircle" size={36} color="white" />
              </TouchableOpacity>
            </BottomSheetComponent>
          </ScrollViewPlainLayout>
        )}
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
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

  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  animatedView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  splashImage: {
    width: "100%",
    height: "100%",
  },
});
