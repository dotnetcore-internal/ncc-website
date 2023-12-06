<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

import {type AuthorExtendModel, type AuthorModel, filterExtendAuthorsByGroup} from "@/apis/ContentModels";
import ArticleCardsAuthor from "@/components/articles/ArticleCardsAuthor.vue";

const props = withDefaults(defineProps<{
  author: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[] | null;
  displayAuthorMode?: "hide" | "all" | "all-but-avatar" | "all-but-name" | "all-but-first-avatar" | "all-but-first-name" | "first" | "first-but-avatar" | "first-but-name"
  displayAuthorBy?: boolean;
  displayConjunctions?: boolean;
  useExtendStrategy?: { key: string; mode?: 'direct' | 'i18n'; displayText?: string }[];
}>(), {
  displayAuthorMode: "hide",
  displayAuthorBy: false,
  displayConjunctions: true,
});

/*
  "hide"                  // Hide all authors
  "all"                   // Show all authors
  "all-but-avatar"        // Show all authors but avatar
  "all-but-name"          // Show all authors but name
  "all-but-first-avatar"  // Show all authors & show first avatar only
  "all-but-first-name"    // Show all authors & show first name only
  "first"                 // Show first author only
  "first-but-avatar"      // Show first author & show first avatar only
  "first-but-name"        // Show first author & show first name only
*/

const displayAuthors = ref(false);
const isEnabledExtendStrategy = computed(() => {
  return props.useExtendStrategy && props.useExtendStrategy.length > 0;
});

onMounted(() => {
  displayAuthors.value = props.displayAuthorMode !== "hide";
});


</script>

<template>
  <!-- Author -->
  <span v-if="isEnabledExtendStrategy">

    <span v-for="(strategy, i) in useExtendStrategy" :key="i">
      <span v-if="strategy.mode === 'i18n'" class="group-key text-xs text-gray-500 mr-1.5">
        {{ $t(strategy.key) }}
      </span>
      <span v-else class="group-key text-xs text-gray-500 mr-1.5">
        {{ strategy.displayText ?? strategy.key }}
      </span>
      <article-cards-author
          :author="filterExtendAuthorsByGroup(author, strategy.key)"
          :display-author-mode="props.displayAuthorMode"
          :display-author-by="props.displayAuthorBy"
          :display-conjunctions="props.displayConjunctions"
      />
    </span>

  </span>

  <article-cards-author
      v-else
      :author="author"
      :display-author-mode="props.displayAuthorMode"
      :display-author-by="props.displayAuthorBy"
      :display-conjunctions="props.displayConjunctions"
  />
  <!-- Author -->
</template>

<style scoped lang="css">

</style>