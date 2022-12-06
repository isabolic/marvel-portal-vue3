<template>
  <div v-if="!isFetching">
    <div
      v-for="character in characterDataWrapper.data?.results"
      :key="character.id"
    >
      >
      {{ character.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import { useCharacters } from "../stores/use-characters";

const { charactersState, getCharacters } = useCharacters();
const { isFetching, characterDataWrapper } = toRefs(charactersState);

getCharacters();
</script>
