<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MemberProjects from "@/components/common/MemberProjects.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";

setTitle('project-archived-full', 'i18n');
</script>

<template>

  <body-block>

    <project-header feature-key="archived">
      {{ $t('project-archived-full') }}
    </project-header>

  </body-block>

  <member-projects/>

</template>

<style scoped lang="css">

</style>