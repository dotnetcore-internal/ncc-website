<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { useDateFormat, usePreferredDark } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";
import { setTitle } from "@/hooks/usePageToolkits";
import { queryAnnouncementMetadata } from "@/apis/QueryAnnMetadataApi";
import type { AnnouncementIndexModel } from "@/apis/ContentModels";

import Markdown from "@/components/markdown/MarkdownWorker.vue";
import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
import ArticleAuthors from "@/components/articles/ArticleAuthors.vue";
import { ArrowLeft } from "@icon-park/vue-next";

const route = useRoute();
const router = useRouter();
const emitter = useEmitter();
const uiStore = useUiStore();

const currentLocale = ref(uiStore.locale);

const articleId = computed(() => {
  const params = route.params.pathMatch as [];
  return params.join("/");
});

const articleMetadata = reactive<AnnouncementIndexModel>({} as AnnouncementIndexModel);

const articleSource = computed(() => {
  return `announcements/${articleId.value}/content`;
});

const loadAnnMetadataAsync = async (locale?: string) => {
  const targetLocale = locale ?? currentLocale.value;
  const api = `/content/announcements/${articleId.value}/metadata.${targetLocale}.json`;
  await queryAnnouncementMetadata(api, (data) => {
    articleMetadata.id = data.id;
    articleMetadata.title = data.title;
    articleMetadata.date = data.date;
    articleMetadata.author = data.author;
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

const useAuthor = computed(() => {
  console.log(articleMetadata);
  console.log(articleMetadata.author);
  return articleMetadata.author;
});

const displayDate = (date: Date, format: string) => {
  return useDateFormat(date, format, { locales: uiStore }).value;
};

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
    ? "#f8f8f8"
    : "#000000";
});

onMounted(async () => {

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    currentLocale.value = event.locale;
    try {
      await loadAnnMetadataAsync(event.locale);
      emitter.emit("toRerenderMarkdown", { source: articleSource.value, locale: event.locale });
    } catch {
      await router.push({ path: `/404` });
    }
  });

  await loadAnnMetadataAsync();

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>

  <body-block>

    <div class="content-paper relative">

      <div class="absolute top-10 left-5">
        <anchor href="/announcements" route-name="announcements" :title="$t('media-announcements')" mode="h5">
          <arrow-left theme="filled" size="36" :fill="useIconColor" />
        </anchor>
      </div>

      <div class="text-center w-10/12 mx-auto lg:w-4/6 xl:1/2">

        <title-block :with-placeholder="false" :is-font-black="false">
          {{ useArticleTitle }}
        </title-block>

        <article-authors :author="useAuthor" />

        <div class="px-5 pt-1 text-sm text-gray-500">
          {{ displayDate(new Date(useArticleDate), $t("_common.date-format")) }}
        </div>

      </div>

      <markdown :source="articleSource"
                      :i18n="true"
                      fallback-locale="en"
                      :final-fallback-fn="()=>router.push({ path: `/404` })"
      />

    </div>

  </body-block>

</template>

<style scoped lang="css">

</style>