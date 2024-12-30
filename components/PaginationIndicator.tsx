import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const PaginationIndicator = ({ currentPage, totalPages }: any) => {
  const animatedSizes = Array.from({ length: totalPages }).map(() => ({
    width: useSharedValue(10),
    height: useSharedValue(10),
    borderRadius: useSharedValue(50),
  }));

  useEffect(() => {
    animatedSizes.forEach((dot, index) => {
      if (index === currentPage) {
        dot.width.value = withTiming(45, { duration: 300 });
        dot.height.value = withTiming(30, { duration: 300 });
        dot.borderRadius.value = withTiming(25, { duration: 300 });
      } else if (Math.abs(index - currentPage) === 1) {
        dot.width.value = withTiming(15, { duration: 300 });
        dot.height.value = withTiming(15, { duration: 300 });
        dot.borderRadius.value = withTiming(50, { duration: 300 });
      } else {
        dot.width.value = withTiming(10, { duration: 300 });
        dot.height.value = withTiming(10, { duration: 300 });
        dot.borderRadius.value = withTiming(50, { duration: 300 });
      }
    });
  }, [currentPage, animatedSizes]);

  const getDotStyle = (index: number) =>
    useAnimatedStyle(() => ({
      width: animatedSizes[index].width.value,
      height: animatedSizes[index].height.value,
      borderRadius: animatedSizes[index].borderRadius.value,
      backgroundColor: index === currentPage ? "#000" : "#D3D3D3", 
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
