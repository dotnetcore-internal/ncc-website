<script setup lang="ts">
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
</script>

<template>

  <div class="bg-gray-200/50 dark:bg-purple-900/10 dark:text-white">
    <div class="responsive-width">

      <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">Our Partners & Sponsors</title-block>

      <a href="https://www.jetbrains.com/?from=.NETCoreCommunity(NCC)" target="_blank" title="JetBrains" class="partner-item">
        <img src="/images/partners/jetbrains.svg" alt="JetBrains" class="w-full h-full">
      </a>

      <a href="https://www.myget.org/" target="_blank" title="MyGet" class="partner-item">
        <img src="/images/partners/myget.svg" alt="MyGet" class="w-full h-full">
      </a>

      <a href="https://www.oreilly.com/pub/cpc/323206" target="_blank" title="MyGet" class="partner-item">
        <img src="/images/partners/oreilly.png" alt="O'REILLY" class="w-full h-full">
      </a>

      <a href="https://www.material-theme.com/" target="_blank" title="MyGet" class="partner-item">
        <img src="/images/partners/material-theme.png" alt="Material Theme" class="w-full h-full">
      </a>

      <placeholder-block height="1.25rem"/>

    </div>

  </div>

</template>

<style scoped lang="css">

.partner-item {
  @apply w-20 h-20 m-5 inline-block;
}

</style>