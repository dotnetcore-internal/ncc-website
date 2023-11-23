<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { setTitle } from "@/hooks/usePageToolkits";
import type { PmcPeople, PmcPeopleList } from "@/apis/PeopleModels";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import Markdown from "@/components/markdown/Markdownworker.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

setTitle("pmc", "i18n");

const pmcList = reactive<PmcPeople[]>([]);

const loadPmcListAsync = async () => {
  const list = await import (/* @vite-ignore */"@/config/people/pmc.json");
  const people = list as unknown as PmcPeopleList;
  return people.people;
};

onMounted(() => {
  loadPmcListAsync().then(list => {
    pmcList.splice(0, pmcList.length, ...list);
  });
});

</script>

<template>

  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("pmc") }}</title-block>

    <div class="pmc-intro">
      {{ $t("pmc-intro") }}
    </div>

  </body-block>

  <body-block class="markdown-toc-right">

    <div class="xl:flex xl：justify-between">

      <div class="xl:flex-none xl:w-72 xl:order-last"></div>

      <div class="xl:flex-1 overflow-hidden">

        <markdown source="people/pmc" :i18n="true" />

      </div>

    </div>

  </body-block>

  <placeholder-block height="1.25rem" />

  <body-block>

    <placeholder-block height="20px" />

    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-5">

      <div v-for="people in pmcList.filter(x=>x['during-in-term']).sort((x, y) => x.id.localeCompare(y.id))"
           :key="people.id"
           :title="people.name"
           class="text-center relative cursor-pointer">
        <div v-if="people.director" class="director">
          <span class="uppercase">{{ $t("pmc-director") }}</span>
        </div>
        <img :src="`/images/people/${people.avatar}`" :alt="people.name" class="w-24 h-24 rounded-full mx-auto" />
        <span class="inline-block p-3">{{ people.name }}</span>
      </div>

    </div>

  </body-block>

  <placeholder-block height="100px" />

</template>

<style scoped lang="css">
.pmc-intro {
  @apply p-5 text-3xl md:w-5/6 w-full;
  line-height: 3.5rem;
}

.director {
  @apply absolute text-center top-20 left-0 right-0;

  & span {
    @apply inline-block text-xs px-2 py-0.5 rounded-2xl;
    @apply text-yellow-700 dark:text-yellow-300;
    @apply bg-yellow-200/50 dark:bg-yellow-800/50;
  }
}
</style>