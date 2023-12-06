<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

import {type AuthorExtendModel, type AuthorModel, countAuthors, getAuthors, hasAuthors} from "@/apis/ContentModels";

const props = withDefaults(defineProps<{
  author: AuthorModel | AuthorModel[] | AuthorExtendModel | AuthorExtendModel[] | null;
  displayAuthorMode?: "hide" | "all" | "all-but-avatar" | "all-but-name" | "all-but-first-avatar" | "all-but-first-name" | "first" | "first-but-avatar" | "first-but-name"
  displayAuthorBy?: boolean;
  displayConjunctions?: boolean;
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

const displayThisAuthor = (i: number): boolean => {
  if (displayAuthors.value) {

    switch (props.displayAuthorMode) {
      case "hide":
        return false;
      case "all":
      case "all-but-avatar":
      case "all-but-name":
      case "all-but-first-avatar":
      case "all-but-first-name":
        return true;
      case "first":
      case "first-but-avatar":
      case "first-but-name":
        return i === 0;
    }

  }

  return false;
};

const displayThisAuthorName = (i: number): boolean => {

  if (displayAuthors.value) {

    switch (props.displayAuthorMode) {
      case "all":
      case "all-but-name":
      case "all-but-first-avatar":
        return true;

      case "all-but-avatar":
      case "first-but-avatar":
        return false;

      case "first":
      case "first-but-name":
      case "all-but-first-name":
        return i === 0;
    }

  }

  return false;
};

const displayThisAuthorAvatar = (i: number): boolean => {
  if (displayAuthors.value) {

    switch (props.displayAuthorMode) {
      case "all":
      case "all-but-avatar":
        return true;

      case "all-but-name":
      case "first-but-name":
        return false;

      case "first":
      case "first-but-avatar":
      case "all-but-first-avatar":
        return i === 0;

      case "all-but-first-name":
        return i !== 0;
    }

  }

  return false;
};

const totalOfAuthors = computed(() => {
  return countAuthors(props.author);
});

onMounted(() => {
  displayAuthors.value = props.displayAuthorMode !== "hide";
});


</script>

<template>
  <!-- Author -->
  <span v-if="hasAuthors(author)" class="text-sm font-light text-gray-500">
    <span v-if="displayAuthorBy" class="text-xs mr-1 text-gray-500/50">by</span>
    <span v-for="(author, i) in getAuthors(author)" :key="author.id" v-show="displayThisAuthor(i)">
      <span v-if="displayConjunctions">
        <span v-if="i > 0 && i < totalOfAuthors - 1" class="text-xs -ml-0.5 mr-1 text-gray-500/50">,</span>
        <span v-else-if=" i > 0 && i < totalOfAuthors" class="text-xs -ml-0.5 mr-1 text-gray-500/50">and</span>
      </span>
      <span v-if="displayThisAuthorAvatar(i)" class="mr-1.5"> <img :src="author.avatar" :alt="author.name" class="inline-block w-5 h-5 rounded-full"/></span>
      <span v-if="displayThisAuthorName(i)" class="mr-1.5"> {{ author.name }}</span>
    </span>
  </span>
  <!-- Author -->
</template>

<style scoped lang="css">

</style>