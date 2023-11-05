<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/common/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";

setTitle('project-all-full', 'i18n');

</script>

<template>
  <body-block>

    <project-header feature-key="all"/>


  </body-block>

  <member-projects/>

</template>

<style scoped lang="css">

</style>