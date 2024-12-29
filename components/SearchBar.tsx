import React, { useState, useEffect, useRef } from "react";
import { TextInput, View, StyleSheet, Animated } from "react-native";
import { Divider, Text } from "react-native-paper";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
FontAwesome;

interface SearchBarProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const AnimatedPlaceholderSearchBar = ({
  inputValue = "",
  setInputValue,
}: SearchBarProps) => {
  const items = ['"books"', '"clothes"', '"gadgets"', '"furniture"'];
  const [currentItem, setCurrentItem] = useState(items[0]);
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
        <View style={styles.icon}>
          <AntDesign name="search1" size={20} color="black" />
          <Divider
            horizontalInset={true}
            style={{ borderColor: "gray", borderWidth: 0.5, height: "auto" }}
          />
          <FontAwesome name="microphone" size={24} color="orange" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
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
  icon: {
    marginLeft: 10,
    flexDirection: "row",
    marginRight: 10,
  },
});

export default AnimatedPlaceholderSearchBar;
