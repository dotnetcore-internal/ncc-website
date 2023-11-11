<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useEmitter} from "@/hooks/useEmitter";

import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightJS from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
import { align } from "@mdit/plugin-align";

import WaveLoading from "@/components/basic/WaveLoading.vue";

const props = withDefaults(defineProps<{
  source: string;
}>(), {});

const emitter = useEmitter();

const markdown = new MarkdownIt()
    .use(MarkdownItAbbr)
    .use(MarkdownItAnchor)
    .use(MarkdownItFootnote)
    .use(MarkdownItHighlightJS)
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItTaskLists)
    .use(MarkdownItTOC)
    .use(align);

const loading = ref(true);
const success = ref(false);
const content = ref('');
const key = ref('');

const useMarkdownContent = computed(() => {
  return content.value;
});

const useMarkdownHtml = computed(() => {
  return markdown.render(useMarkdownContent.value);
});

const toLoadMarkdownContent = async (source: string) => {
  key.value = source;
  loading.value = true;
  success.value = false;

  if (source.length === 0) {
    content.value = '';
    loading.value = false;
    success.value = false;
  } else {

    try {
      const res = await fetch(source);
      if (res.ok) {
        content.value = await res.text();
        success.value = true;
      } else {
        content.value = '';
        success.value = false;
      }
    } catch (error) {
      content.value = '';
      success.value = false;
    } finally {
      loading.value = false;
    }

  }
};

onMounted(async () => {

  emitter.on('toRerenderMarkdown', (e) => {
    const event = e as { source: string };
    toLoadMarkdownContent(event.source);
  });

  await toLoadMarkdownContent(props.source);

})

onUnmounted(() => {

  emitter.off("toRerenderMarkdown");

});

</script>

<template>

  <wave-loading v-show="loading"/>

  <div v-show="!loading" v-html="useMarkdownHtml" class="markdown-body" :key="key"/>

</template>

<style lang="css">

.markdown-body {
  @apply bg-transparent p-5 pb-10;
}

</style>