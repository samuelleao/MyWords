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
  const [isLiked, setIsLiked] = useState();
  const [identify, setIdentify] = useState<number>();
  const [favorites, setFavorites] = useState<APIFavoritesType[]>([]);
  const [removedWordsucess, setRemovedWordSucess] = useState(false);
  const [sucesssAddFavorite, setSucesssAddFavorite] = useState(false);

  const [wordCurrent, setWordCurrent] = useState<dataAPI>({
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
      const response = await getAPI<any>(`http://localhost:3004/wordsFavorites/${id}`);

      const dataJson = response.data
      setIdentify(id);

      if(dataJson.length == 0){
        setIsLiked(false);
      }else{
        setIsLiked(true);
      }
     
    } catch (error) {
      setIsLiked(false);
      console.log("entrou");
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
      setSucesssAddFavorite(true)
    } catch (error) {
      setSucesssAddFavorite(false)
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
      setRemovedWordSucess(true);
      getFavorites();
    } catch (error) {
      setRemovedWordSucess(false);
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

      setWordCurrent({
        word: word,
        text: text?.text,
        audio: audio?.audio,
        type: partOfSpeech,
        phraseExample: definition,
        id: id,
      });
      window.scrollTo(0, 0);
      setError(false);
      handleFavorites(id);
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
        removedWordsucess,
        setRemovedWordSucess,
        favoriteRemove,
        getFavorites,
        getAPIWord,
        error,
        setError,
        wordCurrent,
        sucesssAddFavorite, setSucesssAddFavorite
      }}
    >
      {children}
    </FavoritesWordsContext.Provider>
  );
};

export default FavoritesWordsProvider;
