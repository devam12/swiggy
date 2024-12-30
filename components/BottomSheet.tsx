import React, { useEffect, useMemo, useRef } from "react";
import { ViewStyle, StyleSheet } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

export interface BottomSheetProps {
  children: React.ReactNode;
  initialSnapIndex?: number;
  containerStyle?: ViewStyle;
  isOpen: boolean;
  onDismiss?: () => void;
}

const BottomSheetComponent = ({
  children,
  initialSnapIndex = 2,
  containerStyle,
  isOpen,
  onDismiss,
}: BottomSheetProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      onDismiss={onDismiss}
      stackBehavior="push"
      snapPoints={snapPoints}
      index={initialSnapIndex}
      enableDismissOnClose={true}
      handleIndicatorStyle={{ display: "none" }}
    >
      <BottomSheetView style={[styles.contentContainer, containerStyle]}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    // flex:1
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomSheetComponent;
