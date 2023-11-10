<script setup lang="ts">
import {computed, reactive} from "vue";
import {usePreferredDark} from "@vueuse/core";
import type {LicenseModel} from "@/apis/QueryProjectLicelseApi";
import {loadLicensesAsync} from "@/hooks/useProjectToolkits";

import {BalanceTwo, Correct, Error, Info} from "@icon-park/vue-next";
import BodyBlock from "@/components/blocks/BodyBlock.vue";

const props = withDefaults(defineProps<{
  license?: string
}>(), {
  license: ''
});

const currentPrefersDarkMode = usePreferredDark();
const licenses = reactive<LicenseModel[]>([]);

const updateLicenses = (models: LicenseModel[]) => {
  licenses.length = 0;
  for (const model of models) {
    licenses.push(model);
  }
}

loadLicensesAsync(updateLicenses);

const hasLicense = computed(() => {
  return !!props.license && props.license.length > 0;
});

const useLicense = computed(() => {
  return licenses.find(license => license.id === props.license);
});

const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
      ? '#f8f8f8'
      : '#000000';
});

</script>

<template>
  <body-block v-if="hasLicense" class="license-block">

    <div class="grid grid-cols-5 gap-4 p-5">
      <div class="col-span-2">
        <div class="flex">
          <div class="flex-none">
            <balance-two class="inline-block align-middle" theme="filled" size="28" :fill="useIconColor" :strokeWidth="2"/>
          </div>
          <div class="flex-1">
            <span class="text-2xl inline-block align-middle px-3">{{ useLicense?.name }}</span>
          </div>
        </div>
        <div class="text-xs text-gray-500 p-3 pl-0">
          {{ useLicense?.description }}
        </div>
      </div>
      <div class="license-terms">
        <span class="title">Permissions</span>
        <ul>
          <li v-for="permission in useLicense?.permissions" :key="permission" class="permission">
            <correct class="inline-block align-middle" theme="filled" size="12" fill="#9013fe" :strokeWidth="2"/>
            {{ permission }}
          </li>
        </ul>
      </div>
      <div class="license-terms">
        <span class="title">Limitations</span>
        <ul>
          <li v-for="limitation in useLicense?.limitations" :key="limitation" class="limitation">
            <error class="inline-block align-middle" theme="filled" size="12" fill="#9013fe" :strokeWidth="2"/>
            {{ limitation }}
          </li>
        </ul>
      </div>
      <div class="license-terms">
        <span class="title">Conditions</span>
        <ul>
          <li v-for="condition in useLicense?.conditions" :key="condition" class="condition">
            <info class="inline-block align-middle" theme="filled" size="12" fill="#9013fe" :strokeWidth="2"/>
            {{ condition }}
          </li>
        </ul>
      </div>
    </div>

  </body-block>
</template>

<style scoped lang="css">
.license-block {
  @apply my-6 p-5 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
}

.license-terms {
  @apply text-sm;
}

.license-terms .title {
  @apply inline-block pb-3 font-bold;
}

.license-terms li {
  @apply text-xs text-gray-500;
}
</style>