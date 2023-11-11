<script setup lang="ts">
import {computed, nextTick, onMounted, onUnmounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useEmitter} from "@/hooks/useEmitter";
import {useRandomNumber} from "@/hooks/useMath";
import {useUiStore} from "@/stores/uiStore";
import {useProjectStore} from "@/stores/projectStore";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import MarkdownBlock from "@/components/articles/MarkdownBlock.vue";

const route = useRoute();
const router = useRouter();
const emitter = useEmitter();
const uiStore = useUiStore();
const projectStore = useProjectStore();
const randomPageCode = useRandomNumber(1, 100000);

const usePageModule = computed(() => {
  const key = route.params['customName'] as string;
  const modules = projectStore.currentProjectProfile.modules;
  if(!modules)
    return null;
  const module = modules[key];
  return module ? module : null;
});

const needDisplayFile = computed(() => {
  const module = usePageModule.value;
  if (!module)
    return false;
  const file = module['file'];
  if (!file)
    return false;
  return file.length > 0;
});

const usePageFileUrl = computed(() => {
  if (needDisplayFile.value) {
    return usePageModule.value['file'];
  } else {
    return '';
  }
});

const usePageFileScope = computed(() => {
  if (needDisplayFile.value) {
    const scope = usePageModule.value['scope'];
    if (!scope || scope.length === 0)
      return 'projects';
    return scope;
  } else {
    return 'projects';
  }
});

onMounted(() => {

  emitter.on('toChangeLocale', async (e) => {
    const event = e as { locale: string };
    emitter.emit('toRerenderMarkdown', {source: `/articles/${usePageFileScope.value}/${usePageFileUrl.value}.${event.locale}.md`});
  });

  emitter.on(`toBind404Page${randomPageCode}`, (e) => {
    const event = e as { akaId: string };
    router.push({path: `/projects/${event.akaId}/paper-not-found`});
  });

  nextTick(() => {
    emitter.emit('toChangeProjectPaper', {paper: route.params['customName'], broadcast: randomPageCode});
  });
});

onUnmounted(() => {
  emitter.off(`toBind404Page${randomPageCode}`);
  emitter.off("toChangeLocale");
});

</script>

<template>

  <body-block class="project-paper">

    <div v-if="needDisplayFile">

      <markdown-block :source="`/articles/${usePageFileScope}/${usePageFileUrl}.${uiStore.locale}.md`" />

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