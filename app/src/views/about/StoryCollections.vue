<script setup lang="ts">
// 故事精选
import { onMounted, onUnmounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUiStore } from "@/stores/uiStore";
import { useEmitter } from "@/hooks/useEmitter";
import { queryPagedStory } from "@/apis/QueryPagedStoryApi";
import type { StoryIndexModel } from "@/apis/ContentModels";

import ArticleCards from "@/components/articles/ArticleCards.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";

const props = withDefaults(defineProps<{
  queryNumber?: number;
  showMore?: boolean;
}>(), {
  queryNumber: 6,
  showMore: true
});

const router = useRouter();
const uiStore = useUiStore();
const emitter = useEmitter();
const list = reactive<StoryIndexModel[]>([]);

const updatePage = (models: StoryIndexModel[]) => {
  list.length = 0;
  for (const model of models) {
    list.push(model);
  }
};

const loadPagedStoryAsync = async (locale?: string) => {
  await queryPagedStory(
    1,
    locale ?? uiStore.locale,
    (data => {
      updatePage(data.list);
    }),
    () => {
      router.push({ path: "/404" });
    });
};

onMounted(async () => {

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    await loadPagedStoryAsync(event.locale);
  });

  await loadPagedStoryAsync();

});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>

  <article-cards :articles="list"
                 default-display-mode="grid"
                 base-url="/about/story"
                 :enable-block-mode="false"
                 :enable-list-mode="false"
                 :enable-card-mode="false"
                 display-author-mode="hide"
                 :display-date="false"
                 :limited-items="queryNumber"
                 :with-shadow="false"
                 :with-scale="false"
                 :infinite-horizontal-for-grid="true"
  />

  <div v-if="showMore" class="text-center">

    <placeholder-block height="20px" />

    <anchor href="/about/story" :title="$t('story-more')" mode="classic" class="more-story">
      {{ $t("story-more") }}
    </anchor>

    <placeholder-block height="20px" />

  </div>

</template>

<style scoped lang="css">

.more-story {
  @apply py-2 w-72 mx-auto my-4 block;
  @apply bg-slate-500/10 hover:bg-slate-500/20 rounded-lg cursor-pointer;
  @apply text-lg text-center;
}

</style>