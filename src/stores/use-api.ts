import { Api } from "@/api/marvel-api";
import { defineStore } from "pinia";
import md5Hex from "md5-hex";
import { ref } from "vue";

export const useApi = defineStore("api", () => {
  const api = ref(new Api());

  const publicKey = import.meta.env.VITE_MARVEL_PUPLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = md5Hex(ts + privateKey + publicKey);

  api.value.instance.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
      apikey: publicKey,
      hash,
      ts,
    };
    return config;
  });

  return { api };
});
