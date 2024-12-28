import React, { useState, useEffect, useRef } from "react";
import { TextInput, View, StyleSheet, Animated } from "react-native";

export const AnimatedPlaceholderSearchBar = () => {
  const items = ['"books"', '"clothes"', '"gadgets"', '"furniture"'];
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (inputValue || isFocused) return;

    const interval = setInterval(() => {
      Animated.timing(translateY, {
        toValue: -20,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentItem((prevItem) => {
          const currentIndex = items.indexOf(prevItem);
          return items[(currentIndex + 1) % items.length];
        });

        translateY.setValue(20);
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [translateY, inputValue, isFocused]);

  useEffect(() => {
    if (!inputValue && !isFocused) {
      translateY.setValue(20);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [inputValue, isFocused, translateY]);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Search for"
          placeholderTextColor="#999"
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            if (text) setIsFocused(true);
            else setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (!inputValue) setIsFocused(false);
          }}
        />
        {!inputValue && !isFocused && (
          <Animated.Text
            style={[styles.dynamicText, { transform: [{ translateY }] }]}
          >
            {currentItem}
          </Animated.Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: 300,
    height: 50,
    position: "relative",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  dynamicText: {
    position: "absolute",
    left: 95,
    fontSize: 16,
    color: "#999",
  },
});

export default AnimatedPlaceholderSearchBar;
