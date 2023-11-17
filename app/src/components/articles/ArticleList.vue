<script setup lang="ts">

import {ref} from "vue";
import ArticleCard from "@/components/articles/ArticleCard.vue";
import ArticleLine from "@/components/articles/ArticleLine.vue";

//导入外部文章列表，如果不导入，则显示【无】

const lineMode = ref(true);

const switchDisplayMode = () => {
  lineMode.value = !lineMode.value;
}

</script>

<template>

  <article-line v-if="lineMode"></article-line>

  <article-card v-else></article-card>

</template>

<style scoped lang="css">

</style>