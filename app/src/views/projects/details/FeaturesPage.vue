<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useIntersectionObserver, useWindowScroll } from "@vueuse/core";
import { useRoute } from "vue-router";
import { useEmitter } from "@/hooks/useEmitter";
import { useUiStore } from "@/stores/uiStore";
import { promiseDebounce } from "@/utils/debounceUtils";
import type { FeatureConfig, FeatureGroupModel, FeatureModel } from "@/apis/ProjectFeatureModels";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer.vue";

const route = useRoute();
const emitter = useEmitter();
const uiStore = useUiStore();

//region Focus on feature section

const focusedRef = ref(null);

useIntersectionObserver(
  focusedRef,
  ([{ isIntersecting }]) => {
    featureFloatState.value = !isIntersecting;
  }
);

const { y } = useWindowScroll();

watch(y, async (value) => {
  promiseDebounce(() => {
    let sections = document.getElementsByTagName("section");
    for (let i = sections.length - 1; i >= 0; i--) {
      if ((sections[i]).offsetTop < value + 112) {
        currentFeatureId.value = sections[i].id;
        break;
      }
    }
  }, 1000)();
});

//endregion

//region Features and Groups

const groups = reactive<FeatureGroupModel[]>([]);
const features = reactive<FeatureModel[]>([]);

const updateGroups = (models: FeatureGroupModel[]) => {
  groups.splice(0, groups.length, ...models);
};

const updateFeatures = (models: FeatureModel[]) => {
  features.splice(0, features.length, ...models);
};

const getFeatureConfigPath = (locale?: string) => {
  return `../../../content/projects/${route.params.id}/features${locale ? `.${locale}` : `.${uiStore.locale}`}.json`;
};

const getProjectFeatureConfig = async (path: string): Promise<FeatureConfig> => {
  const awaitConfig = await import(/* @vite-ignore */path);
  return awaitConfig as unknown as FeatureConfig;
};

const featureFloatState = ref(false);
const currentFeatureId = ref("");

const goFeatureSection = (id: string) => {
  const element = document.getElementById(`${id}-anchor`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const useGroupedFeatures = computed(() => {
  const groupedFeatures = features.reduce((acc, model) => {
    const { group: groupId, ...rest } = model;
    if (!acc[groupId ?? "unclassified-1"]) {
      acc[groupId ?? "unclassified-1"] = [];
    }
    //@ts-ignore
    acc[groupId].push(rest);
    return acc;
  }, {} as { [key: string]: FeatureModel[] });

  const sortedKeys = Object.keys(groupedFeatures).sort((a, b) => {
    const groupA = groups.find((group) => group.id === a);
    const groupB = groups.find((group) => group.id === b);
    if (groupA && groupB) {
      return groupA.sort - groupB.sort;
    }
    return 0;
  });

  const finalFeatures = {} as { [key: string]: FeatureModel[] };

  for (const sortedKey of sortedKeys) {
    const t = groupedFeatures[sortedKey];
    if (!finalFeatures[sortedKey]) {
      finalFeatures[sortedKey] = [];
    }
    for (const v of t) {
      finalFeatures[sortedKey].push(v);
    }
  }

  return finalFeatures;
});

const getGroup = (id: string) => {
  return groups.find((group) => group.id === id);
};

//endregion

onMounted(() => {

  const configPath = getFeatureConfigPath();
  getProjectFeatureConfig(configPath).then((config) => {
    updateGroups(config.groups);
    updateFeatures(config.features);
    currentFeatureId.value = config.features[0]?.id ?? "";
  });

  emitter.on("toChangeLocale", async (e) => {
    const event = e as { locale: string };
    await nextTick(() => {
      const configPath = getFeatureConfigPath(event.locale);
      getProjectFeatureConfig(configPath).then((config) => {
        updateGroups(config.groups);
        updateFeatures(config.features);
      });
    });
  });

  nextTick(() => {
    emitter.emit("toChangeProjectPaper", { paper: "features" });
  });
});

onUnmounted(() => {
  emitter.off("toChangeLocale");
});

</script>

<template>

  <div class="absolute -mt-20 w-0.5 h-0.5 bg-transparent" ref="focusedRef"></div>

  <body-block class="xl:flex overflow-hidden">

    <div class="feature-index xl:flex-none">

      <div :class="{'fixed': featureFloatState, 'top-28':featureFloatState }">

        <div v-for="(features, groupId) in useGroupedFeatures" :key="groupId" class="feature-index-group">

          <div class="feature-index-group-title overflow-hidden" :class="{ 'feature-index-group-title-hide': getGroup(groupId).hidden }">
            {{ getGroup(groupId).title }}
          </div>

          <ul>

            <li v-for="feature in features" :key="feature.id" class="feature-index-text">
              <a :href="`#${feature.id}`"
                 :class="{
                  'text-pink-500': currentFeatureId === feature.id,
                  'text-black dark:text-white': currentFeatureId !== feature.id,
                  'feature-index-current': currentFeatureId === feature.id
                 }"
                 @click.prevent="goFeatureSection(feature.id)">
                {{ feature.title }}
              </a>
            </li>

          </ul>

        </div>

      </div>

    </div>

    <div class="xl:flex-1 overflow-hidden p-4">

      <section v-for="feature in features" :key="feature.id"
               :id="feature.id"
               class="feature-item">

        <div class="absolute -mt-28 bg-transparent" :id="`${feature.id}-anchor`"></div>

        <div class="feature-item-title">{{ feature.title }}</div>

        <markdown-renderer :source="`projects/${route.params.id}/features/${feature.id}`"
                           :i18n="true" fallback-locale="en"
                           :include-file-extension="true"
                           file-extension=".md"
                           retry-timeout="1000"
                           :redirect-to404="false"
        />

      </section>

    </div>

  </body-block>

  <div class="feature-end relative"></div>

</template>

<style scoped lang="css">

.feature-index-group {
  @apply py-2;
  @apply border-b border-gray-300/30;
  @apply last:border-none;
}

.feature-index-group-title {
  @apply inline-block;
  @apply text-xs text-black/50 dark:text-white/70 ;
  @apply cursor-default;
}

.feature-index-group-title-hide {
  display: none;
}

.feature-index {
  @apply xl:pt-10 pt-0 xl:pl-10 pl-0;
  @apply text-sm font-light;
  @apply xl:w-64 xl:h-auto w-0 h-0 overflow-hidden;

  & ul {
    @apply xl:w-52 xl:h-auto w-0 h-0 overflow-hidden;
  }
}

.feature-index-current {
  @apply after:content-['_✨']
}

.feature-index-text {
  @apply py-2;
}

.feature-item {
  @apply p-3 my-6 rounded-lg shadow;
  @apply bg-white/50 dark:bg-black/50 backdrop-blur-3xl;
  box-shadow: 0px 0px 24px rgba(11, 15, 33, 0.05), 0px 0px 5px rgba(11, 15, 33, 0.04);
}

.feature-item-title {
  @apply text-2xl ml-6 mt-6 inline-block;
  @apply text-black dark:text-white text-lg;
  @apply border-b-4 border-pink-500;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

.feature-end {
  @apply h-16;
  background: linear-gradient(rgba(248, 248, 248, 0), rgba(248, 248, 248, 0.8), rgba(248, 248, 248, 1));
  z-index: 1;
}

</style>