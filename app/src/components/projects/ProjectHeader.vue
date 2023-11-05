<script setup lang="ts">
import {computed} from "vue";
import {usePreferredDark} from '@vueuse/core'
import {RightSmallUp} from "@icon-park/vue-next";

import {useUiStore} from "@/stores/uiStore";

import Anchor from "@/components/basic/AnchorElement.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const uiStore = useUiStore();
const currentPrefersDarkMode = usePreferredDark();

const props = withDefaults(defineProps<{
  featureKey: 'all' | 'top-level' | 'archived' | 'maturity-model'
}>(), {});

const isMobileMode = computed(() => {
  return uiStore.isMobileMode;
});

const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
      ? '#f8f8f8'
      : '#000000';
});
</script>

<template>

  <placeholder-block height="20px" v-show="!isMobileMode"/>

  <div class="project-titles grid grid-cols-5 w-5/6 mx-auto" v-show="!isMobileMode">

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

    <anchor class="title"
            href="https://contribute.ncc.work/project-join-ncc"
            target="_blank"
            :title="$t('project-how-to-join-us')"
            mode="classic">
      {{ $t('project-contribute') }}
      <right-small-up class="title-arrow" theme="filled" size="18" :fill="useIconColor"/>
    </anchor>

  </div>

  <div v-show="isMobileMode">
    <title-block :with-placeholder="false">
      <span v-if="featureKey === 'all'">{{ $t('project-all-full') }}</span>
      <span v-else-if="featureKey === 'top-level'">{{ $t('project-top-level-full') }}</span>
      <span v-else-if="featureKey === 'archived'">{{ $t('project-archived-full') }}</span>
      <span v-else-if="featureKey === 'maturity-model'">{{ $t('project-maturity-model-full') }}</span>
      <span v-else>FeatureKey is Error</span>
    </title-block>
  </div>

  <div class="p-5 mx-auto" :class="{'project-desc': !isMobileMode}">
    <span v-if="featureKey === 'all'">{{ $t('project-all-desc') }}</span>
    <span v-else-if="featureKey === 'top-level'">{{ $t('project-top-level-desc') }}</span>
    <span v-else-if="featureKey === 'archived'">{{ $t('project-archived-desc') }}</span>
    <span v-else-if="featureKey === 'maturity-model'">{{ $t('project-maturity-model-desc') }}</span>
    <span v-else>FeatureKey is Error</span>
  </div>

  <placeholder-block height="20px"/>

</template>

<style scoped lang="css">
.project-titles {
  @apply border-t border-b border-purple-300 dark:border-purple-900;
  @apply text-center;
}

.project-desc {
  @apply text-center text-purple-900/60 dark:text-white/60;
  @apply w-5/6 cursor-default;
}

.title {
  @apply p-2 block hover:bg-purple-100/40;
}

.title-highlight {
  @apply bg-purple-100 hover:bg-purple-100;
  @apply text-purple-900 dark:text-purple-100 font-bold;
}

.title-arrow {
  @apply inline-block;
  @apply -ml-1.5 align-top;
}
</style>