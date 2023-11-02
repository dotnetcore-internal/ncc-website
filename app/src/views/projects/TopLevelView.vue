<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import MemberProjects from "@/components/common/MemberProjects.vue";

setTitle('Top-Level Projects');
</script>

<template>

  <body-block>

    <title-block>Top-Level Projects</title-block>

  </body-block>

  <member-projects />

</template>

<style scoped lang="css">

</style>