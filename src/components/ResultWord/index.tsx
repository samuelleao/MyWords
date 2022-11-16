import { Button, Text, Flex } from "@styles/index";

import {
  ResultWord as ResultWordWrapper,
  ResultWordBlockquote,
} from "./styles";

import { FaHeart, FaVolumeUp } from "react-icons/fa";
import { useContext, useRef } from "react";
import { FavoritesWordsContext } from "@providers/wordsProvider";
import { useEffect } from "react";

interface ResultWordProps {
  word: string;
  audio: string;
  text: string;
  type: string;
  id: any;
  phraseExample: string;
}

export const ResultWord = ({
  word,
  text,
  audio,
  type,
  id: identify,
  phraseExample,
}: ResultWordProps) => {
  const audioref = useRef<HTMLAudioElement>(null);

  const { isLiked, favoriteAdd, handleFavorites, removedWordsucess } = useContext(
    FavoritesWordsContext
  );

  const handleAudio = () => {
    audioref.current?.play();
  };

  useEffect(()=>{
    handleFavorites(identify);
  }, [isLiked, removedWordsucess])

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
            {word} - {identify}
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
            onClick={() => favoriteAdd(word, identify)}
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
