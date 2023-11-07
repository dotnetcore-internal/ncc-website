<script setup lang="ts">
import {computed, ref} from "vue";
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectCards from "@/components/projects/ProjectCards.vue";
import TranslationProjectCards from "@/components/projects/TranslationProjectCards.vue";
import LaboratoryProjectCards from "@/components/projects/LaboratoryProjectCards.vue";
import GroupedProjectCards from "@/components/projects/GroupedProjectCards.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

setTitle('project-all-full', 'i18n');

const groupedMode = ref(false);

const useGroupedMode = computed(() => {
  return groupedMode.value;
});

const switchGroupedMode = () => {
  groupedMode.value = !groupedMode.value;
};

</script>

<template>

  <body-block>

    <project-header feature-key="all"/>

    <div @click="switchGroupedMode">A-Z</div>

    <div v-show="!useGroupedMode">
      <project-cards for="all" />
    </div>

    <div v-show="useGroupedMode">
      <grouped-project-cards />
    </div>

  </body-block>

  <placeholder-block height="90px"/>

  <div v-show="!useGroupedMode">

    <laboratory-project-cards/>

    <placeholder-block height="90px"/>

    <translation-project-cards/>

    <placeholder-block height="90px"/>

  </div>

  <member-projects>
    {{ $t('our-projects-title-by-name') }}
  </member-projects>

</template>

<style scoped lang="css">

</style>