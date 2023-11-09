<script setup lang="ts">
import {nextTick, onMounted} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import BodyBlock from "@/components/blocks/BodyBlock.vue";

const emitter = useEmitter();

onMounted(() => {
  nextTick(() => {
    emitter.emit('toChangeProjectPaper', {paper: 'get-started'});
  });
});

</script>

<template>

  <body-block class="project-paper">

    Get Started

  </body-block>

</template>

<style scoped lang="css">

.project-paper {
  @apply my-6 p-5 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

</style>