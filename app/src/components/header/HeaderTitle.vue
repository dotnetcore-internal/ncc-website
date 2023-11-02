<script setup lang="ts">
import {onMounted, watch} from "vue";
import {useWindowSize} from '@vueuse/core'
import {unlockBody} from "@/hooks/usePageToolkits";

import {useUiStore} from "@/stores/uiStore";

import TitleFrame from "@/components/header/TitleFrame.vue";
import TitleContentBlock from "@/components/header/TitleContentBlock.vue";

const uiStore = useUiStore();

const {width} = useWindowSize();

const updateMobileMode = (n: number) => {
  if (n < 1024) {
    uiStore.setMobileMode(true);
    unlockBody();
  } else {
    uiStore.setMobileMode(false);
  }
};

watch(width, (n) => {
  updateMobileMode(n);
});

onMounted(() => {
  updateMobileMode(width.value);
});

</script>

<template>

  <title-frame>

    <title-content-block>
      About
      <template #col1>1</template>
      <template #col2>2</template>
      <template #col3>3</template>
    </title-content-block>

    <title-content-block>
      Project
      <template #col1>4</template>
      <template #col2>5</template>
      <template #col3>6</template>
    </title-content-block>

    <title-content-block>
      Learning
      <template #col1>7</template>
      <template #col2>8</template>
      <template #col3>9</template>
    </title-content-block>

    <title-content-block>
      Community
      <template #col1>0</template>
      <template #col2>1</template>
      <template #col3>2</template>
    </title-content-block>

    <title-content-block>
      Resource & Media
      <template #col1>3</template>
      <template #col2>4</template>
      <template #col3>5</template>
    </title-content-block>

  </title-frame>

</template>

<style scoped lang="css">

</style>