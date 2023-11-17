<script setup lang="ts">

import { computed } from "vue";
import AnchorElement from "@/components/basic/AnchorElement.vue";

const props = withDefaults(defineProps<{
  github: string
  maxContributors?: number,
  columns?: number
}>(), {
  maxContributors: 7,
  columns: 7
});

const parse = (url: string): { namespace: string, repository: string } | null => {
  const regex = /https:\/\/github.com\/([\w-]+)\/([\w.-]+)/;
  const match = regex.exec(url);
  if (match) {
    return {
      namespace: match[1],
      repository: match[2]
    };
  } else {
    return null;
  }
};

const useUrl = computed(() => {
  const parsed = parse(props.github);

  if (parsed) {
    return `https://contrib.rocks/image?repo=${parsed.namespace}/${parsed.repository}&max=${props.maxContributors}&columns=${props.columns}`;
  } else {
    return "/images/ncc-pmc.png";
  }
});

const useGraphsUrl = computed(() => {
  const parsed = parse(props.github);

  if (parsed) {
    return `https://github.com/${parsed.namespace}/${parsed.repository}/graphs/contributors`;
  } else {
    return "https://ncc.work/projects";
  }
});

</script>

<template>
  <div class="contributors">
    <anchor-element :href="useGraphsUrl" title="Contributors" target="_blank" mode="classic">
      <img :src="useUrl" alt="Contributors" />
    </anchor-element>
  </div>
</template>

<style scoped lang="css">
.contributors {

  @apply py-3 mr-5;

  & img {
    @apply max-h-6;
  }
}

</style>