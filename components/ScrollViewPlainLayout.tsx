import * as React from "react";
import {
  Platform,
  RefreshControl,
  StyleProp,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";
import StickyHeader from "./StickyHeader";
import { useTheme } from "@react-navigation/native";
import AnimatedPlaceholderSearchBar from "./SearchBar";

const HeaderBreakpoint = 32;

interface ScrollViewPlainLayoutProps {
  SubHeaderComponent?: React.ReactNode;
  title?: string;
  subtitle?: string;
  loading?: boolean;
  HeaderRightComponent?: React.ReactNode;
  children?: React.ReactNode;
  onRefresh?: () => void;
  hideBack?: boolean;
  titleStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  keepSafe?: boolean;
  fullScreenScrollView?: boolean;
  alwaysShowBack?: boolean;
}

export const ScrollViewPlainLayout: React.FC<ScrollViewPlainLayoutProps> = ({
  SubHeaderComponent,
  title = "",
  subtitle = "",
  loading = false,
  HeaderRightComponent,
  children,
  onRefresh,
  hideBack = false,
  titleStyles,
  style,
  keepSafe = true,
  fullScreenScrollView = false,
  alwaysShowBack = false,
  ...props
}) => {
  const [scrolling, setScrolling] = React.useState(false);
  const insets = useSafeAreaInsets();
  const scrollRef = React.useRef<KeyboardAwareScrollView>(null);
  const theme = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);

  const refreshHandler = React.useCallback(() => {
    if (onRefresh) {
      setRefreshing(true);
      onRefresh();
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  }, [onRefresh]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (!scrolling && yOffset > HeaderBreakpoint) {
      setScrolling(true);
    } else if (scrolling && yOffset < HeaderBreakpoint) {
      setScrolling(false);
    }
  };

  return (
    <>
      {scrolling && (
        <StickyHeader
          title={title}
          SubHeaderComponent={SubHeaderComponent}
          hideBack={hideBack}
          keepSafe={keepSafe}
          alwaysShowBack={alwaysShowBack}
        />
      )}
      <KeyboardAwareScrollView
        ref={scrollRef}
        keyboardShouldPersistTaps="handled"
        onScroll={handleScroll}
        style={[
          {
            paddingBottom: insets.bottom,
            backgroundColor:
              Platform.OS === "ios"
                ? theme.colors.card
                : theme.colors.background,
          },
          style,
        ]}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshHandler}
            />
          ) : undefined
        }
      >
        {!fullScreenScrollView && (
          <Header
            scrolling={scrolling}
            title={title}
            subtitle={subtitle}
            hideBack={hideBack}
            titleStyle={titleStyles}
            HeaderRightComponent={HeaderRightComponent}
            keepSafe={keepSafe}
            alwaysShowBack={alwaysShowBack}
          />
        )}
        {SubHeaderComponent}
        {children}
      </KeyboardAwareScrollView>
    </>
  );
};

export default ScrollViewPlainLayout;
