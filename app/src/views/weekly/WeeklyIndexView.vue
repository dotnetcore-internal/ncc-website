<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

setTitle("media-weekly", "i18n");
</script>

<template>
  <body-block>

    <title-block>{{ $t("media-weekly") }}</title-block>

  </body-block>
</template>

<style scoped lang="css">

</style>