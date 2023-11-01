<script setup lang="ts">
import {computed, ref} from "vue";
import {useElementVisibility, usePreferredDark} from '@vueuse/core'

import {go} from "@/hooks/usePageToolkits";

import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";
import JoinUsButton from "@/components/common/JoinUsButton.vue";
import {Close, HamburgerButton} from "@icon-park/vue-next";

const currentPrefersDarkMode = usePreferredDark();

const useLogoUrl = computed(() => {
  return currentPrefersDarkMode.value
      ? '/images/logo-header-dark.png'
      : '/images/logo-header-light.png';
});

const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
      ? '#f8f8f8'
      : '#000000';
});

const target = ref(null);
const targetIsVisible = useElementVisibility(target);

const useHeaderClass = computed(() => {
  return targetIsVisible.value
      ? 'backdrop-blur-md bg-white/30 dark:bg-black/30'
      : 'bg-white dark:bg-black';
});

//region Mobile Mode

const displayMobileMenu = ref(false);

const switchMobileMenu = () => {
  if (displayMobileMenu.value) {
    document.querySelector("body")?.setAttribute('style', 'overflow:unset; height:auto;');
  } else {
    document.querySelector("body")?.setAttribute('style', 'overflow:hidden; height:100vh;');
  }
  displayMobileMenu.value = !displayMobileMenu.value;
};

//endregion
</script>

<template>

  <header :class="useHeaderClass"
          class="h-20 w-full shadow-md fixed left-0 top-0 right-0 z-50">
    <div class="w-0.5 h-0.5 lg:block hidden" ref="target"></div>

    <div class="responsive-width" v-show="targetIsVisible">
      <left-right-layout>
        <template #left>
          <div class="inline-block align-top">
            <a href="/" @click.prevent="go('home')" title=".NET Core Community">
              <img :src="useLogoUrl" width="180" alt="NCC"/>
            </a>
          </div>
          <div class="text-gray-500 text-sm text-center ml-5 inline-block">
            <a href="#" @click.prevent class="title-item">About</a>
            <a href="#" @click.prevent class="title-item">Projects</a>
            <a href="#" @click.prevent class="title-item">Learning</a>
            <a href="#" @click.prevent class="title-item">Community</a>
            <a href="#" @click.prevent class="title-item">Resource & Media</a>
          </div>
        </template>

        <template #right>
          <div class="mx-auto mt-6">
            <join-us-button/>
          </div>
        </template>

      </left-right-layout>

    </div>

    <div class="responsive-width" v-show="!targetIsVisible">
      <left-right-layout>

        <template #left>
          <div class="inline-block align-top">
            <a href="/" @click.prevent="go('home')" title=".NET Core Community">
              <img :src="useLogoUrl" width="180" alt="NCC"/>
            </a>
          </div>
        </template>

        <template #right>
          <div class="mx-auto mt-8" @click="switchMobileMenu">
            <hamburger-button v-show="!displayMobileMenu" theme="filled" size="32" :fill="useIconColor"/>
            <close v-show="displayMobileMenu" theme="filled" size="32" :fill="useIconColor"/>
          </div>
        </template>

      </left-right-layout>
    </div>
  </header>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div id="mobile-menu" v-show="displayMobileMenu">
      12
    </div>
  </transition>

</template>

<style scoped lang="css">
.title-item {
  @apply inline-block;
  @apply h-20 mx-2 xl:px-7 lg:px-5 py-3;
  @apply font-bold hover:text-purple-700 dark:hover:text-purple-100;
  @apply hover:border-b-4 border-purple-800 dark:border-purple-500;
  line-height: 3.5rem;
}

#mobile-menu {
  @apply fixed top-0 left-0 right-0 bottom-0;
  @apply z-30;
  @apply transition-all duration-300;
  @apply overflow-hidden;
  @apply flex flex-col justify-center items-center;
  @apply pointer-events-none;
  @apply bg-white dark:bg-black;
}
</style>