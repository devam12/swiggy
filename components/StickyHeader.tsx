import * as React from "react";
import { Animated, Platform, Text, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import {
  CommonActions,
  useNavigation,
  useTheme,
  NavigationProp,
} from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Typography } from "../components/Typography";
import AnimatedPlaceholderSearchBar from "./SearchBar";

interface StickyHeaderProps {
  title: string;
  SubHeaderComponent?: React.ReactNode;
  hideBack?: boolean;
  keepSafe?: boolean;
  alwaysShowBack?: boolean;
  translation?: Animated.Value | number;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({
  title,
  SubHeaderComponent,
  hideBack = false,
  keepSafe = true,
  alwaysShowBack = false,
  translation = 0,
}) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();

  const containerStyle: ViewStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 111,
    transform: [{ translateY: translation }],
  };

  const blurViewStyle: ViewStyle = {
    flexDirection: "row",
    paddingTop: keepSafe ? insets.top + 16 : 0,
    paddingBottom: 24,
    backgroundColor: theme.colors.background,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 1,
    padding: 0,
  };

  return (
    <Animated.View style={containerStyle}>
      <BlurView intensity={2000} style={blurViewStyle}>
        {SubHeaderComponent}
      </BlurView>
    </Animated.View>
  );
};

export default StickyHeader;
