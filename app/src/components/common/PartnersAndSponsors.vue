<script setup lang="ts">
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
</script>

<template>

  <div class="bg-gray-100 dark:bg-gray-900/50 dark:text-white">
    <div class="responsive-width">

      <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">Our Partners & Sponsors</title-block>

      <div class="p-5"> Content</div>

      <placeholder-block height="1.25rem"/>
    </div>

  </div>

</template>

<style scoped lang="css">

</style>