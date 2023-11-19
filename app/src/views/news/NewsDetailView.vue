<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { useDateFormat } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";
import { setTitle } from "@/hooks/usePageToolkits";
import { queryNewsMetadata } from "@/apis/QueryNewsMetadataApi";
import type { NewsIndexModel } from "@/apis/ContentModels";

import MarkdownBlock from "@/components/markdown/MarkdownBlock.vue";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";

const route = useRoute();
const router = useRouter();
const emitter = useEmitter();
const uiStore = useUiStore();

const currentLocale = ref(uiStore.locale);

const articleId = computed(() => {
  const params = route.params.pathMatch as [];
  return params.join("/");
});

const articleMetadata = reactive<NewsIndexModel>({} as NewsIndexModel);

const articleSource = computed(() => {
  return `/articles/news/${articleId.value}/content`;
});

const loadNewsMetadataAsync = async (locale?: string) => {
  const targetLocale = locale ?? currentLocale.value;
  const api = `/articles/news/${articleId.value}/metadata.${targetLocale}.json`;
  await queryNewsMetadata(api, (data) => {
    articleMetadata.id = data.id;
    articleMetadata.title = data.title;
    articleMetadata.date = data.date;
    articleMetadata.img = data.img;
    articleMetadata.url = data.url;
    setTitle(articleMetadata.title, "direct");
  });
};

const useArticleTitle = computed(() => {
  return articleMetadata.title;
});

const useArticleDate = computed(() => {
  return articleMetadata.date;
});

const displayDate = (date: Date, format: string) => {
  return useDateFormat(date, format, { locales: uiStore }).value;
};

onMounted(async () => {

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    currentLocale.value = event.locale;
    try {
      await loadNewsMetadataAsync(event.locale);
      emitter.emit("toRerenderMarkdown", { source: articleSource.value, locale: event.locale });
    } catch {
      await router.push({ path: `/404` });
    }
  });

  await loadNewsMetadataAsync();

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>

  <body-block>

    <div class="text-center w-10/12 mx-auto lg:w-4/6 xl:1/2">

      <title-block :with-placeholder="false" :is-font-black="false">
        {{ useArticleTitle }}
      </title-block>

      <div class="w-12 rounded-full overflow-hidden mx-auto mt-8">
        <img src="/images/logo-seq-svg.svg" alt="The NCC" />
      </div>

      <div class="text-center p-3 border-b-2 border-gray-300 w-72 mx-auto">
        The NCC
      </div>

      <div class="px-5 pt-1 text-sm text-gray-500">
        {{ displayDate(new Date(useArticleDate), $t("_common.date-format")) }}
      </div>

    </div>

    <div class="content-paper">

      <markdown-block :source="articleSource"
                      :i18n="true"
                      fallback-locale="en"
                      :final-fallback-fn="()=>router.push({ path: `/404` })"
      />

    </div>

  </body-block>

</template>

<style scoped lang="css">

</style>