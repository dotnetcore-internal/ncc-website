<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

setTitle("nav.all-our-sites", "i18n");
</script>

<template>

  <body-block>

    <div class="all-sites-wrap">

      <title-block :is-font-black="false" :is-font-bold="true">{{ $t("nav.all-ncc-sites") }}</title-block>

      <div class="all-sites-intro">

        <span>{{ $t("nav.discover-resource") }}</span>

      </div>

    </div>

    <div class="all-sites-intro-image">
      <img src="/images/material/subway.webp" alt="All NCC Sites" />
    </div>

  </body-block>

  <body-block>

    <div class="text-gray-400 uppercase p-5">{{ $t("nav.flagship-site") }}</div>

    <div class="site-card">

      <div class="image">

        <anchor href="/" class="block w-3/6 mx-auto rounded-lg overflow-hidden" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.flagship-desc')"></div>

    </div>

  </body-block>

  <body-block>

    <div class="text-gray-400 uppercase p-5">{{ $t("nav.events-and-meetups") }}</div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://events.ncc.work" class="block w-3/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.events-desc')"></div>

    </div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://2f.ncc.work" class="block w-3/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.ncc-2f-desc')"></div>

    </div>

  </body-block>

  <body-block>

    <div class="text-gray-400 uppercase p-5">{{ $t("nav.tools-and-resources") }}</div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://contribute.ncc.work" class="block w-3/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.contribute-desc')"></div>

    </div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://landscape.ncc.work" class="block w-3/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.landscape-desc')"></div>

    </div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://glossary.ncc.work" class="block w-3/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.glossary-desc')"></div>

    </div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://tools.ncc.work" class="block w-3/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo.png" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.tools-desc')"></div>

    </div>


  </body-block>

  <body-block>

    <div class="text-gray-400 uppercase p-5">{{ $t("nav.others") }}</div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://github.com/dotnetcore/home" class="block w-1/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo-seq-svg.svg" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.github-home-desc')"></div>

    </div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://github.com/dotnetcore" class="block w-1/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo-seq-svg.svg" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.github-desc')"></div>

    </div>

    <div class="site-card">

      <div class="image">

        <anchor href="https://gitee.com/dotnetcore" class="block w-1/6 mx-auto rounded-lg overflow-hidden" target="_blank" mode="classic">
          <img src="/images/logo-seq-svg.svg" alt="TheNCC" />
        </anchor>

      </div>

      <div class="text" v-html="$t('nav.gitee-desc')"></div>

    </div>

    <div class="text-xl p-5">
      {{ $t("nav.discover-chinese-part1") }}
      <anchor href="https://dotnet-china.com"
              target="_blank"
              :title="$t('nav.discover-chinese-tip')"
              mode="classic"
              class="underline hover:underline underline-offset-4 hover:text-purple-700 hover:dark:text-purple-200">
        {{ $t("nav.discover-chinese-part2") }}
      </anchor>
      {{ $t("nav.discover-chinese-part3") }}
    </div>

  </body-block>

  <placeholder-block height="50px" />

</template>

<style scoped lang="css">
.all-sites-wrap {
  @apply inline-block align-middle;
  @apply md:w-7/12 w-full;
}

.all-sites-intro {
  @apply p-5 text-xl lg:text-3xl;
  line-height: 3.5rem;
}

.all-sites-intro-image {
  @apply inline-block align-middle;
  @apply md:w-5/12 w-0;
  @apply overflow-hidden;
  @apply pt-3;

  & img {
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzE1IiBoZWlnaHQ9IjU4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQ4LjMyOCA5Ni42OTRjNzUuNTM2IDUwLjEyNiAxMjkuNjM2IDExMS4wMDkgMTQ5LjE2NiAxNzQuOTg0IDE5LjUxNyA2My45MzIgNC41NCAxMzEuMDM2LTU4LjI2MSAxOTMuNzMzLTEyNS42NTcgMTI1LjQ1LTM0OS44NjggMTQ1Ljk0NS01MDAuNzQ0IDQ1Ljc3Mi03NS40MjQtNTAuMDc2LTExOC4yMzUtMTIwLjgyLTEyNi40OTYtMTk0LjY5N0MzLjczIDI0Mi42MSAzMC4wMSAxNjUuNTUxIDkyLjg2NiAxMDIuODI2IDIxOC41MzktMjIuNTg2IDM5Ny40Ny0zLjU2MSA1NDguMzI4IDk2LjY5NFoiIGZpbGw9IiM4Njg2ODYiLz48L3N2Zz4=");
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: contain;
  }
}

.site-card {
  @apply bg-white rounded-lg border;
  @apply p-10 my-5;
  @apply transition-all ease-in-out duration-500;

  .image {
    @apply inline-block w-1/3 align-middle;
    @apply text-center;
  }

  .text {
    @apply inline-block align-middle w-2/3;
    @apply text-lg text-gray-500;

    :deep(a) {
      @apply underline hover:underline underline-offset-4 hover:text-purple-700 hover:dark:text-purple-200;
    }
  }
}

.site-card:hover {
  --tw-scale-x: 1.01;
  --tw-scale-y: 1.01;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>