<script setup lang="ts">
import { computed, ref } from "vue";
import { usePreferredDark } from "@vueuse/core";
import type { Article, hasAuthor } from "@/apis/ContentModels";
import ArticleCard from "@/components/articles/ArticleCard.vue";
import { GridNine, VerticalTidyUp } from "@icon-park/vue-next";

const props = withDefaults(defineProps<{
  articles: Article[];
  defaultDisplayMode?: "grid" | "list";
  baseUrl: string;
  displayAuthorMode?: "hide" | "all" | "all-but-avatar" | "all-but-name" | "all-but-first-avatar" | "all-but-first-name" | "first" | "first-but-avatar" | "first-but-name"
  displayAuthorBy?: boolean;
}>(), {
  defaultDisplayMode: "grid",
  displayAuthorBy: false
});


const currentDisplayMode = ref(props.defaultDisplayMode);

const switchDisplayMode = (mode: "grid" | "list") => {
  currentDisplayMode.value = mode;
};

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

const useIconTheme = (mode: "grid" | "list") => {
  return currentDisplayMode.value === mode
    ? "filled"
    : "outline";
};

</script>

<template>

  <div class="flex justify-center mb-4">

    <div class="group-btn cursor-pointer">
      <button @click="switchDisplayMode('grid')" class="group-btn-text" :class="{'group-btn-current': currentDisplayMode === 'grid'}">
        <grid-nine class="sort-btn-icon" :theme="useIconTheme('grid')" size="16" :fill="useIconColor" />
      </button>
      <button @click="switchDisplayMode('list')" class="group-btn-text" :class="{'group-btn-current': currentDisplayMode === 'list'}">
        <vertical-tidy-up class="sort-btn-icon" :theme="useIconTheme('list')" size="16" :fill="useIconColor" />
      </button>
    </div>

  </div>

  <div v-show="currentDisplayMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    <article-card v-for="article in articles"
                  :key="article.id"
                  :id="article.id"
                  :image="article.img"
                  :date="new Date(article.date)"
                  :author="(article as hasAuthor)?.author"
                  :title-tip="article.title"
                  :base-url="baseUrl"
                  :display-author-mode="displayAuthorMode"
                  :display-author-by="displayAuthorBy"
    >
      {{ article.title }}
    </article-card>

  </div>


</template>

<style scoped lang="css">
.group-btn {
  @apply inline-block mt-3 px-3;
  @apply bg-white dark:bg-black/50 backdrop-blur-3xl rounded-full;
  @apply font-light;
}

.group-btn-text {
  @apply inline-block p-2 align-middle rounded-full;
  @apply text-sm;
}

.group-btn-current {
  @apply bg-purple-500/10 dark:bg-purple-200/30;

}
</style>