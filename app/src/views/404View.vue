<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

setTitle('Page Not Found');
</script>

<template>
  <body-block>

    <title-block>404</title-block>

  </body-block>
</template>

<style scoped lang="css">

</style>