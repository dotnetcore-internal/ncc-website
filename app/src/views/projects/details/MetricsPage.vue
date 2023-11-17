<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { useEmitter } from "@/hooks/useEmitter";
import BodyBlock from "@/components/blocks/BodyBlock.vue";

const emitter = useEmitter();

onMounted(() => {
  nextTick(() => {
    emitter.emit("toChangeProjectPaper", { paper: "metrics" });
  });
});

</script>

<template>

  <body-block class="content-paper">

    Metrics

  </body-block>

</template>

<style scoped lang="css">


</style>