<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";
import { queryLatestNews } from "@/apis/QueryLatestNewsApi";
import type { NewsIndexModel } from "@/apis/ContentModels";

import TitleBlock from "@/components/blocks/TitleBlock.vue";
import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";
import TitleLink from "@/components/blocks/TitleLink.vue";
import ArticleCard from "@/components/articles/ArticleCard.vue";

const uiStore = useUiStore();
const emitter = useEmitter();

const latestNews = reactive<NewsIndexModel[]>([]);

const updateNews = (models: NewsIndexModel[]) => {
  latestNews.length = 0;
  for (const model of models) {
    latestNews.push(model);
  }
};

const loadLatestNews = async (locale?: string) => {
  const currentLocale = locale ?? uiStore.locale;
  await queryLatestNews(currentLocale, (dto) => {
    updateNews(dto.data);
  });
};

onMounted(async () => {
  await loadLatestNews();

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    await loadLatestNews(event.locale);
  });
});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});
</script>

<template>
  <div class="bg-white dark:bg-black">
    <div class="responsive-width py-5 pb-16">

      <left-right-layout>
        <template #left>
          <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="false" :is-font-black="false">
            {{ $t("media-latest-from-ncc") }}
          </title-block>
        </template>
        <template #right>
          <title-link href="/news" route-name="news" title="News" mode="h5" class="m-7 mt-9" class-value="leading-7">
            {{ $t("media-latest-news") }}
          </title-link>
        </template>
      </left-right-layout>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

        <article-card v-for="news in latestNews"
                      :id="news.id"
                      :key="news.id"
                      :image="news.img"
                      :date="new Date(news.date)"
                      :title-tip="news.title"
                      base-url="/news"
        >
          {{ news.title }}
        </article-card>

      </div>

    </div>
  </div>
</template>

<style scoped lang="css">

</style>