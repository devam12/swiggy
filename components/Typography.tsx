import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { useTheme } from "@react-navigation/native";

type TextProps = NativeTextProps & {
  children: React.ReactNode;
  color?: string;
  fontWeight?: string;
  size?: number;
  lineHeight?: number;
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";
  style?: any;
};

export const FontWeight = {
    XXT: "100",
    XT: "300",
    THIN: "400",
    MEDIUM: "500",
    BOLD: "600",
    XB: "700",
    XXB: "900",
  };

export const Text: React.FC<TextProps> = ({
  children,
  color,
  fontWeight,
  size = 14,
  style,
  lineHeight,
  transform,
  ...props
}) => {
  const theme = useTheme();
  const fontSize = size*8;
  const fontColor = color || theme.colors.text;
  // const lineHeightCalculated = lineHeight || StyleUtility.sizing(size * 1.2);

  return (
    <NativeText
      {...props}
      style={[
        {
          color: fontColor,
          fontWeight,
          fontSize,
          textTransform: transform,
        },
        style,
      ]}
      allowFontScaling={false}
    >
      {children}
    </NativeText>
  );
};

type AdditionalTextProps = Omit<TextProps, "fontWeight">;

export const ExtraSmall: React.FC<AdditionalTextProps> = (props) => {
  return <Text fontWeight={FontWeight.XT} {...props} />;
};

export const Small: React.FC<AdditionalTextProps> = (props) => {
  return <Text fontWeight={FontWeight.THIN} {...props} />;
};

export const Medium: React.FC<AdditionalTextProps> = (props) => {
  return <Text fontWeight={FontWeight.MEDIUM} {...props} />;
};

export const Bold: React.FC<AdditionalTextProps> = ({ style, ...props }) => {
  return <Text style={style} fontWeight={FontWeight.XB} {...props} />;
};

export const ExtraBold: React.FC<AdditionalTextProps> = (props) => {
  return <Text fontWeight={FontWeight.XXB} {...props} />;
};

export const Typography = {
  ExtraSmall,
  Small,
  Default: Text,
  Medium,
  Bold,
  ExtraBold,
};

export default Typography;
