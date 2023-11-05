<script setup lang="ts">
import {computed} from "vue";
import {useUiStore} from "@/stores/uiStore";

import Anchor from "@/components/basic/AnchorElement.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const uiStore = useUiStore();

const props = withDefaults(defineProps<{
  featureKey: 'all' | 'top-level' | 'archived' | 'maturity-model'
}>(), {});

const isMobileMode = computed(() => {
  return uiStore.isMobileMode;
});
</script>

<template>

  <placeholder-block height="20px" v-show="!isMobileMode"/>

  <div class="project-titles grid grid-cols-4 w-5/6 mx-auto" v-show="!isMobileMode">

    <anchor class="title"
            :class="{'title-highlight': featureKey === 'all'}"
            href="/projects"
            route-name="projects"
            :title="$t('project-all-full')">

      {{ $t('project-all') }}

    </anchor>

    <anchor class="title"
            :class="{'title-highlight': featureKey === 'top-level'}"
            href="/top-level-projects"
            route-name="top-level-projects"
            :title="$t('project-top-level-full')">

      {{ $t('project-top-level') }}

    </anchor>

    <anchor class="title"
            :class="{'title-highlight': featureKey === 'archived'}"
            href="/archived-projects"
            route-name="archived-projects"
            :title="$t('project-archived-full')">

      {{ $t('project-archived') }}

    </anchor>

    <anchor class="title"
            :class="{'title-highlight': featureKey === 'maturity-model'}"
            href="/project-maturity-model"
            route-name="project-maturity-model"
            :title="$t('project-maturity-model')">
      {{ $t('project-maturity-model') }}

    </anchor>

  </div>

  <placeholder-block height="20px" v-show="!isMobileMode"/>

  <div v-show="isMobileMode">
    <title-block>
      <slot></slot>
    </title-block>
  </div>

</template>

<style scoped lang="css">
.project-titles {
  @apply border border-purple-300 rounded-lg;
  @apply text-center;
}

.title {
  @apply p-2 block;
  @apply bg-gradient-to-b hover:from-purple-200/10 hover:to-purple-400/10;
}

.title-highlight {
  @apply bg-purple-300/30 hover:bg-purple-300/30;
  @apply text-purple-600 font-bold;
}
</style>