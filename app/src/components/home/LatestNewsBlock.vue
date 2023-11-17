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
  return `/articles/news/${year}/${month}/${props.id}/assets/${props.image}`;
});

const useNewsUrl = computed(() => {
  if (props.url)
    return props.url;
  const year = displayDate(props.date, "YYYY");
  const month = displayDate(props.date, "MM");
  return `/news/${year}/${month}/${props.id}`;
});
</script>

<template>
  <div class="rounded-lg shadow-md overflow-hidden m-4 transition-all ease-in-out duration-500 hover:scale-105">
    <anchor class="block w-full h-4/5" :href="useNewsUrl" :title="useTitleTip" target="_blank" mode="classic">
      <img :src="useImageUrl" :alt="useTitleTip" />
      <span class="block px-5 py-7 text-lg font-bold">
        <slot></slot>
      </span>
    </anchor>
    <span class="block px-5 py-7 text-sm text-gray-500 ">{{ displayDate(date, $t("_common.date-format")) }}</span>

  </div>
</template>

<style scoped lang="css">

</style>