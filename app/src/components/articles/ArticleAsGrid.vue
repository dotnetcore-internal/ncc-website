<script setup lang="ts">
import { computed } from "vue";
import { useDateFormat } from "@vueuse/core";
import { useUiStore } from "@/stores/uiStore";
import type { AuthorExtendModel, AuthorModel } from "@/apis/ContentModels";

import Anchor from "@/components/basic/AnchorElement.vue";
import ArticleCardsAuthors from "@/components/articles/ArticleCardsAuthors.vue";

const props = withDefaults(defineProps<{
  id: string;
  image: string;
  date: Date;
  titleTip?: string;
  url?: string;
  baseUrl: string;
  author?: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[] | null;
  displayAuthorMode?: "hide" | "all" | "all-but-avatar" | "all-but-name" | "all-but-first-avatar" | "all-but-first-name" | "first" | "first-but-avatar" | "first-but-name"
  displayAuthorBy?: boolean;
  displayConjunctions?: boolean;
  useAuthorExtendStrategy?: { key: string; mode?: "direct" | "i18n"; displayText?: string }[];
  displayDescription?: boolean;
  displayDate?: boolean;
  withShadow?: boolean;
  withScale?: boolean;
  infiniteHorizontal?: boolean;
  openInNewTab?: boolean;
}>(), {
  displayAuthorMode: "hide",
  displayAuthorBy: false,
  displayConjunctions: true,
  displayDescription: false,
  displayDate: true,
  author: null,
  withShadow: true,
  withScale: true,
  infiniteHorizontal: false,
  openInNewTab: true
});

const uiStore = useUiStore();

const displayDate = (date: Date, format: string) => {
  return useDateFormat(date, format, { locales: uiStore }).value;
};

const useTitleTip = computed(() => {
  return props.titleTip ?? "";
});

const useImageUrl = computed(() => {
  const year = displayDate(props.date, "YYYY");
  const month = displayDate(props.date, "MM");
  return `/content${props.baseUrl}/${year}/${month}/${props.id}/assets/${props.image}`;
});

const useArticleUrl = computed(() => {
  if (props.url)
    return props.url;
  const year = displayDate(props.date, "YYYY");
  const month = displayDate(props.date, "MM");
  return `${props.baseUrl}/${year}/${month}/${props.id}`;
});

const useTarget = computed(() => {
  return props.openInNewTab ? "_blank" : "_self";
});

</script>

<template>

  <div class="article-grid" :class="{'shadow-md': withShadow, 'hover:scale-105': withScale }">

    <anchor class="block w-full h-4/5" :href="useArticleUrl" :title="useTitleTip" :target="useTarget" mode="classic">
      <img :src="useImageUrl" :alt="useTitleTip" />
      <span class="block px-5 py-7 text-lg font-bold">
        <slot></slot>
        <span v-if="displayDescription" class="article-description">
          <slot name="description"></slot>
        </span>
        <br v-else />
        <!-- Author -->
        <article-cards-authors
          :author="author"
          :display-author-mode="props.displayAuthorMode"
          :display-author-by="props.displayAuthorBy"
          :display-conjunctions="props.displayConjunctions"
          :use-extend-strategy="props.useAuthorExtendStrategy"
        />
        <!-- Author -->

        <!-- Date -->
        <span v-if="props.displayDate" class="text-xs mt-1.5 text-gray-500 font-medium block">
          {{ displayDate(date, $t("_common.date-format")) }}
        </span>
        <!-- Date -->
      </span>
    </anchor>
  </div>

</template>

<style scoped lang="css">
.article-grid {
  @apply m-4 rounded-lg overflow-hidden;
  @apply dark:bg-gray-500/5;
  @apply border border-gray-300 hover:border-gray-500;
  @apply transition-all ease-in-out duration-500;

  .article-description {
    @apply block py-1;
    @apply text-sm text-gray-500;
    @apply max-h-32 break-words text-ellipsis overflow-hidden;
  }
}
</style>