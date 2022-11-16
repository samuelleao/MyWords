import * as ToastRadix from "@radix-ui/react-toast";
import { Box, Text, Button } from "@styles/index";
import { NotFoundWord } from "./styles";

interface ToastProps {
  title: string;
  description: string;
  duration?: number;
  control: any;
  setControl: any;
}

export const Toast = ({
  title,
  description,
  duration = 5000,
  control,
  setControl,
}: ToastProps) => {
  return (
    <ToastRadix.Provider duration={duration} swipeDirection="right">
      <ToastRadix.Root asChild open={control} onOpenChange={setControl}>
        <NotFoundWord>
          <Box css={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <ToastRadix.Title>
              <Text size="sm" weight="bold" css={{ color: "$gray50" }}>
                {title}
              </Text>
            </ToastRadix.Title>
            <ToastRadix.Description>
              <Text size="sm" css={{ color: "$gray400" }}>
                {description}
              </Text>
            </ToastRadix.Description>
          </Box>
          <ToastRadix.Action asChild altText="Goto schedule to undo">
            <Button type="grey" css={{ positon: "absolute", right: 0, top: 0 }}>
              Close
            </Button>
          </ToastRadix.Action>
        </NotFoundWord>
      </ToastRadix.Root>
      <ToastRadix.Viewport  style={{position: "fixed"}}/>
    </ToastRadix.Provider>
  );
};
