import { Button, Text } from "@styles/index";
import * as Dialog from "@radix-ui/react-dialog";

import { FavoritesWordsListItem, FavoritesWordsListWrapper } from "./styles";

import { FaHeart, FaTrash } from "react-icons/fa";

import {
  DialogDescription,
  Modal,
  ModalHeader,
  ModalOverlay,
} from "@styles/modal";
import { useContext } from "react";

import { Toast } from "@components/Toast";
import { FavoritesWordsContext } from "@providers/wordsProvider";

interface APIType {
  content: string;
  id: number;
}

export const FavoritesArea = (): JSX.Element => {
  const {
    getFavorites,
    sucess,
    favorites,
    setSucess,
    favoriteRemove,
    getAPIWord,
  } = useContext(FavoritesWordsContext);

  return (
    <>
      <Toast
        control={sucess}
        setControl={setSucess}
        title="Yes! Word Removed"
        description="Your favorite word was removed with sucess"
      />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button onClick={getFavorites} withIcon type="grey">
            <FaHeart />
            Favorites
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <ModalOverlay />
          <Modal>
            <ModalHeader>
              <Dialog.Title
                asChild
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Text weight="medium">
                  <FaHeart />
                  Favorites
                </Text>
              </Dialog.Title>
              <DialogDescription>
                Here are your favorites words
              </DialogDescription>
              <Dialog.Close asChild>
                <Button type="grey">X</Button>
              </Dialog.Close>
            </ModalHeader>
            <FavoritesWordsListWrapper>
              {favorites.map((favoriteWord: APIType) => (
                <FavoritesWordsListItem
                  key={favoriteWord.id}
                  onClick={(event) =>
                    getAPIWord(String(event.target.outerText), favoriteWord.id)
                  }
                >
                  <Text>{favoriteWord.content}</Text>
                  <Button
                    css={{ backgroundColor: "transparent" }}
                    onClick={(el) => {
                      favoriteRemove(favoriteWord.id);
                    }}
                  >
                    <FaTrash />
                  </Button>
                </FavoritesWordsListItem>
              ))}
            </FavoritesWordsListWrapper>
          </Modal>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
