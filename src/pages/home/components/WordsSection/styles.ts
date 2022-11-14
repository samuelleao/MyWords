import { styled } from "@styles/stitches.config";

export const WordsSection = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
  padding: "2rem 0 4rem 0",
  "@bp1": { gridTemplateColumns: "repeat(2, 1fr)",}
});

