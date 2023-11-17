<script setup lang="ts">
import { computed, ref } from "vue";
import { tween } from "shifty";

const props = withDefaults(defineProps<{
  from?: number;
  to: number;
  duration?: number;
}>(), {
  from: 0,
  duration: 500
});

const target = ref(props.to);

tween({
  from: { x: props.from },
  to: { x: props.to },
  delay: 1000,
  duration: props.duration,
  easing: "easeOutExpo",
  render: state => {
    const n = Math.round(Number.parseFloat(state["x"]));
    // if (n > props.to)
    //   return;
    target.value = n;
  }
});

const output = computed(() => {
  return target.value;
});

</script>

<template>

  <span>{{ output }}<slot></slot></span>

</template>

<style scoped lang="css">

</style>