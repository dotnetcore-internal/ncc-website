<script setup lang="ts">
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";
import {computed} from "vue";

const props = withDefaults(defineProps<{
  colorMode?: 'auto' | 'dark' | 'light' | 'always-dark' | 'always-light';
}>(), {
  colorMode: 'auto',
});

const titleColor = computed(() => {
  let mode = props.colorMode;
  switch (mode) {
    case 'dark':
    case "always-light":
      return 'text-white';
    case 'light':
    case "always-dark":
      return 'text-black';
    default:
      return 'text-black dark:text-white';
  }
});

</script>

<template>
  <div class="text-3xl tracking-tight p-5 pb-0" :class="titleColor">
    <slot></slot>
  </div>
  <HorizontalRuleElement :colorMode="colorMode"/>
</template>

<style scoped lang="css">

</style>