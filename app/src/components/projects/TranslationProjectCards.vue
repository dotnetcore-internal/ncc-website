<script setup lang="ts">
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import ProjectCards from "@/components/projects/ProjectCards.vue";
</script>

<template>

  <div class="">
    <div class="responsive-width">

      <title-block h1-mode="false"
                   color-mode="auto"
                   :with-horizontal-rule="true"
                   :is-font-black="false">
        {{ $t('our-translation-projects-title') }}
      </title-block>

      <placeholder-block height="20px"/>

      <project-cards for="translation"/>

    </div>
  </div>

</template>

<style scoped lang="css">

</style>