<script setup lang="ts">
import {go} from "@/hooks/usePageToolkits";

const props = withDefaults(defineProps<{
  mode?: 'inline-block' | 'block';
}>(), {
  mode: 'inline-block',
});
</script>

<template>
  <a href="/about/join"
     @click.prevent="go('about/join')"
     class="text-white text-sm font-bold text-center px-9 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
     :class="{block: props.mode === 'block', 'inline-block': props.mode === 'inline-block'}">
    <span v-if="$slots.default">
      <slot></slot>
      </span>
    <span v-else>Join</span>
  </a>
</template>

<style scoped lang="css">

</style>