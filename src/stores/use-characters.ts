import { reactive } from "vue";
import { defineStore } from "pinia";
import { useApi } from "./use-api";
import type { CharacterDataWrapper } from "@/api/marvel-api";

export interface CharactersState {
  characterDataWrapper: CharacterDataWrapper;
  isFetching: boolean;
}

export const useCharacters = defineStore("characters", () => {
  const charactersState = reactive<CharactersState>({
    characterDataWrapper: {},
    isFetching: false,
  });
  const { api } = useApi();

  const getCharacters = async () => {
    charactersState.isFetching = true;
    const { data } = await api.v1.getCreatorCollection();
    charactersState.isFetching = false;
    charactersState.characterDataWrapper = data;
  };

  return { charactersState, getCharacters };
});
