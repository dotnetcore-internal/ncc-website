<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {useElementVisibility, useMouseInElement, usePreferredDark} from '@vueuse/core'

import {go} from "@/hooks/usePageToolkits";

import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";
import JoinUsButton from "@/components/common/JoinUsButton.vue";
import {Close, Down, HamburgerButton} from "@icon-park/vue-next";

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

watch(
    targetIsVisible,
    (n, o) => {
      if (n) {
        document.querySelector("body")?.setAttribute('style', 'overflow:unset; height:auto;');
      }
    }
)

//region Mobile Mode

const displayMobileMenu = ref(false);

const switchMobileMenu = () => {
  if (displayMobileMenu.value) {
    document.querySelector("body")?.setAttribute('style', 'overflow:unset; height:auto;');
  } else {
    document.querySelector("body")?.setAttribute('style', 'overflow:hidden; height:100%;');
  }
  displayMobileMenu.value = !displayMobileMenu.value;
};

//endregion

//region PC Mode

const aboutTarget = ref(null);
const aboutPanelTarget = ref(null);
const {isOutside: aboutIsOutside} = useMouseInElement(aboutTarget);
const {isOutside: aboutPanelIsOutside} = useMouseInElement(aboutPanelTarget);

const displayAboutPanel = computed(() => {
  console.log(!aboutIsOutside.value || !aboutPanelIsOutside.value);
  return !aboutIsOutside.value || !aboutPanelIsOutside.value;
});

const projectTarget = ref(null);
const projectPanelTarget = ref(null);
const {isOutside: projectIsOutside} = useMouseInElement(projectTarget);
const {isOutside: projectPanelIsOutside} = useMouseInElement(projectPanelTarget);

const displayProjectPanel = computed(() => {
  console.log(!projectIsOutside.value || !projectPanelIsOutside.value);
  return !projectIsOutside.value || !projectPanelIsOutside.value;
});

const learningTarget = ref(null);
const learningPanelTarget = ref(null);
const {isOutside: learningIsOutside} = useMouseInElement(learningTarget);
const {isOutside: learningPanelIsOutside} = useMouseInElement(learningPanelTarget);

const displayLearningPanel = computed(() => {
  console.log(!learningIsOutside.value || !learningPanelIsOutside.value);
  return !learningIsOutside.value || !learningPanelIsOutside.value;
});

const communityTarget = ref(null);
const communityPanelTarget = ref(null);
const {isOutside: communityIsOutside} = useMouseInElement(communityTarget);
const {isOutside: communityPanelIsOutside} = useMouseInElement(communityPanelTarget);

const displayCommunityPanel = computed(() => {
  console.log(!communityIsOutside.value || !communityPanelIsOutside.value);
  return !communityIsOutside.value || !communityPanelIsOutside.value;
});

const resourceTarget = ref(null);
const resourcePanelTarget = ref(null);
const {isOutside: resourceIsOutside} = useMouseInElement(resourceTarget);
const {isOutside: resourcePanelIsOutside} = useMouseInElement(resourcePanelTarget);

const displayResourcePanel = computed(() => {
  console.log(!resourceIsOutside.value || !resourcePanelIsOutside.value);
  return !resourceIsOutside.value || !resourcePanelIsOutside.value;
});

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
            <a href="#" @click.prevent class="title-item" ref="aboutTarget">About</a>
            <a href="#" @click.prevent class="title-item" ref="projectTarget">Projects</a>
            <a href="#" @click.prevent class="title-item" ref="learningTarget">Learning</a>
            <a href="#" @click.prevent class="title-item" ref="communityTarget">Community</a>
            <a href="#" @click.prevent class="title-item" ref="resourceTarget">Resource & Media</a>
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
          <div class="inline-block align-top mt-2 ml-4">
            <a href="/" @click.prevent="go('home')" title=".NET Core Community">
              <img :src="useLogoUrl" width="140" alt="NCC"/>
            </a>
          </div>
        </template>

        <template #right>
          <div class="mr-8 mt-8 cursor-pointer" @click="switchMobileMenu">
            <hamburger-button v-show="!displayMobileMenu" theme="filled" size="28" :fill="useIconColor"/>
            <close v-show="displayMobileMenu" theme="filled" size="28" :fill="useIconColor"/>
          </div>
        </template>

      </left-right-layout>
    </div>
  </header>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div id="pc-menu-about" class="pc-menu" ref="aboutPanelTarget" v-show="targetIsVisible && displayAboutPanel">
      About
    </div>
  </transition>
  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">

    <div id="pc-menu-projects" class="pc-menu" ref="projectPanelTarget" v-show="targetIsVisible && displayProjectPanel">
      Project
    </div>
  </transition>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div id="pc-menu-learning" class="pc-menu" ref="learningPanelTarget" v-show="targetIsVisible && displayLearningPanel">
      Learning
    </div>
  </transition>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div id="pc-menu-community" class="pc-menu" ref="communityPanelTarget" v-show="targetIsVisible && displayCommunityPanel">
      Community
    </div>
  </transition>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div id="pc-menu-resource" class="pc-menu" ref="resourcePanelTarget" v-show="targetIsVisible && displayResourcePanel">
      Resource & Media
    </div>
  </transition>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
    <div id="mobile-menu" v-show="!targetIsVisible && displayMobileMenu">
      <div class="fixed top-20 left-0 right-0 bottom-0 overflow-scroll">
        <div class="responsive-width">

          <ul class="title-ul">
            <li class="title-li-item">
              <left-right-layout>
                <template #left>About</template>
                <template #right>
                  <div class="m-3">
                    <down theme="filled" size="16" :fill="useIconColor"/>
                  </div>
                </template>
              </left-right-layout>
            </li>
            <li class="title-li-item">
              <left-right-layout>
                <template #left>Projects</template>
                <template #right>
                  <div class="m-3">
                    <down theme="filled" size="16" :fill="useIconColor"/>
                  </div>
                </template>
              </left-right-layout>
            </li>
            <li class="title-li-item">
              <left-right-layout>
                <template #left>Learning</template>
                <template #right>
                  <div class="m-3">
                    <down theme="filled" size="16" :fill="useIconColor"/>
                  </div>
                </template>
              </left-right-layout>
            </li>
            <li class="title-li-item">
              <left-right-layout>
                <template #left>Community</template>
                <template #right>
                  <div class="m-3">
                    <down theme="filled" size="16" :fill="useIconColor"/>
                  </div>
                </template>
              </left-right-layout>
            </li>
            <li class="title-li-item">
              <left-right-layout>
                <template #left>Resource & Media</template>
                <template #right>
                  <div class="m-3">
                    <down theme="filled" size="16" :fill="useIconColor"/>
                  </div>
                </template>
              </left-right-layout>
            </li>
          </ul>

          <div class="px-10">
            <join-us-button mode="block" :need-refresh="true">
              <span class="text-lg">JOIN</span>
            </join-us-button>
          </div>

        </div>

      </div>
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

.title-ul {
  @apply p-10;
}

.title-li-item {
  @apply block;
  @apply dark:text-white;
  @apply border-b border-gray-200 dark:border-gray-700;;
  line-height: 3rem;
}

.pc-menu {
  @apply fixed w-full top-20 left-0 right-0;
  @apply shadow-md shadow-gray-200 dark:shadow-black;
  @apply bg-white dark:bg-black;
  height: 36rem;
}

#mobile-menu {
  @apply fixed top-0 left-0 right-0 bottom-0;
  @apply z-30;
  @apply transition-all duration-300;
  @apply flex flex-col justify-center items-center;
  @apply bg-white dark:bg-black;
}
</style>