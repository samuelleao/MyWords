import { createStitches, ScaleValue } from "@stitches/react";
import { Inter } from "@next/font/google";

const inter = Inter();

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      brand900: "#4338CA",
      brand800: "#4F46E5",
      gray900: "#131316",
      gray800: "#1F1F22",
      gray700: "#29292E",
      gray600: "#3A3A40",
      gray500: "#71717A",
      gray400: "#A1A1AA",
      gray300: "#D4D4D8",
      gray200: "#E4E4E7",
      gray100: "#F4F4F5",
      gray50: "#FAFAFA",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
    },
    fontWeights: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    radii: {
      1: "0.25rem",
    },
  },
  utils: {
    mx: (value: ScaleValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: ScaleValue<"margin">) => ({
      marginTop: value,
    }),
    mb: (value: ScaleValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<"margin">) => ({
      marginLeft: value,
    }),
    mr: (value: ScaleValue<"margin">) => ({
      marginRight: value,
    }),
  },
});

export const GlobalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: inter.style.fontFamily,
  },
});
