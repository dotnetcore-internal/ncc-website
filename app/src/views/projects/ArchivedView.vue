<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import MemberProjects from "@/components/common/MemberProjects.vue";

setTitle('Archived Projects');
</script>

<template>

  <body-block>

    <title-block>Archived Projects</title-block>

  </body-block>

  <member-projects />

</template>

<style scoped lang="css">

</style>