import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Dimensions } from "react-native";
import PaginationIndicator from "./PaginationIndicator";

const { width } = Dimensions.get("window");

const DATA = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
const totalPages = DATA.length;

const AnimatedPagination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
      <PaginationIndicator currentPage={currentIndex} totalPages={totalPages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: 250, // Adjust height as needed
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AnimatedPagination;
