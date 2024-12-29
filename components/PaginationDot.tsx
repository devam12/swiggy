import React from 'react';
import { StyleSheet, Animated } from 'react-native';

interface PaginationDotProps {
  active: boolean;
  animValue: Animated.Value;
}

export const PaginationDot: React.FC<PaginationDotProps> = ({ active, animValue }) => {
  const width = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [8, 32, 8],
  });

  const opacity = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        active && styles.activeDot,
        {
          width,
          opacity,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#111827',
  },
});