import { styled } from "@styles/stitches.config";

export const Input = styled("input", {
  height: "2.5rem",
  paddingLeft: "0.875rem",
  borderWidth: "0.063rem",
  borderStyle: "solid",
  borderColor: "$gray700",
  borderRadius: "$1",
  backgroundColor: "$gray800",
  outlineWidth: "0.063rem",
  color: "$gray500",
  fontSize: "$base",
  "&:hover": {
    backgroundColor: "$gray700",
  },
  "&:focus-visible": {
    outlineColor: "$gray50",
    color: "$gray50",
  },
});
