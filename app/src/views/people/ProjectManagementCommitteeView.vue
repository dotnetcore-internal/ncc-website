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
  const list = await import (/* @vite-ignore */"@/apis/pmc.json");
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

    <div class="pmc-intro-image">
      <img src="/images/material/committee.webp" alt="TheNCC PMC" />
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
  @apply inline-block align-middle;
  @apply p-5 text-xl lg:text-3xl md:w-4/6 w-full;
  line-height: 3.5rem;
}

.pmc-intro-image{
  @apply inline-block align-middle;
  @apply md:w-2/6 w-0;
  @apply overflow-hidden;

  & img {
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzE1IiBoZWlnaHQ9IjU4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQ4LjMyOCA5Ni42OTRjNzUuNTM2IDUwLjEyNiAxMjkuNjM2IDExMS4wMDkgMTQ5LjE2NiAxNzQuOTg0IDE5LjUxNyA2My45MzIgNC41NCAxMzEuMDM2LTU4LjI2MSAxOTMuNzMzLTEyNS42NTcgMTI1LjQ1LTM0OS44NjggMTQ1Ljk0NS01MDAuNzQ0IDQ1Ljc3Mi03NS40MjQtNTAuMDc2LTExOC4yMzUtMTIwLjgyLTEyNi40OTYtMTk0LjY5N0MzLjczIDI0Mi42MSAzMC4wMSAxNjUuNTUxIDkyLjg2NiAxMDIuODI2IDIxOC41MzktMjIuNTg2IDM5Ny40Ny0zLjU2MSA1NDguMzI4IDk2LjY5NFoiIGZpbGw9IiM4Njg2ODYiLz48L3N2Zz4=");
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: contain;
  }
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