<script setup lang="ts">
import {RouterView} from "vue-router";

import {go} from "@/hooks/usePageToolkits";

import NavigationResources from '@/components/common/NavigationResources.vue';
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import FooterPendant from "@/components/common/FooterPendant.vue";

</script>

<template>

  <header class="h-20 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md fixed left-0 top-0 right-0">
    LOGO
    About
    Projects
    Learning
    Community
    Resource & Media
    Join
  </header>

  <div class="mt-24">
    <RouterView class="min-h-75vh"/>
  </div>

  <footer class="bg-black text-white">
    <div class="responsive-width">

      <PlaceholderBlock height="1.25rem"/>

      <NavigationResources/>

      <PlaceholderBlock height="1.25rem"/>

      <div class="p-5">
        <div class="inline-block align-middle">
          <a href="/" @click.prevent="go('home')" title=".NET Core Community">
            <img src="/images/logo.black.png" width="220" alt="NCC"/>
          </a>
        </div>
      </div>

      <div class="clear-both"></div>

      <div class="pb-2.5 px-5 invisible h-0 lg:visible lg:h-auto">
        We <span class="text-xl font-bold">NCC</span>, an unofficial, non-profit open source community based on the .NET technology stack. <br/>
        We hope that through our efforts, we can make the .NET ecosystem more exciting.
      </div>

      <div class="clear-both"></div>

      <div class="p-5 align-middle relative float-left">
        <div class="inline-block align-middle">
          <a href="/all-ncc"
             @click.prevent="go('all-ncc')"
             class="text-white font-bold border p-2 px-5">
            All NCC Sites
          </a>
        </div>
      </div>

      <div class="p-5 relative float-right">

        <FooterPendant />

      </div>

      <div class="clear-both"></div>

      <HorizontalRuleElement colorMode="dark"/>

      <div class="px-5 text-xs my-3.5">
        Copyright © 2016-2024 .NET Core Community (NCC). All rights reserved. <br />
        <span class="leading-7">We ❤️ Open Source.</span>
      </div>

      <div class="clear-both"></div>

      <PlaceholderBlock height="90px" bg-color="bg-black"/>

    </div>
  </footer>
</template>

<style src="./App.css" lang="css"></style>
