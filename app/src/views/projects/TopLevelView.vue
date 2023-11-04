<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import MemberProjects from "@/components/common/MemberProjects.vue";

setTitle('project-top-level-full', 'i18n');
</script>

<template>

  <body-block>

    <title-block>{{ $t('project-top-level-full') }}</title-block>

  </body-block>

  <member-projects />

</template>

<style scoped lang="css">

</style>