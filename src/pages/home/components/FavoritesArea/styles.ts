import { styled } from "@styles/stitches.config";

export const FavoritesWordsListWrapper = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  marginTop: "1rem",
  height: "20rem",
  overflowY: "auto",
  marginInline: "-1rem",
  overflowX: "hidden",
});

export const FavoritesWordsListItem = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "4rem",
  paddingInline: "1rem",
  borderBottom: "1px solid $gray700",
});
