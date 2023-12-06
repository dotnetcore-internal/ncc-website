<script setup lang="ts">
import { computed } from "vue";
import { useDateFormat } from "@vueuse/core";
import { useUiStore } from "@/stores/uiStore";
import type {AuthorExtendModel, AuthorModel} from "@/apis/ContentModels";

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
  openInNewTab?: boolean;
}>(), {
  displayAuthorMode: "hide",
  displayAuthorBy: false,
  displayConjunctions: true,
  displayDescription: false,
  displayDate: true,
  author: null,
  withShadow: true,
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
  <div class="article-block" :class="{'shadow-md': props.withShadow}">
    <anchor class="block w-full h-4/5" :href="useArticleUrl" :title="useTitleTip" :target="useTarget" mode="classic">

      <div class="w-full relative">
        <img :src="useImageUrl" :alt="useTitleTip" class="w-full" />

        <div class="absolute bottom-0 w-full bg-gradient-to-b from-transparent via-black/30 to-black/90 h-36 lg:h-48 xl:h-64">

          <div class="text-white text-xl lg:text-3xl xl:text-5xl absolute bottom-0 p-5">
            <slot></slot>
          </div>

        </div>

      </div>

      <div class="w-full md:flex dark:bg-black/70 p-5">

        <div class="md:flex-1">
           <span v-if="!displayDescription" class="article-description">
              <slot name="description"></slot>
          </span>

          <!-- Author -->
          <article-cards-authors
            :author="author"
            :display-author-mode="props.displayAuthorMode"
            :display-author-by="props.displayAuthorBy"
            :display-conjunctions="props.displayConjunctions"
            :use-extend-strategy="props.useAuthorExtendStrategy"
          />
          <!-- Author -->
        </div>

        <div v-if="props.displayDate" class="md:flex-none w-36">
          <span class="text-sm text-gray-500">{{ displayDate(date, $t("_common.date-format")) }}</span>
        </div>

      </div>

    </anchor>

  </div>
</template>

<style scoped lang="css">
.article-block {
  @apply m-4 rounded-lg overflow-hidden;
  @apply dark:bg-gray-500/5;

  .article-description {
    @apply block py-1;
    @apply text-sm text-gray-500;
    @apply max-h-32 break-words text-ellipsis overflow-hidden;
  }
}
</style>