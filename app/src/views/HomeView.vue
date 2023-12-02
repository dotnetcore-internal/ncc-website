<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import LatestNews from "@/components/home/LatestNews.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import PartnersAndSponsors from "@/components/home/PartnersAndSponsors.vue";
import Slogan from "@/components/home/Slogan.vue";

import BloomingFlowers from "@/components/home/BloomingFlowers.vue";
import TeamOfDreamers from "@/components/home/TeamOfDreamers.vue";
import WhoWeAreButton from "@/components/common/WhoWeAreButton.vue";
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";

setTitle("Home");

</script>

<template>

  <!-- Start Home-First Area -->
  <div class="-mt-24 relative home-first">

    <div class="home-first-image">
      <img src="/images/material/community.webp" alt="Do Something Greater" />
    </div>

    <div class="home-first-mask">

      <div class="responsive-width">

        <div class="home-first-text">
          <p class="py-2 font-black uppercase">&nbsp;Make</p>
          <p class="py-2 font-black">.NET Stack</p>
          <p>&nbsp;Greater <span class="underline underline-offset-8">Together</span></p>
        </div>

        <div class="text-white text-2xl w-2/3 p-5 mt-4 drop-shadow-lg">
          {{ $t("who-we-are-desc") }}
        </div>

        <horizontal-rule-element color-mode="always-dark" />

        <div class="p-5">
          <who-we-are-button />
        </div>

      </div>
    </div>

  </div>
  <!-- End Home-First Area -->

  <blooming-flowers />

  <team-of-dreamers />

  <!--  <div class="bg-white dark:bg-black h-40">-->

  <!--    <div class="responsive-width">-->

  <!--      <h1>{{ $t("community-together-with-us") }}</h1>-->

  <!--      <hr />-->

  <!--    </div>-->
  <!--  </div>-->

  <latest-news />

  <member-projects :display-more-btn="true" />

  <partners-and-sponsors />

  <slogan />

</template>

<style scoped lang="css">

</style>