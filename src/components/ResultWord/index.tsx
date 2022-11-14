import { Button, Text, Flex } from "@styles/index";
import { uuid } from "uuidv4";

import {
  ResultWord as ResultWordWrapper,
  ResultWordBlockquote,
} from "./styles";

import { FaHeart, FaVolumeUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { getAPI, postAPI } from "utils/getApi";

interface ResultWordProps {
  world: string;
  audio: string;
  text: string;
  type: string;
  id: any;
  phraseExample: string;
}

export const ResultWord = ({
  world,
  text,
  audio,
  type,
  id: identify,
  phraseExample,
}: ResultWordProps) => {
  const audioref = useRef<HTMLAudioElement>(null);

  const [isLiked, setIsLiked] = useState(false);

  const handleAudio = () => {
    audioref.current?.play();
  };

  const handleFavorites = async (id: number) => {
    try {
      const response = await getAPI<any>(
        `http://localhost:3004/wordsFavorites/${id}`
      );
      setIsLiked(true);
    } catch (error) {
      setIsLiked(false);
      throw (error as Error).message;
    }
  };

  const favoriteAdd = async (content: string, id: any) => {
    try {
      await postAPI<any>(`http://localhost:3004/wordsFavorites`, {
        id: Number(id),
        content: content,
      });
      handleFavorites(identify);
    } catch (error) {
      throw (error as Error).message;
    }
  };

  handleFavorites(identify);

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
          <Button
            like={true}
            isLiked={isLiked}
            aria-label="Like"
            onClick={() => favoriteAdd(world, identify)}
          >
            <FaHeart />
          </Button>

          {audio && (
            <Button aria-label="Hear" onClick={handleAudio}>
              <FaVolumeUp />
            </Button>
          )}
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
