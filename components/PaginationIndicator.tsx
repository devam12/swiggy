import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const PaginationIndicator = ({ currentPage, totalPages }: any) => {
  // Array to hold the animated width and height for each page
  const animatedSizes = Array.from({ length: totalPages }).map(() => ({
    width: useSharedValue(10),
    height: useSharedValue(10),
    borderRadius: useSharedValue(50),
  }));

  useEffect(() => {
    // Loop through all pages and adjust the size of the dots based on the current page
    animatedSizes.forEach((dot, index) => {
      if (index === currentPage) {
        // Current page gets larger
        dot.width.value = withTiming(45, { duration: 300 });
        dot.height.value = withTiming(30, { duration: 300 });
        dot.borderRadius.value = withTiming(25, { duration: 300 });
      } else if (Math.abs(index - currentPage) === 1) {
        // Adjacent pages get a medium size
        dot.width.value = withTiming(15, { duration: 300 });
        dot.height.value = withTiming(15, { duration: 300 });
        dot.borderRadius.value = withTiming(50, { duration: 300 });
      } else {
        // Other pages remain small
        dot.width.value = withTiming(10, { duration: 300 });
        dot.height.value = withTiming(10, { duration: 300 });
        dot.borderRadius.value = withTiming(50, { duration: 300 });
      }
    });
  }, [currentPage, animatedSizes]);

  // Animated style for each dot
  const getDotStyle = (index: number) =>
    useAnimatedStyle(() => ({
      width: animatedSizes[index].width.value,
      height: animatedSizes[index].height.value,
      borderRadius: animatedSizes[index].borderRadius.value,
      backgroundColor: index === currentPage ? "#000" : "#D3D3D3", // Active color vs inactive color
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
    }));

  return (
    <View style={styles.container}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Animated.View key={index} style={getDotStyle(index)}>
          {index === currentPage && (
            <Text style={styles.paginationText}>
              {`${currentPage + 1}/${totalPages}`}
            </Text>
          )}
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});

export default PaginationIndicator;
