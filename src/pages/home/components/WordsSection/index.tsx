import { Word, WordLoading } from "@components/Word";
import { useEffect, useState } from "react";
import { getAPI } from "utils/getApi";
import { WordsSection as WordsSectionWrapper } from "./styles";

interface WordsSectionProps {
  handleAPIProps: any;
}

export const WordsSection = ({ handleAPIProps }: WordsSectionProps): JSX.Element => {
  const [words, setWords] = useState<string[]>([]);

  const [numberPageAPI, setNumberPageAPI] = useState(1);

  const handleAPI = async (numberAPI: number) => {
    const response: any = await getAPI(
      `https://random-word-api.herokuapp.com/word?number=${numberAPI}&req=${numberPageAPI}&lang=en`
    );

    setWords((current) => current?.concat(response.data));
  };

  useEffect(() => {
    handleAPI(40);
  }, []);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        handleAPI(4);
        setNumberPageAPI((current) => current + 1);
      }
    });

    const element = document.querySelector("#loading");
    
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <WordsSectionWrapper>
      {words?.map((word, index) => (
        <Word
          key={index}
          onClick={(el) => {
            handleAPIProps(String(el.target.outerText));
          }}
        >
          {word}
        </Word>
      ))}

      {Array.from({ length: 4 }).map((el, index) => (
        <WordLoading key={index} />
      ))}

      <div id="loading"></div>
    </WordsSectionWrapper>
  );
};
