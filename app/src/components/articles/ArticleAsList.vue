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
  openInNewTab?: boolean;
}>(), {
  displayAuthorMode: "hide",
  displayAuthorBy: false,
  displayConjunctions: true,
  displayDescription: false,
  displayDate: true,
  author: null,
  openInNewTab: true
});

const uiStore = useUiStore();

const displayDate = (date: Date, format: string) => {
  return useDateFormat(date, format, { locales: uiStore }).value;
};

const useTitleTip = computed(() => {
  return props.titleTip ?? "";
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
  <div class="article-list">
    <anchor class="block w-full h-4/5 p-5" :href="useArticleUrl" :title="useTitleTip" :target="useTarget" mode="classic">

      <div class="md:flex">

        <div class="md:flex-1">
          <span class="text-lg font-bold">
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
          </span>
        </div>

        <div v-if="props.displayDate" class="md:flex-none w-full md:w-36 text-right">
          <span class="text-sm text-gray-500">
            {{ displayDate(date, $t("_common.date-format")) }}
          </span>
        </div>
      </div>

    </anchor>


  </div>
</template>

<style scoped lang="css">
.article-list {
  @apply mx-4 my-1 rounded-lg overflow-hidden;
  @apply dark:bg-gray-500/5 hover:bg-purple-500/5;

  .article-description {
    @apply block py-1;
    @apply text-sm text-gray-500;
    @apply max-h-32 break-words text-ellipsis overflow-hidden;
  }
}
</style>