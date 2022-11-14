import { styled } from "@styles/stitches.config";

export const FavoritesWordsListWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  marginTop: "1rem",
  maxHeight: "20rem",
  overflowY: "auto",
  marginInline: "-1rem",
  overflowX: "hidden",
});

export const FavoritesWordsListItem = styled("button", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "4rem",
  paddingInline: "1rem",
  borderBottom: "1px solid $gray700",
  "&:focus-visible": {
    backgroundColor: "$gray700",
    outlineColor: "$gray50",
    color: "$gray50",
  },
  "&:hover": {
    backgroundColor: "$gray700",
    cursor: "pointer"
  }
});
