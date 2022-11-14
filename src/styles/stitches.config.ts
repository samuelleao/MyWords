import { createStitches, ScaleValue } from "@stitches/react";
import { Inter } from "@next/font/google";

const inter = Inter();

export const { styled, globalCss, getCssText, css } = createStitches({
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
      like900: "#2C0818",
      like800: "#581030",
      like700: "#BE185D",
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
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    scrollBehavior: "smooth"
  },
  body: {
    fontFamily: inter.style.fontFamily,
  },
});

export const Container = styled("div", {
  width: "42rem",
  maxWidth: "100%",
  paddingInline: "1rem",
  marginInline: "auto",
});

export const Box = styled("div", {});
export const Flex = styled("div", {
  display: "flex",
  variants: {
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "flex-center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
  },
});
