import { styled } from "@styles/stitches.config";

export const Button = styled("button", {
  color: "$gray50",
  paddingInline: "0.875rem",
  fontWeight: "$medium",
  borderRadius: "$1",
  borderWidth: "0.063rem",
  borderStyle: "solid",
  cursor: "pointer",
  "&:focus-visible": {
    outlineColor: "$gray50",
    color: "$gray50",
  },
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
      brand: {
        backgroundColor: "$brand900",
        borderColor: "$brand900",
        "&:hover": {
          backgroundColor: "$brand800",
          borderColor: "$brand800",
        },
      },
    },
    isLiked: {
      true: {
        backgroundColor: "$like700",
        color: "$gray50"
      }
    },
    like: {
      true: {
        backgroundColor: "$like900",
        color: "$gray50", 
        "&:hover": {
          backgroundColor: "$like800",
        }
      }
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
    withIcon: {
      true: {
        display: "flex",
        alignItems: "center",
        gap: "0.875rem",
      },
    },
  },
});
