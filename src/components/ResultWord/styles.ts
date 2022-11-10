import { styled } from "@styles/stitches.config";

export const ResultWord = styled("section", {
  padding: "1.75rem 1.25rem",
  backgroundColor: "$gray800",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.5rem",
});

export const ResultWordBlockquote = styled("blockquote", {
  appearance: "none",
  padding: "0 1rem",
  backgroundColor: "$gray900",
  borderLeft: "0.188rem solid $brand900",
  height: "2.5rem",
  margin: 0,
  display: "flex",
  alignItems: "center",
});
