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
import { useState } from "react";
import { getAPI, deleteAPI } from "utils/getApi";
import { Toast } from "@components/Toast";

interface APIType {
  content: string;
  id: number;
}

export const FavoritesArea = (): JSX.Element => {
  const [favorites, setFavorites] = useState<APIType[]>([]);
  const [sucess, setSucess] = useState(false);

  const handleFavorites = async () => {
    try {
      const response = await getAPI<any>(`http://localhost:3004/words`);
      setFavorites(response.data);
    } catch (error) {
      throw (error as Error).message;
    }
  };

  const favoriteRemove = async (id: number) => {
    try {
      await deleteAPI<any>(`http://localhost:3004/words/${id}`);
      setSucess(true);
      handleFavorites();
    } catch (error) {
      setSucess(false);
      throw (error as Error).message;
    }
  };

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
          <Button onClick={handleFavorites} withIcon type="grey">
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
                  <Text>{favoriteWord.content}</Text>
                  <Button
                    css={{ backgroundColor: "transparent" }}
                    onClick={() => favoriteRemove(favoriteWord.id)}
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
