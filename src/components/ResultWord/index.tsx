import { Button, Text, Flex } from "@styles/index";

import {
  ResultWord as ResultWordWrapper,
  ResultWordBlockquote,
} from "./styles";

import { FaHeart, FaVolumeUp } from "react-icons/fa";
import { useRef } from "react";

interface ResultWordProps {
  world: string;
  audio: string;
  text: string;
  type: string;
  phraseExample: string;
}

export const ResultWord = ({
  world,
  text,
  audio,
  type,
  phraseExample,
}: ResultWordProps) => {
  const audioref = useRef<HTMLAudioElement>(null);

  const handleAudio = () => {
    audioref.current?.play();
  };

  return (
    <ResultWordWrapper>
      <Flex justify="between">
        <Flex
          align="center"
          css={{
            gap: "1rem",
          }}
        >
          <Text size="lg" weight="semibold">
            {world}
          </Text>
          <Text>{text}</Text>
        </Flex>

        <Flex
          align="center"
          css={{
            gap: "0.5rem",
          }}
        >
          <Button aria-label="Like">
            <FaHeart />
          </Button>
          <Button aria-label="Hear" onClick={handleAudio}>
            <FaVolumeUp />
          </Button>
        </Flex>
      </Flex>
      <Text
        css={{
          color: "$gray400",
        }}
      >
        {type}
      </Text>
      <ResultWordBlockquote>
        <Text
          css={{
            color: "$gray400",
          }}
        >
          {phraseExample}
        </Text>
      </ResultWordBlockquote>
      <audio ref={audioref} src={audio}></audio>
    </ResultWordWrapper>
  );
};
