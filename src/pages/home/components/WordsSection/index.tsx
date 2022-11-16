import { Word, WordLoading } from "@components/Word";
import { FavoritesWordsContext } from "@providers/wordsProvider";
import { useContext, useEffect, useState } from "react";
import { getAPI } from "utils/getApi";
import { WordsSection as WordsSectionWrapper } from "./styles";

export const WordsSection = (): JSX.Element => {
  const [words, setWords] = useState<string[]>([]);

  const { getAPIWord } = useContext(FavoritesWordsContext);

  const [numberPageAPI, setNumberPageAPI] = useState(1);

  useEffect(() => {
    const handleAPI = async () => {
      const response: any = await getAPI(
        `http://localhost:3004/words?_page=${numberPageAPI}`
      );

      setWords((prev) => [...prev, ...response.data]);
    };
    handleAPI();
  }, [numberPageAPI]);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setNumberPageAPI((current) => current + 1);
      }
    });

    const element = document.querySelector("#loading");

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <WordsSectionWrapper>
        {words?.map((word, index) => (
          <Word
            key={index}
            onClick={(el) => {
              getAPIWord(String(el.target.outerText), word.id);
            }}
          >
            {word.content}
          </Word>
        ))}

        {Array.from({ length: 4 }).map((el, index) => (
          <WordLoading key={index} />
        ))}
      </WordsSectionWrapper>

      <div id="loading"></div>
    </>
  );
};
