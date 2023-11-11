<script setup lang="ts">
import {computed, onMounted, onUnmounted, shallowRef} from 'vue';
import {useRouter} from 'vue-router';
import {useEmitter} from "@/hooks/useEmitter";
import {useUiStore} from "@/stores/uiStore";

const router = useRouter();
const emitter = useEmitter();
const uiStore = useUiStore();
const content: any = shallowRef(null);

const props = withDefaults(defineProps<{
  source: string;
  i18n?: boolean;
  fallbackLocale?: string;
  includeFileExtension?: boolean;
  fileExtension?: string;
}>(), {
  i18n: false,
  fallbackLocale: 'en',
  includeFileExtension: true,
  fileExtension: '.md'
});

const useLocaleSuffix = computed(() => {
  if (props.i18n)
    return `.${uiStore.locale}`;
  return '';
});

const useFallbackLocaleSuffix = computed(() => {
  if (props.i18n)
    return `.${props.fallbackLocale}`;
  return '';
});

const useFileExtensions = computed(() => {
  if (props.includeFileExtension)
    return props.fileExtension;
  return '';
});

const toImportMarkdown = async (source: string, locale?: string) => {
  if (source.length === 0) {

    content.value = '';

  } else {

    if (!locale) {
      locale = useLocaleSuffix.value;
    } else {
      locale = `.${locale}`;
    }

    import(/* @vite-ignore */"../../content/" + props.source + locale + useFileExtensions.value)
        .then(e => {
          content.value = e.default;
        })
        .catch(() => {

          if (!locale) {
            locale = useFallbackLocaleSuffix.value;
          } else {
            locale = `.${locale}`;
          }

          import(/* @vite-ignore */"../../content/" + props.source + locale + useFileExtensions.value)
              .then(e => {
                content.value = e.default;
              })
              .catch(() => {
                router.replace('/404');
              });

        });
  }
};

onMounted(async () => {

  await toImportMarkdown(props.source);

  emitter.on('toChangeLocale', async (e) => {
    if (!props.i18n)
      return;
    const event = e as { locale: string };
    await toImportMarkdown(props.source, event.locale);
  });

});

onUnmounted(() => {

  emitter.off("toChangeLocale");

});

</script>

<template>

  <component :is="content" :key="name"/>

</template>

<style scoped lang="css">

</style>