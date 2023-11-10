<script setup lang="ts">
import {computed, nextTick, onMounted} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import {useProjectStore} from "@/stores/projectStore";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import LicenseBlock from "@/components/projects/LicenseBlock.vue";
import AnchorElement from "@/components/basic/AnchorElement.vue";
import LicenseRaw from "@/components/projects/LicenseRaw.vue";

const emitter = useEmitter();
const projectStore = useProjectStore();

const useLicenseNumber = computed(() => {
  const target = projectStore.currentProjectMetadata?.license;
  if (!target)
    return 0;
  if (Array.isArray(target))
    return target.length;
  else
    return 1;
});

const useLicenseName = computed(() => {
  const target = projectStore.currentProjectMetadata?.license;
  if (Array.isArray(target)) {
    // array
    return target.map(x => x.name);
  } else if (typeof target === 'object') {
    // object
    return target.name;
  } else {
    // undefined
    return '';
  }
});

const useLicenseUrl = computed(() => {
  const target = projectStore.currentProjectMetadata?.license;
  if (Array.isArray(target)) {
    // array
    return target.map(x => x.file);
  } else if (typeof target === 'object') {
    // object
    return target.file;
  } else {
    // undefined
    return '';
  }
});

onMounted(() => {
  nextTick(() => {
    emitter.emit('toChangeProjectPaper', {paper: 'license'});
  });
});

</script>

<template>

  <div v-if="useLicenseNumber === 0" class="project-paper p-5">
    <p class="text-center">No License</p>
  </div>

  <div v-else-if="useLicenseNumber === 1">

    <license-block :license="useLicenseName"/>

    <body-block class="project-paper p-5">

      <p>Raw License Content:</p>

      <anchor-element class="underline hover:underline underline-offset-2 text-blue-500" :src="useLicenseUrl" target="_blank" title="Raw License Content" mode="classic">
        {{ useLicenseUrl }}
      </anchor-element>

    </body-block>

    <body-block class="project-paper">

      <license-raw :raw-url="useLicenseUrl"/>

    </body-block>

  </div>

  <div v-else>

    <license-block v-for="(item, index) in useLicenseName" :key="index" :license="item"/>

    <body-block class="project-paper p-5">

      <p>{{ $t('raw-license-content') }}</p>

      <ul class="list-disc list-inside">
        <li v-for="(item, index) in useLicenseUrl" :key="index">
          <anchor-element class="underline hover:underline underline-offset-2 text-blue-500" :src="item" target="_blank" title="Raw License Content" mode="classic">
            {{ item }}
          </anchor-element>
        </li>
      </ul>

    </body-block>

    <body-block v-for="(item, index) in useLicenseUrl" :key="index" class="project-paper overflow-hidden">

      <license-raw :raw-url="item"/>

    </body-block>

  </div>

</template>

<style scoped lang="css">

.project-paper {
  @apply my-6 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

</style>