<script setup lang="ts">

import {onMounted, ref} from "vue";
import WaveLoading from "@/components/basic/WaveLoading.vue";

const props = withDefaults(defineProps<{
  rawUrl: string
}>(), {
  rawUrl: ''
})

const loading = ref(true);
const noLicenseFile = ref(false);

const rawContent = ref('');

const isLarge = ref(false);

const switchSize = () => {
  isLarge.value = !isLarge.value;
}

const toExpand = () => {
  isLarge.value = true;
}

onMounted(async () => {

  if (props.rawUrl.length === 0) {
    rawContent.value = 'No license file';
    loading.value = false;
    noLicenseFile.value = true;
  } else {

    try {
      const res = await fetch(props.rawUrl);
      if (res.ok) {
        rawContent.value = await res.text();
      } else {
        rawContent.value = 'Error loading license file';
      }
    } catch (error) {
      rawContent.value = 'Error loading license file';
    } finally {
      loading.value = false;
    }
  }

})

</script>

<template>

  <wave-loading v-if="loading"/>

  <div v-else class="raw-wrap relative" :class="{'raw-large': isLarge, 'raw-small': !isLarge}">

    <pre class="raw-pre">{{ rawContent }}</pre>

    <div v-show="!isLarge && !noLicenseFile" class="bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 w-full h-24"></div>

    <div v-show="!isLarge && !noLicenseFile" class="absolute bottom-1.5 w-full text-center cursor-default" @click="toExpand" :title="$t('show-more')">
      <span class="bg-black text-white dark:bg-white dark:text-black text-xs px-4 py-0.5 rounded-xl">{{ $t('show-more') }}</span>
    </div>

    <div v-show="!noLicenseFile" class="text-xs absolute top-0 right-0 z-50 cursor-default" @click="switchSize">
      {{ isLarge ? $t('collapse') : $t('expand') }}
    </div>

  </div>

</template>

<style scoped lang="css">

.raw-large {
  @apply h-auto;
}

.raw-small {
  @apply h-24 overflow-hidden;
}

.raw-pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.text-at-bottom {
  @apply text-center w-max;
  display: table-cell;
  vertical-align: bottom;
  text-align: center;
}
</style>