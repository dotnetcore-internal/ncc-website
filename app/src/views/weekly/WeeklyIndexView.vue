<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUiStore } from "@/stores/uiStore";
import { useEmitter } from "@/hooks/useEmitter";
import { setTitle } from "@/hooks/usePageToolkits";
import { queryPagedWeekly } from "@/apis/QueryPagedWeklyApi";
import type { PageDescriptor, WeeklyIndexModel } from "@/apis/ContentModels";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import TitleBlock from "@/components/blocks/TitleBlock.vue";
import ArticleBlock from "@/components/articles/ArticleBlock.vue";
import ArticleNav from "@/components/articles/ArticleNav.vue";

setTitle("media-weekly", "i18n");

const route = useRoute();
const router = useRouter();
const uiStore = useUiStore();
const emitter = useEmitter();
const list = reactive<WeeklyIndexModel[]>([]);
const page = reactive<PageDescriptor>({ current: 1, total: 1 });

const updatePage = (models: WeeklyIndexModel[], pageModel: PageDescriptor) => {
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

const loadPagedWeeklyAsync = async (queryPageNumber: number, locale?: string) => {
  await queryPagedWeekly(
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
    await loadPagedWeeklyAsync(getPreviousPageNumber());
  }
};

const loadNextPageAsync = async () => {
  if (hasNextPage.value) {
    await loadPagedWeeklyAsync(getNextPageNumber());
  }
};

onMounted(async () => {

  const pageNumStr = route.params.pageNo as string;
  const pageNumber = parseInt(pageNumStr ?? "1");

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    await loadPagedWeeklyAsync(getCurrentPageNumber(), event.locale);
  });

  await loadPagedWeeklyAsync(pageNumber);

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>
  <body-block>

    <title-block :is-font-black="false" :is-font-bold="true">{{ $t("media-weekly") }}</title-block>

    <article-block :articles="list" />

    <article-nav v-if="moreThanOnePage"
                 :descriptor="page"
                 :previous="async ()=>await loadPreviousPageAsync()"
                 :next="async ()=>await loadNextPageAsync()"
                 :first="async ()=>await loadPagedWeeklyAsync(1)"
                 :last="async ()=>await loadPagedWeeklyAsync(page.total)"
                 :go="async (pageNumber)=>await loadPagedWeeklyAsync(pageNumber)"
                 :hidden-if-btn-disabled="true"
                 base-url="/weekly"
    />

  </body-block>
</template>

<style scoped lang="css">

</style>