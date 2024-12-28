import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ViewStyle, StyleSheet, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

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

  // Effect to handle open and close based on `isOpen` prop
  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  const handleSheetChanges = (index: number) => {
    console.log("handleSheetChanges", index);
  };

  const randerBackDrop = useCallback((props: any) => {
    return (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      ></BottomSheetBackdrop>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          onDismiss={onDismiss}
          stackBehavior="push"
          snapPoints={snapPoints}
          index={initialSnapIndex}
          enableDismissOnClose={true}
          // backdropComponent={randerBackDrop}
        >
          <BottomSheetView style={[styles.contentContainer, containerStyle]}>
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomSheetComponent;
