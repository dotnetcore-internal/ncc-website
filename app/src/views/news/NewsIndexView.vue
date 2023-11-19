<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUiStore } from "@/stores/uiStore";
import { useEmitter } from "@/hooks/useEmitter";
import { setTitle } from "@/hooks/usePageToolkits";
import { queryPagedNews } from "@/apis/QueryPagedNewsApi";
import type { NewsIndexModel, PageDescriptor } from "@/apis/ContentModels";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import ArticleCards from "@/components/articles/ArticleCards.vue";
import ArticleNav from "@/components/articles/ArticleNav.vue";

setTitle("media-news", "i18n");

const route = useRoute();
const router = useRouter();
const uiStore = useUiStore();
const emitter = useEmitter();
const list = reactive<NewsIndexModel[]>([]);
const page = reactive<PageDescriptor>({ current: 1, total: 1 });

const updatePage = (models: NewsIndexModel[], pageModel: PageDescriptor) => {
  list.length = 0;
  for (const model of models) {
    list.push(model);
  }
  page.current = pageModel.current;
  page.total = pageModel.total;
};

const getCurrentPageNumber = () => {
  if (page.current >= page.total)
    return page.total;
  if (page.current <= 0)
    return 1;
  return page.current;
};

const getPreviousPageNumber = () => {
  if (page.current <= 1)
    return 1;
  if (page.current > page.total)
    return page.total;
  return page.current - 1;
};

const getNextPageNumber = () => {
  if (page.current >= page.total)
    return page.total;
  if (page.current <= 0)
    return 1;
  return page.current + 1;
};

const hasPreviousPage = computed(() => {
  return page.current < page.total && page.current > 1;
});
const hasNextPage = computed(() => {
  return page.current < page.total && page.current > 0;
});
const moreThanOnePage = computed(() => {
  return page.total > 1;
});

const loadPagedNewsAsync = async (queryPageNumber: number, locale?: string) => {
  await queryPagedNews(
    queryPageNumber,
    locale ?? uiStore.locale,
    (data => {
      updatePage(data.list, data._page);
    }),
    () => {
      router.push({ path: "/404" });
    });
};

const loadPreviousPageAsync = async () => {
  if (hasPreviousPage.value) {
    await loadPagedNewsAsync(getPreviousPageNumber());
  }
};

const loadNextPageAsync = async () => {
  if (hasNextPage.value) {
    await loadPagedNewsAsync(getNextPageNumber());
  }
};

onMounted(async () => {

  const pageNumStr = route.params.pageNo as string;
  const pageNumber = parseInt(pageNumStr ?? "1");

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    await loadPagedNewsAsync(getCurrentPageNumber(), event.locale);
  });

  await loadPagedNewsAsync(pageNumber);

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>
  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("media-news") }}</title-block>

    <article-cards :articles="list"
                   default-display-mode="grid"
                   base-url="/news"
    />

    <article-nav v-if="moreThanOnePage"
                 :descriptor="page"
                 :previous="async ()=>await loadPreviousPageAsync()"
                 :next="async ()=>await loadNextPageAsync()"
                 :first="async ()=>await loadPagedNewsAsync(1)"
                 :last="async ()=>await loadPagedNewsAsync(page.total)"
                 :go="async (pageNumber)=>await loadPagedNewsAsync(pageNumber)"
                 :hidden-if-btn-disabled="true"
                 base-url="/news"
    />

  </body-block>
</template>

<style scoped lang="css">

</style>