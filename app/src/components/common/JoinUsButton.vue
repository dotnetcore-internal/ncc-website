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
     href="/about/join"
     class="text-white text-sm font-bold text-center px-9 py-2 rounded-full bg-gradient-to-br from-pink-700 to-purple-700"
     :class="{block: props.mode === 'block', 'inline-block': props.mode === 'inline-block'}">
    <slot>
      {{ $t("join-at-header-default") }}
    </slot>
  </a>

  <a v-else
     href="/about/join"
     @click.prevent="go('about/join')"
     class="text-white text-sm font-bold text-center px-9 py-2 rounded-full bg-gradient-to-br from-pink-700 to-purple-700"
     :class="{block: props.mode === 'block', 'inline-block': props.mode === 'inline-block'}">
    <slot>
      {{ $t("join-at-header-default") }}
    </slot>
  </a>
</template>

<style scoped lang="css">

</style>