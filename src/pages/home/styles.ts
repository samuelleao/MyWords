import { styled } from "@styles/stitches.config";

export const HomeMain = styled("main", {
  backgroundColor: "$gray900",
  minHeight: "100vh",
});

export const HomeHeader = styled("main", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "2.75rem",
});

export const HomeFormSearch = styled("div", {
  display: "flex",
  gap: "1rem",
  padding: "2rem 0",
  "@bp1": { flexDirection: "column"}
});