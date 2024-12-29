import * as React from "react";
import { View, StyleProp, ViewStyle, TextStyle, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import {
  CommonActions,
  useNavigation,
  useTheme,
  NavigationProp,
} from "@react-navigation/native";

import { Typography } from "../components/Typography";
import { AddressBar } from "./Addressbar";

interface HeaderProps {
  title?: string;
  titleStyle?: StyleProp<ViewStyle | TextStyle>;
  subtitle?: string;
  HeaderRightComponent?: React.ReactNode;
  hideBack?: boolean;
  keepSafe?: boolean;
  alwaysShowBack?: boolean;
  scrolling?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  titleStyle,
  subtitle,
  HeaderRightComponent,
  hideBack,
  keepSafe = true,
  alwaysShowBack = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          paddingHorizontal: 8,
          justifyContent: "space-between",
          paddingTop: keepSafe ? insets.top + 2 : 48,
          paddingBottom: 8,
        }}
      >
        <AddressBar></AddressBar>
        {HeaderRightComponent}
      </View>
    </>
  );
};

export default Header;
