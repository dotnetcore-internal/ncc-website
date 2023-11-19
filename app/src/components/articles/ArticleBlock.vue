<script setup lang="ts">

import type { Article } from "@/apis/ContentModels";
import { ref } from "vue";

const props = withDefaults(defineProps<{
  articles: Article[];
  defaultDisplayMode?: "grid" | "list";
}>(), {
  defaultDisplayMode: "grid"
});

const currentDisplayMode = ref(props.defaultDisplayMode);

const switchDisplayMode = (mode: "grid" | "list") => {
  currentDisplayMode.value = mode;
};

</script>

<template>

  <div v-for="article in articles" :key="article.id">
    {{ article.title }}
  </div>

</template>

<style scoped lang="css">

</style>