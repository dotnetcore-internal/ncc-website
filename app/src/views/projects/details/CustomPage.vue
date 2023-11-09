<script setup lang="ts">
import {nextTick, onMounted, onUnmounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useEmitter} from "@/hooks/useEmitter";
import {useRandomNumber} from "@/hooks/useMath";
import {useProjectStore} from "@/stores/projectStore";

import BodyBlock from "@/components/blocks/BodyBlock.vue";

const route = useRoute();
const router = useRouter();
const emitter = useEmitter();
const projectStore = useProjectStore();
const randomPageCode = useRandomNumber(1, 100000);

onMounted(() => {

  emitter.on(`toBind404Page${randomPageCode}`, (e) => {
    const event = e as { akaId: string };
    router.push({path: `/projects/${event.akaId}/paper-not-found`});
  });

  nextTick(() => {
    emitter.emit('toChangeProjectPaper', {paper: route.params['customName'], broadcast: randomPageCode});
  });
});

onUnmounted(() => {
  emitter.off(`toBind404Page${randomPageCode}`);
});
</script>

<template>

  <body-block>
    CustomPage
  </body-block>
</template>

<style scoped lang="css">

</style>