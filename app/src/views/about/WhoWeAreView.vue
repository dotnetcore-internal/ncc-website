<script setup lang="ts">
import { computed } from "vue";
import { usePreferredDark } from "@vueuse/core";
import { useUiStore } from "@/stores/uiStore";
import { setTitle } from "@/hooks/usePageToolkits";

import Anchor from "@/components/basic/AnchorElement.vue";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import BloomingFlowers from "@/components/home/BloomingFlowers.vue";
import { RightSmallUp } from "@icon-park/vue-next";
import ProjectStatBlock from "@/components/projects/ProjectStatBlock.vue";

const uiStore = useUiStore();

setTitle("who-we-are", "i18n");

const currentPrefersDarkMode = usePreferredDark();

const useLogoUrl = computed(() => {
  return currentPrefersDarkMode.value
    ? "/images/logo.dark.png"
    : "/images/logo.png";
});

const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});
</script>

<template>

  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("who-we-are") }}</title-block>

    <div class="who-we-are-intro">
      {{ $t("who-we-are-intro") }}
    </div>

  </body-block>

  <div class="bg-white dark:bg-black">

    <placeholder-block height="20px"/>

    <body-block>

      <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
        Identity of TheNCC and member projects
      </title-block>

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

        <div class="text-lg">
          <anchor href="/brand-guidelines" :title="$t('media-brand')" mode="classic" class="brand-logo">
            {{ $t("media-brand") }}
          </anchor>

          <anchor href="https://github.com/dotnetcore/ncc-artwork" :title="$t('media-logos')" target="_blank" mode="classic" class="brand-logo">
            {{ $t("media-logos") }}
            <right-small-up class="inline-block align-middle" theme="filled" size="24" :fill="useIconColor" />
          </anchor>
        </div>

      </div>

    </body-block>

  </div>

  <body-block>

    <placeholder-block height="90px" />

    <div class="who-we-are-intro">
      {{ $t("home.growing-for-ecosystem") }}
    </div>



    <project-stat-block />

    <placeholder-block height="90px" />

  </body-block>

</template>

<style scoped lang="css">
.who-we-are-intro {
  @apply p-5 text-3xl md:w-4/6 w-full;
  line-height: 3.5rem;
}

.brand-logo{
  @apply py-2 w-72 mx-auto my-4 block;
  @apply bg-slate-500/10 hover:bg-slate-500/20 rounded-lg cursor-pointer;
  @apply text-lg text-center;
}
</style>