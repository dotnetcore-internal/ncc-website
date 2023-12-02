<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import Markdown from "@/components/markdown/MarkdownWorker.vue";

setTitle("join.join-ncc", "i18n");
</script>

<template>
  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("join.join-ncc") }}</title-block>

    <div class="intro-text">
      {{ $t("join.join-ncc-intro") }}
    </div>

    <div class="intro-image">
      <img src="/images/material/community-3.webp" alt="TheNCC Community" />
    </div>

  </body-block>

  <placeholder-block height="45px" />

  <div class="bg-white-black p-5">

    <div class="responsive-width">

      <div class="join-section js-oss">

        <div class="join-title">
          {{ $t("join.oss-author") }}
        </div>

        <markdown source="about/join/oss" :i18n="true" />

      </div>

      <div class="join-section js-dev">

        <div class="join-title">
          {{ $t("join.dev-player") }}
        </div>

        <markdown source="about/join/dev" :i18n="true" />

      </div>

      <div class="join-section js-speaker">

        <div class="join-title">
          {{ $t("join.speaker") }}
        </div>

        <markdown source="about/join/speaker" :i18n="true" />

      </div>

      <div class="join-section js-student">

        <div class="join-title">
          {{ $t("join.student") }}
        </div>

        <markdown source="about/join/student" :i18n="true" />

      </div>

      <div class="join-section js-techcom">

        <div class="join-title">
          {{ $t("join.community-leader") }}
        </div>

        <markdown source="about/join/techcom" :i18n="true" />

      </div>

      <div class="join-section js-non-pro">

        <div class="join-title">
          {{ $t("join.other") }}
        </div>

        <markdown source="about/join/non-pro" :i18n="true" />

      </div>

    </div>

    <placeholder-block height="45px" />

  </div>

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

.join-section {
  @apply p-5;


  .join-title {
    @apply px-3 py-2;
    @apply border-l-8 border-pink-500;
    @apply text-2xl;
  }

  :global(p) {
    @apply text-lg break-normal;
  }
}

</style>