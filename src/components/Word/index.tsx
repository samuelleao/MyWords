import { ComponentProps } from "@stitches/react";
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
