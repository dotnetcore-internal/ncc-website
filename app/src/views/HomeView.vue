<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import LatestNews from "@/components/home/LatestNews.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import PartnersAndSponsors from "@/components/home/PartnersAndSponsors.vue";
import Slogan from "@/components/home/Slogan.vue";

import BloomingFlowers from "@/components/home/BloomingFlowers.vue";
import TeamOfDreamers from "@/components/home/TeamOfDreamers.vue";

setTitle("Home");

</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white h-40">Home</div>

  <blooming-flowers />

  <team-of-dreamers />

  <div class="bg-white dark:bg-black h-40">

    <div class="responsive-width">

      <h1>{{ $t("community-together-with-us") }}</h1>

      <hr />

    </div>
  </div>

  <latest-news />

  <member-projects :display-more-btn="true" />

  <partners-and-sponsors />

  <slogan />

</template>

<style scoped lang="css">

</style>