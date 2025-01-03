import React, { useState } from "react";
import { View, FlatList, StyleSheet, Dimensions, Image } from "react-native";
import PaginationIndicator from "./PaginationIndicator";

const { width } = Dimensions.get("window");
const DATA = ["", "", "", ""];
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
            <Image
              source={require("../assets/images/food.png")}
              style={styles.image}
              resizeMode="cover"
            />
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
    marginTop: 20,
  },
  image: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: 250,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AnimatedPagination;
