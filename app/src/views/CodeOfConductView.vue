<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

setTitle('code-of-conduct', 'i18n');
</script>

<template>

  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t('code-of-conduct') }}</title-block>

  </body-block>

  <body-block class="project-paper">

    <markdown-renderer source="code-of-conduct" :i18n="true"/>

  </body-block>

  <placeholder-block height="20px"/>

</template>

<style scoped lang="css">

.project-paper {
  @apply my-6 p-5 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

</style>