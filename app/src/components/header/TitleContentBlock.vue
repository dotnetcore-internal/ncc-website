<script setup lang="ts">
import {useUiStore} from "@/stores/uiStore";

import Desktop from "@/components/header/TitleContentForDesktop.vue";
import Mobile from "@/components/header/TitleContentForMobile.vue";

const uiStore = useUiStore();

</script>

<template>

  <mobile v-if="uiStore.isMobileMode">
    <template #default>
      <slot></slot>
    </template>
    <template #col1>
      <slot name="col1"></slot>
    </template>
    <template #col2>
      <slot name="col2"></slot>
    </template>
    <template #col3>
      <slot name="col3"></slot>
    </template>
  </mobile>

  <desktop v-else>
    <template #default>
      <slot></slot>
    </template>
    <template #col1>
      <slot name="col1"></slot>
    </template>
    <template #col2>
      <slot name="col2"></slot>
    </template>
    <template #col3>
      <slot name="col3"></slot>
    </template>
  </desktop>


</template>

<style scoped lang="css">

</style>