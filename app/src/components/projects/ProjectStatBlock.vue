<script setup lang="ts">

import Anchor from "@/components/basic/AnchorElement.vue";
import AnimateNumber from "@/components/basic/AnimateNumber.vue";
</script>

<template>

  <div class="responsive-width grid lg:grid-cols-4 grid-cols-2 px-6">

    <anchor href="/top-level-projects" :title="$t('project-top-level-full')" mode="classic" class="number-card block">
        <span class="number">
          <animate-number :from="0" :to="4" duration="500" />
        </span>
      <span class="desc">
          <span class="">Top-Level</span>
          <span>Projects</span>
        </span>
    </anchor>

    <anchor href="/projects" :title="$t('project-all-full')" mode="classic" class="number-card block">
        <span class="number">
          <animate-number :from="0" :to="32" duration="500" />
        </span>
      <span class="desc">
          <span class="">Member</span>
          <span>Projects</span>
        </span>
    </anchor>

    <div class="number-card cursor-default">
        <span class="number">
          <animate-number :from="0" :to="100" duration="3000">+</animate-number>
        </span>
      <span class="desc">
          <span class="">NCC</span>
          <span>Members</span>
        </span>
    </div>

    <div class="number-card cursor-default">
        <span class="number">
          <animate-number :from="0" :to="100" duration="3000">M+</animate-number>
        </span>
      <span class="desc">
          <span class="">NuGet</span>
          <span>Downloads</span>
        </span>
    </div>

  </div>

</template>

<style scoped lang="css">

.number-card {
  @apply uppercase;

  .number {
    @apply text-5xl font-bold;
    @apply inline-block align-middle;
  }

  .desc {
    @apply text-left font-medium;
    @apply ml-3 inline-block align-middle;

    & span {
      @apply block;
    }
  }
}

</style>