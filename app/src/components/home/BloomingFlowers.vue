<script setup lang="ts">

import SectionHead from "@/components/home/SectionHeadBlock.vue";
import ProjectStatBlock from "@/components/projects/ProjectStatBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
</script>

<template>

  <div class="bg-white-black pb-16">

    <placeholder-block height="2rem" />

    <div class="responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10">

      <section-head>
        {{ $t("home.growing-for-ecosystem") }}
      </section-head>

      <div class="independently-operated-by">
        <span v-html="$t('home.independently-operated-by')"></span>
      </div>

    </div>

    <project-stat-block />

    <placeholder-block height="2.5rem" />

  </div>

</template>

<style scoped lang="css">

.independently-operated-by {
  @apply self-end;
  @apply p-5 px-8;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;

  :global(.highlight) {
    @apply font-bold underline underline-offset-4 decoration-2 decoration-double decoration-pink-600/50;
  }
}

</style>