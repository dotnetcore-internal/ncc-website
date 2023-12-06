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
  imageStyle?: string;
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
  withShadow: false,
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

const useImageStyle = computed(() => {
  return props.imageStyle ?? "";
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
  <div class="article-card" :class="{'shadow-md':withShadow,'hover:shadow-lg':withShadow}">
    <anchor class="block w-full h-4/5" :href="useArticleUrl" :title="useTitleTip" :target="useTarget" mode="classic">

      <div class="md:flex p-5">

        <div class="flex-none md:w-72 w-0 overflow-hidden" :style="useImageStyle">
          <img :src="useImageUrl" :alt="useTitleTip" />
        </div>

        <div class="flex-1 p-5 text-lg font-bold">
          <slot></slot>
          <span v-if="displayDescription" class="article-description">
              <slot name="description"></slot>
          </span>
          <span v-if="props.displayDate" class="block text-sm text-gray-500 font-medium">
            {{ displayDate(date, $t("_common.date-format")) }}
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
        </div>

      </div>

    </anchor>

  </div>
</template>

<style scoped lang="css">
.article-card {
  @apply m-4 rounded-lg overflow-hidden;
  @apply dark:bg-gray-500/5 hover:bg-purple-200/5;
  @apply border border-gray-300 hover:border-gray-500;

  .article-description {
    @apply block py-1;
    @apply text-sm text-gray-500;
    @apply max-h-32 break-words text-ellipsis overflow-hidden;
  }
}
</style>