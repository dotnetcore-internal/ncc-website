<script setup lang="ts">
import { nextTick, onMounted, onUnmounted } from "vue";
import { useEmitter } from "@/hooks/useEmitter";
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import Markdown from "@/components/markdown/MarkdownWorker.vue";

setTitle("code-of-conduct", "i18n");

const emitter = useEmitter();

onMounted(async () => {

  emitter.on("toChangeLocale", async (e) => {
    await nextTick(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const event = e as { locale: string };
      setTitle("code-of-conduct", "i18n");
    });
  });

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>

  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("code-of-conduct") }}</title-block>

  </body-block>

  <div class="responsive-width coc-note">

    <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
      {{ $t("coc-intro") }}
    </title-block>

    <p>{{ $t("coc-intro-part1") }}</p>
    <p>{{ $t("coc-intro-part2") }}</p>
    <p>{{ $t("coc-intro-part3") }}</p>

  </div>

  <placeholder-block height="20px" />

  <div class="responsive-width">

    <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
      {{ $t("coc-body") }}
    </title-block>

  </div>

  <body-block class="content-paper markdown-toc-right">

    <div class="xl:flex xl：justify-between">

      <div class="xl:flex-none xl:w-72 xl:order-last"></div>

      <div class="xl:flex-1 overflow-hidden">

        <markdown source="about/code-of-conduct" :i18n="true" fallback-locale="en" />

      </div>

    </div>

  </body-block>

  <placeholder-block height="20px" />

  <div class="responsive-width coc-note">

    <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">
      {{ $t("coc-note") }}
    </title-block>

    <div class="coc-note">

      <p>{{ $t("coc-note-part1") }}</p>
      <p>{{ $t("coc-note-part2") }}</p>

      <ul>
        <li><a href="https://apache.org/foundation/policies/conduct" target="_blank">{{ $t("coc-asf") }}</a></li>
        <li><a href="https://dotnetfoundation.org/about/policies/code-of-conduct" target="_blank">{{ $t("coc-dnf") }}</a></li>
        <li><a href="https://github.com/mozilla/inclusion" target="_blank">{{ $t("coc-mozilla") }}</a></li>
      </ul>

    </div>

  </div>

  <placeholder-block height="90px" />

</template>

<style scoped lang="css">

.coc-note {

  p {
    @apply px-10 py-2;
    @apply text-gray-700 dark:text-gray-300 text-base;
  }

  ul {
    @apply px-10 py-2;
    @apply text-gray-700 dark:text-gray-300 text-base;
  }

  li {
    @apply list-disc list-inside leading-7;
  }

  a {
    @apply hover:underline underline-offset-2 decoration-gray-400;
  }

}

</style>