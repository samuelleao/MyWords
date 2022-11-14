import { createContext, ReactNode, useState } from "react";
import { deleteAPI, getAPI, postAPI } from "utils/getApi";

export const FavoritesWordsContext = createContext<any>(null);

interface FavoritesWordsProviderProps {
  children: ReactNode;
}

interface APIFavoritesType {
  content: string;
  id: number;
}

interface dataAPI {
  word: string;
  text: string;
  audio: string;
  type: string;
  phraseExample: string;
  id: any;
}

const FavoritesWordsProvider = ({ children }: FavoritesWordsProviderProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [identify, setIdentify] = useState<number>(0);
  const [favorites, setFavorites] = useState<APIFavoritesType[]>([]);
  const [sucess, setSucess] = useState(false);

  const [word, setWord] = useState<dataAPI>({
    word: "",
    text: "",
    audio: "",
    type: "",
    phraseExample: "",
    id: "",
  });

  const [error, setError] = useState(false);

  const handleFavorites = async (id: number) => {
    try {
      await getAPI<any>(`http://localhost:3004/wordsFavorites/${id}`);
      setIsLiked(true);
      setIdentify(id);
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

  const getFavorites = async () => {
    try {
      const response = await getAPI<any>(
        `http://localhost:3004/wordsFavorites`
      );
      setFavorites(response.data);
    } catch (error) {
      throw (error as Error).message;
    }
  };

  const favoriteRemove = async (id: number) => {
    try {
      await deleteAPI<any>(`http://localhost:3004/wordsFavorites/${id}`);
      setSucess(true);
      getFavorites();
    } catch (error) {
      setSucess(false);
      throw (error as Error).message;
    }
  };

  const getAPIWord = async (wordWriter: string, id: any = null) => {
    if (id == null) {
      id = Date.now() + Math.random();
    }

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
        id: id,
      });
      window.scrollTo(0, 0);
      setError(false);
    } catch (error) {
      setError(true);
      throw (error as Error).message;
    }

    return null;
  };

  return (
    <FavoritesWordsContext.Provider
      value={{
        isLiked,
        handleFavorites,
        favoriteAdd,
        favorites,
        sucess,
        favoriteRemove,
        getFavorites,
        getAPIWord,
        error,
        setError,
        word,
        
      }}
    >
      {children}
    </FavoritesWordsContext.Provider>
  );
};

export default FavoritesWordsProvider;