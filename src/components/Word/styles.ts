import { styled } from "@styles/stitches.config";

export const Word = styled("button", {
  appearance: "none",
  height: "2.5rem",
  backgroundColor: "$gray700",
  overflow: "hidden",
  color: "$gray300",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$1",
  border: 0,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$gray600",
    color: "$gray50",
  },
  "&:focus-visible": {
    outlineColor: "$gray50",
    color: "$gray50",
  },
});
