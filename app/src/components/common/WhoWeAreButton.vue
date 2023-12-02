<script setup lang="ts">
import { go } from "@/hooks/usePageToolkits";

const props = withDefaults(defineProps<{
  mode?: "inline-block" | "block";
  needRefresh?: boolean;
}>(), {
  mode: "inline-block",
  needRefresh: true
});
</script>

<template>
  <a v-if="needRefresh"
     href="/about/who-we-are"
     class="text-white font-bold text-center px-9 py-3 rounded-full bg-gradient-to-br from-pink-700 to-purple-700"
     :class="{block: props.mode === 'block', 'inline-block': props.mode === 'inline-block'}">
    <span v-if="$slots.default">
      <slot></slot>
      </span>
    <span v-else>About NCC</span>
  </a>

  <a v-else
     href="/about/who-we-are"
     @click.prevent="go('about/who-we-are')"
     class="text-white font-bold text-center px-9 py-3 rounded-full bg-gradient-to-br from-pink-700 to-purple-700"
     :class="{block: props.mode === 'block', 'inline-block': props.mode === 'inline-block'}">
    <span v-if="$slots.default">
      <slot></slot>
      </span>
    <span v-else>About NCC</span>
  </a>
</template>

<style scoped lang="css">

</style>