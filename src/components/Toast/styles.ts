import { Toast } from "@components/Toast";
import { keyframes } from "@stitches/react";
import { styled } from "@styles/stitches.config";

const ToastEffect = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

export const NotFoundWord = styled("ol", {
  appearance: "none",
  position: "fixed",
  top: "1rem",
  right: "1rem",
  backgroundColor: "var(--colors-gray800)",
  padding: "1rem",
  borderRadius: "var(--radii-1)",
  listStyle: "none",
  display: "flex",
  gap: "0.4rem",
  width: "25rem",
  justifyContent: "space-between",
  "&[data-state='open']": {
    animation: `${ToastEffect} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});
