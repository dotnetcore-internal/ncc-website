<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

setTitle('code-of-conduct', 'i18n');
</script>

<template>
  <body-block>

    <title-block>{{ $t('code-of-conduct') }}</title-block>

  </body-block>
</template>

<style scoped lang="css">

</style>