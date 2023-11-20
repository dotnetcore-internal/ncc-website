<script setup lang="ts">
import { computed, ref } from "vue";
import { usePreferredDark } from "@vueuse/core";
import type { Article, hasAuthor } from "@/apis/ContentModels";
import ArticleAsBlock from "@/components/articles/ArticleAsBlock.vue";
import ArticleAsGrid from "@/components/articles/ArticleAsGrid.vue";
import ArticleAsCard from "@/components/articles/ArticleAsCard.vue";
import ArticleAsList from "@/components/articles/ArticleAsList.vue";
import { AlignTextBoth, GridNine, ParagraphRectangle, VerticalTidyUp } from "@icon-park/vue-next";

const props = withDefaults(defineProps<{
  articles: Article[];
  defaultDisplayMode?: "grid" | "list" | "card" | "block";
  baseUrl: string;
  displayAuthorMode?: "hide" | "all" | "all-but-avatar" | "all-but-name" | "all-but-first-avatar" | "all-but-first-name" | "first" | "first-but-avatar" | "first-but-name"
  displayAuthorBy?: boolean;
  enableCardMode?: boolean;
  enableListMode?: boolean;
  enableGridMode?: boolean;
  enableBlockMode?: boolean;
  limitedItems?: number;
}>(), {
  defaultDisplayMode: "grid",
  displayAuthorBy: false,
  displayAuthorMode: "hide",
  enableCardMode: true,
  enableListMode: true,
  enableGridMode: true,
  enableBlockMode: true,
  limitedItems: 0
});


const currentDisplayMode = ref(props.defaultDisplayMode);
const enableVal = [props.enableBlockMode, props.enableListMode, props.enableGridMode, props.enableCardMode];
// 在 enableVal 中，返回有多少个 true
const enableValLength = enableVal.filter(x => x).length;
const displayBtnGroup = computed(() => enableValLength > 1);
const noneBtnEnabled = computed(() => enableValLength === 0);

const switchDisplayMode = (mode: "grid" | "list" | "card" | "block") => {
  currentDisplayMode.value = mode;
};

const useArticles = computed(() => {
  if (props.limitedItems <= 0)
    return props.articles;
  if (props.limitedItems > props.articles.length)
    return props.articles;
  return props.articles.slice(0, props.limitedItems);
});

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

const useIconTheme = (mode: "grid" | "list" | "card" | "block") => {
  return currentDisplayMode.value === mode
    ? "filled"
    : "outline";
};

</script>

<template>

  <div v-if="noneBtnEnabled" class="flex justify-center mb-4">
    没有任何模式被使用 <br />No pattern is used
  </div>
  <div v-else-if="displayBtnGroup" class="flex justify-center mb-4">

    <div class="group-btn cursor-pointer">
      <button v-if="enableBlockMode"
              @click="switchDisplayMode('block')"
              class="group-btn-text"
              :class="{'group-btn-current': currentDisplayMode === 'block'}">
        <vertical-tidy-up class="sort-btn-icon" :theme="useIconTheme('block')" size="16" :fill="useIconColor" />
      </button>

      <button v-if="enableGridMode"
              @click="switchDisplayMode('grid')"
              class="group-btn-text"
              :class="{'group-btn-current': currentDisplayMode === 'grid'}">
        <grid-nine class="sort-btn-icon" :theme="useIconTheme('grid')" size="16" :fill="useIconColor" />
      </button>

      <button v-if="enableCardMode"
              @click="switchDisplayMode('card')"
              class="group-btn-text"
              :class="{'group-btn-current': currentDisplayMode === 'card'}">
        <paragraph-rectangle class="sort-btn-icon" :theme="useIconTheme('card')" size="16" :fill="useIconColor" />
      </button>

      <button v-if="enableListMode"
              @click="switchDisplayMode('list')"
              class="group-btn-text"
              :class="{'group-btn-current': currentDisplayMode === 'list'}">
        <align-text-both class="sort-btn-icon" :theme="useIconTheme('list')" size="16" :fill="useIconColor" />
      </button>
    </div>

  </div>
  <div v-else class="mb-4"></div>

  <div v-if="enableBlockMode"
       v-show="currentDisplayMode === 'block'">

    <article-as-block v-for="article in useArticles"
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
    </article-as-block>

  </div>

  <div v-if="enableGridMode"
       v-show="currentDisplayMode === 'grid'"
       class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    <article-as-grid v-for="article in useArticles"
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
    </article-as-grid>

  </div>

  <div v-if="enableCardMode"
       v-show="currentDisplayMode === 'card'">

    <article-as-card v-for="article in useArticles"
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
    </article-as-card>

  </div>

  <div v-if="enableListMode"
       v-show="currentDisplayMode === 'list'">

    <article-as-list v-for="article in useArticles"
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
    </article-as-list>

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