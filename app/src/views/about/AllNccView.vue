<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

setTitle("nav.all-our-sites", "i18n");
</script>

<template>

  <body-block>

    <title-block>{{ $t("nav.all-ncc-sites") }}</title-block>

    <div class="text-3xl p-5">
      {{ $t("nav.discover-resource") }}
    </div>

    <div class="text-xl p-5">
      {{ $t("nav.discover-chinese-part1") }}
      <anchor href="https://dotnet-china.com"
              target="_blank"
              :title="$t('nav.discover-chinese-tip')"
              mode="classic"
              class="underline hover:underline underline-offset-4 hover:text-purple-700 hover:dark:text-purple-200">
        {{ $t("nav.discover-chinese-part2") }}
      </anchor>
      {{ $t("nav.discover-chinese-part3") }}
    </div>

  </body-block>

</template>

<style scoped lang="css">

</style>