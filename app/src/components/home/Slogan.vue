<script setup lang="ts">
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
</script>

<template>

  <div class="bg-gray-900 dark:bg-fuchsia-900/20 text-white">

    <placeholder-block height="2rem" />

    <div class="responsive-width">

      <title-block h1-mode="false" color-mode="dark" :with-horizontal-rule="true" :is-font-black="false">
        {{ $t("our-slogan-title") }}
      </title-block>

      <div class="lg:text-4xl md:text-2xl sm:text-lg font-light italic px-5 pb-10">
        {{ $t('our-slogan-part1') }}<br/>
        {{ $t('our-slogan-part2') }}<br/>
        {{ $t('our-slogan-part3') }}
      </div>
    </div>

    <placeholder-block height="2rem" />

  </div>

</template>

<style scoped lang="css">

</style>