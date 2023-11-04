<script setup lang="ts">
import {inject, ref} from "vue";
import {useRoute} from "vue-router";
import {onClickOutside} from "@vueuse/core";

import {Earth} from "@icon-park/vue-next";
import {setLocaleToCookie} from "@/hooks/usePageToolkits";
import {hasRegisteredPath, loadLocaleMessages, setI18nLanguage, toFixedPath} from "@/i18n";

import TitleBlock from "@/components/blocks/TitleBlock.vue";

const i18n = inject('$i18n');
const route = useRoute();

const target = ref(null);
const displayLanguagesBox = ref(false);

onClickOutside(target, () => hideLanguagesBox());

const hideLanguagesBox = () => {
  displayLanguagesBox.value = false;
};

const switchLanguagesBox = () => {
  displayLanguagesBox.value = !displayLanguagesBox.value;
};

const setLanguage = async (locale: string) => {

  hideLanguagesBox();

  const path = toFixedPath(route.path);
  //to check whether the resource is registered
  //if registered, the resource has been loaded into the i18n manager
  //and return.
  if (!hasRegisteredPath(path, locale)) {

    // load locale messages
    await loadLocaleMessages(i18n, locale, path);
  }

  //force to load common language resource
  if (!hasRegisteredPath('/', locale)) {
    // load locale messages
    await loadLocaleMessages(i18n, locale, '/');
  }

  // set i18n language
  setI18nLanguage(i18n, locale);

  setLocaleToCookie(locale);

  console.log(locale);
}
</script>

<template>

  <div class="p-5 py-7 pr-0 mx-auto align-middle float-right cursor-pointer">
    <earth theme="outline" size="24" fill="#f8f8f8" :strokeWidth="2" @click="switchLanguagesBox" :title="$t('i18n-switch-tip')"/>
  </div>

  <div class="clear-both"></div>

  <div class="fixed left-0 top-0 right-0 bottom-0 z-40" v-show="displayLanguagesBox"></div>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster">

    <div ref="target" class="languages-box" v-show="displayLanguagesBox">

      <title-block h1-mode="false" color-mode="light" :with-horizontal-rule="true" :is-font-black="false">
        <div class="text-2xl text-center">{{ $t('i18n-switch-title') }}</div>
      </title-block>

      <div class="columns-1 mx-auto">
        <span class="languages-item" @click="setLanguage('zh')">中文（简体）</span>
        <span class="languages-item" @click="setLanguage('zh-tw')">中文（繁体）</span>
        <span class="languages-item" @click="setLanguage('en')">English</span>
      </div>

    </div>

  </transition>

</template>

<style scoped lang="css">
.languages-box {
  @apply fixed left-36 top-36 right-36 bottom-36 p-5 z-50;
  @apply bg-white/60 text-black;
  @apply backdrop-blur-md rounded-2xl shadow-2xl;
}

.languages-item {
  @apply p-1 block m-3;
  @apply text-center;
  @apply hover:bg-purple-200/30;
  @apply cursor-pointer;
}
</style>