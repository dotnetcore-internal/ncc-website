<script setup lang="ts">
import { computed } from "vue";
import { useDateFormat } from "@vueuse/core";
import { useUiStore } from "@/stores/uiStore";

import Anchor from "@/components/basic/AnchorElement.vue";

const props = withDefaults(defineProps<{
  id: string;
  image: string;
  date: Date;
  titleTip?: string;
  url?: string;
  baseUrl: string;
}>(), {});

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
  return `/articles${props.baseUrl}/${year}/${month}/${props.id}/assets/${props.image}`;
});

const useArticleUrl = computed(() => {
  if (props.url)
    return props.url;
  const year = displayDate(props.date, "YYYY");
  const month = displayDate(props.date, "MM");
  return `${props.baseUrl}/${year}/${month}/${props.id}`;
});
</script>

<template>
  <div class="article-card">
    <anchor class="block w-full h-4/5" :href="useArticleUrl" :title="useTitleTip" target="_blank" mode="classic">
      <img :src="useImageUrl" :alt="useTitleTip" />
      <span class="block px-5 py-7 text-lg font-bold">
        <slot></slot>
      </span>
    </anchor>
    <span class="block px-5 py-7 text-sm text-gray-500 ">{{ displayDate(date, $t("_common.date-format")) }}</span>

  </div>
</template>

<style scoped lang="css">
.article-card {
  @apply m-4 rounded-lg overflow-hidden;
  @apply dark:bg-white/10;
  @apply transition-all ease-in-out duration-500 hover:scale-105;
  @apply shadow-md;
}
</style>