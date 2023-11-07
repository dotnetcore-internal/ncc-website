<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectCards from "@/components/projects/ProjectCards.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

setTitle('project-archived-full', 'i18n');
</script>

<template>

  <body-block>

    <project-header feature-key="archived"/>

    <project-cards for="archived"/>

  </body-block>

  <placeholder-block height="90px"/>

  <member-projects>
    {{ $t('our-projects-title-by-name') }}
  </member-projects>

</template>

<style scoped lang="css">

</style>