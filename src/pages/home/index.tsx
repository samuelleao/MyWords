import Head from "next/head";
import { Container, Input, Button, Text, Box } from "@styles/index";
import * as Dialog from "@radix-ui/react-dialog";

import { HomeMain, HomeHeader, HomeFormSearch } from "./styles";

import { FaHeart } from "react-icons/fa";
import { ResultWord } from "@components/ResultWord";
import { WordsSection } from "./components/WordsSection";
import { useEffect, useRef, useState } from "react";
import { getAPI } from "utils/getApi";
import { Toast } from "@components/Toast";
import {
  DialogDescription,
  Modal,
  ModalHeader,
  ModalOverlay,
} from "@styles/modal";

interface dataAPI {
  word: string;
  text: string;
  audio: string;
  type: string;
  phraseExample: string;
}

export default function Home() {
  const [word, setWord] = useState<dataAPI>({
    word: "",
    text: "",
    audio: "",
    type: "",
    phraseExample: "",
  });

  const [error, setError] = useState(false);

  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleAPI = async (wordWriter: string) => {
    try {
      const response = await getAPI<any>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordWriter}`
      );

      const responseJson = response.data[0];
      const { word, phonetics, meanings } = responseJson;
      const { partOfSpeech, definitions } = meanings[0];
      const { definition } = definitions[0];
      const [text, audio] = phonetics;

      setWord({
        word: word,
        text: text?.text,
        audio: audio?.audio,
        type: partOfSpeech,
        phraseExample: definition,
      });

      window.scrollTo(0, 0);
      setError(false);
    } catch (error) {
      setError(true);
      throw (error as Error).message;
    }

    return null;
  };

  useEffect(() => {
    handleAPI("word");
  }, []);

  return (
    <>
      <Head>
        <title>My Words</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain>
        <Container>
          <Toast
            control={error}
            setControl={setError}
            title="Ops! Word not found"
            description="Can't find that word in our database"
          />

          <HomeHeader>
            <Text size="lg" weight="semibold">
              MyWords
            </Text>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button withIcon type="grey">
                  <FaHeart />
                  Favorites
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <ModalOverlay />
                <Modal>
                  <ModalHeader>
                    <Dialog.Title asChild>
                      <Text>Favorites</Text>
                    </Dialog.Title>
                    <DialogDescription>
                      Here are your favorites words
                    </DialogDescription>
                    <Dialog.Close asChild>
                      <Button type="grey">X</Button>
                    </Dialog.Close>
                  </ModalHeader>
                </Modal>
              </Dialog.Portal>
            </Dialog.Root>
          </HomeHeader>
          <HomeFormSearch>
            <Input
              placeholder="Type the word here..."
              css={{ width: "85%" }}
              ref={inputSearchRef}
            />
            <Button
              size="lg"
              type="brand"
              css={{ width: "15%" }}
              onClick={() => handleAPI(inputSearchRef?.current.value)}
            >
              Search
            </Button>
          </HomeFormSearch>
          <ResultWord
            world={word?.word}
            text={word?.text}
            audio={word?.audio}
            type={word?.type}
            phraseExample={word?.phraseExample}
          />
          <WordsSection handleAPIProps={handleAPI} />
        </Container>
      </HomeMain>
    </>
  );
}
