import { styled } from "@styles/stitches.config";

import { ComponentProps, keyframes } from "@stitches/react";
import { ReactNode } from "react";
import { Word as WordWrapper } from "./styles";
import { Text } from "@styles/index";

interface ResultWordProps extends ComponentProps<typeof WordWrapper> {
  children: ReactNode;
}

export const Word = ({ children, ...rest }: ResultWordProps): JSX.Element => {
  return (
    <WordWrapper {...rest}>
      <Text weight="medium">{children}</Text>
    </WordWrapper>
  );
};

const loadingEffect = keyframes({
  '0%': { 
    left: "-50%"
   },
   '50%': { 
    left: "50%"
   },
   '100%': { 
    left: "100%"
   },
});

export const WordLoading = styled(WordWrapper, {
  position: "relative",
  "&:before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "-50%",
    inset: 0,
    background: "linear-gradient(90deg, rgba(31, 31, 34, 0) 0%, #1F1F22 51.05%, rgba(31, 31, 34, 0) 99.01%)",
    animation: `${loadingEffect} 2s linear infinite`,
  }
})


