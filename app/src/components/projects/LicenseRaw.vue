<script setup lang="ts">

import {onMounted, ref} from "vue";
import WaveLoading from "@/components/basic/WaveLoading.vue";

const props = withDefaults(defineProps<{
  rawUrl: string
}>(), {
  rawUrl: ''
})

const loading = ref(true);
const success = ref(false);
const noLicenseFile = ref(false);

const rawContent = ref('');

const isLarge = ref(false);

const switchSize = () => {
  isLarge.value = !isLarge.value;
}

const toExpand = () => {
  isLarge.value = true;
}

const toLoadLicense = async () => {
  loading.value = true;
  success.value = false;
  noLicenseFile.value = false;

  if (props.rawUrl.length === 0) {
    rawContent.value = 'No license file';
    loading.value = false;
    success.value = false;
    noLicenseFile.value = true;
  } else {

    try {
      const res = await fetch(props.rawUrl);
      if (res.ok) {
        rawContent.value = await res.text();
        success.value = true;
      } else {
        rawContent.value = 'Error loading license file';
        success.value = false;
      }
    } catch (error) {
      rawContent.value = 'Error loading license file';
      success.value = false;
    } finally {
      loading.value = false;
    }
  }
};

onMounted(async () => {

  await toLoadLicense();

})

</script>

<template>

  <wave-loading v-if="loading"/>

  <div v-else class="raw-wrap relative overflow-hidden" :class="{'raw-large': isLarge, 'raw-small': !isLarge}">

    <pre class="raw-pre">{{ rawContent }}</pre>

    <div v-show="!isLarge && !noLicenseFile && success" class="bg-gradient-to-b from-transparent to-white dark:to-black absolute bottom-0 left-0 w-full h-32"></div>

    <div v-show="!isLarge && !noLicenseFile && success" class="absolute bottom-5 w-full text-center cursor-default" @click="toExpand" :title="$t('show-more')">
      <span class="bg-black text-white dark:bg-white/50 dark:text-black text-xs px-4 py-0.5 rounded-xl">{{ $t('show-more') }}</span>
    </div>

    <div v-show="!noLicenseFile && success" class="text-xs absolute top-5 right-5 z-50 cursor-default" @click="switchSize">
      {{ isLarge ? $t('collapse') : $t('expand') }}
    </div>

    <div v-if="!success" class="text-xs absolute top-5 right-5 z-50 cursor-default" @click="toLoadLicense">
      {{ $t('reload-license') }}
    </div>

  </div>

</template>

<style scoped lang="css">

.raw-large {
  @apply h-auto;
  @apply transition-all ease-in-out duration-1000;
}

.raw-small {
  @apply h-32;
  @apply transition-all ease-in-out duration-1000;
}

.raw-pre {
  @apply p-5;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>