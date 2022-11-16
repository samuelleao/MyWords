import { styled } from "@styles/stitches.config";

export const Text = styled("p", {
  color: "$gray50",
  lineHeight: "150%",
  "&:focus-visible": {
    outlineColor: "$gray50",
    color: "$gray50",
  },
  defaultVariants: {
    size: "sm",
    weight: "regular"
  },
  variants: {
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      base: {
        fontSize: "$base",
      },
      lg: {
        fontSize: "$lg",
      },
    },
    weight: {
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
  },
});
