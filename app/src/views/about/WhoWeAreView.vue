<script setup lang="ts">
import { computed } from "vue";
import { usePreferredDark } from "@vueuse/core";
import { setTitle } from "@/hooks/usePageToolkits";

import Anchor from "@/components/basic/AnchorElement.vue";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import ProjectStatBlock from "@/components/projects/ProjectStatBlock.vue";
import StoryCollections from "@/views/about/StoryCollections.vue";
import { RightSmallUp } from "@icon-park/vue-next";


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

    <div class="intro-text">
      {{ $t("who-we-are-intro") }}
    </div>

    <div class="intro-image">
      <img src="/images/material/community-2.webp" alt="TheNCC Community" />
    </div>

  </body-block>

  <body-block>

    <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
      {{ $t("story-full") }}
    </title-block>

    <story-collections :query-number="6" />

  </body-block>

  <body-block>

    <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
      {{ $t("live-broadcast") }}
    </title-block>

    <div class="intro-image">
      <img src="/images/material/on-air.webp" alt="TheNCC 2F" />
    </div>

    <div class="intro-text">
      {{ $t("live-broadcast-intro") }}
    </div>

    <div class="md:grid grid-cols-2 gap-4">

      <anchor href="https://2f.ncc.work/about" :title="`${$t('about')} ${$t('community-2f')}`" target="_blank" mode="classic" class="brand-logo col-start-2">
        {{ $t("about") }} {{ $t("community-2f") }}
      </anchor>

    </div>

    <placeholder-block height="55px" />

  </body-block>

  <div class="bg-white dark:bg-black">

    <placeholder-block height="35px" />

    <body-block>

      <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
        {{ $t("id-of-ncc-and-member-projects") }}
      </title-block>

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

      <placeholder-block height="90px" />

    </body-block>

  </div>

  <body-block>

    <placeholder-block height="90px" />

    <div class="text-3xl w-full md:w-7/12 px-5 pb-16">
      {{ $t("home.growing-for-ecosystem") }}
    </div>


    <project-stat-block />

    <placeholder-block height="90px" />

  </body-block>

</template>

<style scoped lang="css">
.intro-text {
  @apply inline-block align-middle;
  @apply p-5 text-xl lg:text-3xl md:w-4/6 lg:w-3/6 w-full;
  line-height: 3.5rem;
}

.intro-image {

  @apply inline-block align-middle;
  @apply md:w-2/6 lg:w-3/6 w-0;

  & img {
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzE1IiBoZWlnaHQ9IjU4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQ4LjMyOCA5Ni42OTRjNzUuNTM2IDUwLjEyNiAxMjkuNjM2IDExMS4wMDkgMTQ5LjE2NiAxNzQuOTg0IDE5LjUxNyA2My45MzIgNC41NCAxMzEuMDM2LTU4LjI2MSAxOTMuNzMzLTEyNS42NTcgMTI1LjQ1LTM0OS44NjggMTQ1Ljk0NS01MDAuNzQ0IDQ1Ljc3Mi03NS40MjQtNTAuMDc2LTExOC4yMzUtMTIwLjgyLTEyNi40OTYtMTk0LjY5N0MzLjczIDI0Mi42MSAzMC4wMSAxNjUuNTUxIDkyLjg2NiAxMDIuODI2IDIxOC41MzktMjIuNTg2IDM5Ny40Ny0zLjU2MSA1NDguMzI4IDk2LjY5NFoiIGZpbGw9IiM4Njg2ODYiLz48L3N2Zz4=");
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: contain;
  }
}

.brand-logo {
  @apply py-2 w-72 mx-auto my-4 block;
  @apply bg-slate-500/10 hover:bg-slate-500/20 rounded-lg cursor-pointer;
  @apply text-lg text-center;
}
</style>