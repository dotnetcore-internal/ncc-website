<script setup lang="ts">
import {useRoute} from "vue-router";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const route = useRoute();

</script>

<template>

  <body-block class="content-paper markdown-toc-right">

    <div class="xl:flex xl：justify-between">

      <div class="xl:flex-none xl:w-72 xl:order-last"></div>

      <div class="xl:flex-1 overflow-hidden">

        <markdown-renderer :source="`projects/${route.params.id}/general`"
                           :i18n="true" fallback-locale="en"
                           :include-file-extension="true"
                           file-extension=".md"
                           retry-timeout="1000"
                           :redirect-to404="false"/>
      </div>

    </div>

  </body-block>

  <placeholder-block height="20px"/>

</template>

<style scoped lang="css">

</style>