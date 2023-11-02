<script setup lang="ts">
import {computed, ref} from "vue";
import {useMouseInElement} from '@vueuse/core'

const itemTarget = ref(null);
const panelTarget = ref(null);
const {isOutside: itemIsOutside} = useMouseInElement(itemTarget);
const {isOutside: panelIsOutside} = useMouseInElement(panelTarget);

const displayPanel = computed(() => {
  return !itemIsOutside.value || !panelIsOutside.value;
});
</script>

<template>
  <a href="#" @click.prevent
     class="block-title text-gray-500 text-sm text-center z-50"
     :class="{
        'border-b-4': displayPanel,
        'border-purple-800': displayPanel,
        'dark:border-purple-500': displayPanel,
        'text-purple-700': displayPanel,
        'dark:text-purple-100': displayPanel,
     }"
     ref="itemTarget">
    <slot></slot>
  </a>

  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster">

    <div class="block-body" ref="panelTarget" v-show="displayPanel">

      <div class="responsive-width h-full">

        <div class="grid grid-cols-3 gap-4 h-full">

          <div class="col1 h-full block pr-7">
            <slot name="col1"></slot>
          </div>

          <div class="col2 h-full block pr-7">
            <slot name="col2"></slot>
          </div>

          <div class="col3 h-full block border-l-2 border-gray-200 dark:border-white/10">
            <slot name="col3"></slot>
          </div>

        </div>

      </div>

    </div>

  </transition>

</template>

<style scoped lang="css">
.block-title {
  @apply inline-block;
  @apply h-20 -mt-0.5 mx-2 xl:px-7 lg:px-5 py-3;
  @apply font-bold hover:text-purple-700 dark:hover:text-purple-100;
  @apply hover:border-b-4 border-purple-800 dark:border-purple-500;
  line-height: 3.5rem;
}

.block-body {
  @apply fixed w-full top-20 left-0 right-0 z-30;
  @apply shadow-md shadow-gray-200 dark:shadow-black;
  @apply bg-white dark:bg-black;
  @apply text-left;
  height: 36rem;
}

@media (prefers-color-scheme: dark) {

}
</style>