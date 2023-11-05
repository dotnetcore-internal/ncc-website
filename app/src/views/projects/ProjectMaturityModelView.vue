<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/common/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";

setTitle('project-maturity-model-full', 'i18n');
</script>

<template>
  <body-block>

    <project-header feature-key="maturity-model"/>

  </body-block>

  <member-projects/>
</template>

<style scoped lang="css">

</style>