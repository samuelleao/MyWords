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
import { useContext, useState } from "react";

import { Toast } from "@components/Toast";
import { FavoritesWordsContext } from "@providers/wordsProvider";
import { useRef } from "react";

interface APIType {
  content: string;
  id: number;
}

export const FavoritesArea = (): JSX.Element => {
  const {
    getFavorites,
    removedWordsucess,
    favorites,
    setRemovedWordSucess,
    favoriteRemove,
    getAPIWord,
  } = useContext(FavoritesWordsContext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Toast
        control={removedWordsucess}
        setControl={setRemovedWordSucess}
        title="Yes! Word Removed"
        description="Your favorite word was removed with sucess"
      />
      <Dialog.Root open={open} onOpenChange={setOpen}>
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
                <FavoritesWordsListItem key={favoriteWord.id}>
                  <Text
                    tabIndex={0}
                    as="a"
                    onKeyPress={(event) =>
                      getAPIWord(
                        String(event.target.outerText),
                        favoriteWord.id
                      ).then(()=>{
                        setOpen(!open)
                      })
                    }
                    onClick={(event) =>
                      getAPIWord(
                        String(event.target.outerText),
                        favoriteWord.id
                      ).then(()=>{
                        setOpen(!open)
                      })
                    }
                  >
                    {favoriteWord.content}
                  </Text>
                  <Button
                    css={{ backgroundColor: "transparent" }}
                    onClick={(el) => {
                      favoriteRemove(favoriteWord.id).then(()=>{
                        setOpen(!open)
                      });
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
