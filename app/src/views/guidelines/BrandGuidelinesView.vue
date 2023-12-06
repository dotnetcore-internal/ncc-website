<script setup lang="ts">
import { computed } from "vue";
import { usePreferredDark } from "@vueuse/core";

import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import Markdown from "@/components/markdown/MarkdownWorker.vue";

setTitle("media-brand", "i18n");

const currentPrefersDarkMode = usePreferredDark();

const useLogoUrl = computed(() => {
  return currentPrefersDarkMode.value
    ? "/images/logo.dark.png"
    : "/images/logo.png";
});
</script>

<template>

  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("media-brand") }}</title-block>

  </body-block>

  <body-block class="content-paper">

    <markdown source="guidelines/BrandGuidelines" :i18n="true" />

    <placeholder-block height="20px" />

    <div class="grid grid-cols-2 gap-4">

      <div class="text-center w-1/4 mx-auto self-center">
        <img src="/images/logo-seq-svg.svg" alt="TheNCC Logo （Classic mode）" />
      </div>

      <div class="text-center w-3/4 mx-auto self-center">
        <img :src="useLogoUrl" alt="TheNCC Logo （Design mode）" />
      </div>

      <div class="text-center text-sm text-gray-500">
        TheNCC Logo （Classic mode）
        <p class="text-xs text-gray-500/80">since 2016</p>
      </div>

      <div class="text-center text-sm text-gray-500">
        TheNCC Logo （Design mode）
        <p class="text-xs text-gray-500/80">since 2020</p>
      </div>

    </div>

    <placeholder-block height="90px" />

    <markdown source="guidelines/logo" :i18n="true" />

  </body-block>

</template>

<style scoped lang="css">

:deep(.markdown-body){
  & p, & li {
    @apply text-lg;
  }
}

</style>