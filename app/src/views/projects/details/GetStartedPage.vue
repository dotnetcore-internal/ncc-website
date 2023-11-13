<script setup lang="ts">
import {nextTick, onMounted} from "vue";
import {useRoute} from "vue-router";
import {useEmitter} from "@/hooks/useEmitter";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const route = useRoute();
const emitter = useEmitter();

onMounted(() => {
  nextTick(() => {
    emitter.emit('toChangeProjectPaper', {paper: 'get-started'});
  });
});

</script>

<template>

  <body-block class="project-paper markdown-toc-right">

    <div class="xl:flex xl：justify-between">

      <div class="xl:flex-none xl:w-72 xl:order-last"></div>

      <div class="xl:flex-1 overflow-hidden">

        <markdown-renderer :source="`projects/${route.params.id}/get-started`"
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

.project-paper {
  @apply my-6 p-5 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

</style>