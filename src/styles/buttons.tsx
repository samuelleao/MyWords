import { styled } from "@styles/stitches.config";

export const Button = styled("button", {
  color: "$gray50",
  paddingInline: "0.875rem",
  fontWeight: "$medium",
  borderRadius: "$1",
  borderWidth: "0.063rem",
  borderStyle: "solid",
  defaultVariants: {
    type: "grey",
    size: "base",
  },
  variants: {
    type: {
      grey: {
        backgroundColor: "$gray700",
        borderColor: "$gray700",
        "&:hover": {
          backgroundColor: "$gray600",
          borderColor: "$gray600",
        },
      },
    },
    size: {
      base: {
        height: "2rem",
        fontSize: "$xs",
      },
      lg: {
        height: "2.5rem",
        fontSize: "$sm",
      },
    },
  },
});
