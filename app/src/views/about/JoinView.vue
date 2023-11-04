<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

setTitle('join.join-ncc', 'i18n');
</script>

<template>
  <body-block>

    <title-block>{{ $t('join.join-ncc') }}</title-block>

  </body-block>
</template>

<style scoped lang="css">

</style>