<script setup lang="ts">
import {nextTick, onMounted} from "vue";
import {useEmitter} from "@/hooks/useEmitter";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import LicenseBlock from "@/components/projects/LicenseBlock.vue";
import IFrameBlock from "@/components/basic/IFrameBlock.vue";

const emitter = useEmitter();

onMounted(() => {
  nextTick(() => {
    emitter.emit('toChangeProjectPaper', {paper: 'license'});
  });
});

</script>

<template>

  <body-block class="project-paper">

    License

  </body-block>

  <body-block class="project-paper">

    <license-block />

  </body-block>

  <body-block class="project-paper">

    <div>URL 展示与进度条显示</div>

   <i-frame-block></i-frame-block>

  </body-block>

</template>

<style scoped lang="css">

.project-paper {
  @apply my-6 p-5 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

</style>