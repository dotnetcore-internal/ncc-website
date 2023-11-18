<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

setTitle("community-rules", "i18n");
</script>

<template>
  <body-block>

    <title-block>{{ $t("community-rules") }}</title-block>

  </body-block>
</template>

<style scoped lang="css">

</style>