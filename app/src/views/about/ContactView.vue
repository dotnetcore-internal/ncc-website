<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer.vue";

setTitle("contact-us", "i18n");
</script>

<template>

  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("contact-us") }}</title-block>

  </body-block>

  <body-block class="content-paper markdown-toc-right">

    <div class="xl:flex xl：justify-between">

      <div class="xl:flex-none xl:w-72 xl:order-last"></div>

      <div class="xl:flex-1 overflow-hidden">

        <markdown-renderer source="about/contact" :i18n="true" />

      </div>

    </div>

  </body-block>

</template>

<style scoped lang="css">

</style>