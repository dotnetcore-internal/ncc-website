<script setup lang="ts">
import {RouterView} from "vue-router";

import {useUiStore} from "@/stores/uiStore";
import {go} from "@/hooks/usePageToolkits";

import NavigationResources from '@/components/common/NavigationResources.vue';
import HorizontalRuleElement from "@/components/basic/HorizontalRuleElement.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import HeaderTitle from "@/components/header/HeaderTitle.vue";
import FooterPendant from "@/components/common/FooterPendant.vue";
import LeftRightLayout from "@/components/basic/LeftRightLayout.vue";

const uiStore = useUiStore();

</script>

<template>

    <header-title/>

    <div class="mt-24">
      <RouterView class="min-h-75vh"/>
    </div>

    <footer class="bg-black text-white">
      <div class="responsive-width">

        <placeholder-block height="90px"/>

        <navigation-resources/>

        <placeholder-block height="1.25rem"/>

        <div class="p-5">
          <div class="inline-block align-middle">
            <a href="/" @click.prevent="go('home')" title=".NET Core Community">
              <img src="/images/logo.black.png" width="220" alt="NCC"/>
            </a>
          </div>
        </div>

        <div class="clear-both"></div>

        <div class="pb-2.5 px-5" v-show="!uiStore.isMobileMode">
          We <span class="text-xl font-bold">NCC</span>, an unofficial, non-profit open source community based on the .NET technology stack. <br/>
          We hope that through our efforts, we can make the .NET ecosystem more exciting.
        </div>

        <div class="clear-both"></div>

        <left-right-layout class="p-5">

          <template #left>
            <div class="p-5 inline-block align-middle">
              <a href="/all-ncc"
                 @click.prevent="go('all-ncc')"
                 class="text-white font-bold border p-2 px-5">
                All NCC Sites
              </a>
            </div>
          </template>

          <template #right>
            <div class="p-5">
              <footer-pendant/>
            </div>
          </template>

        </left-right-layout>

        <horizontal-rule-element colorMode="dark"/>

        <div class="px-5 text-xs my-3.5 align-middle float-left">
          Copyright © 2016-2024 .NET Core Community (NCC). All rights reserved. <br/>
          <span class="leading-7">We ❤️ Open Source.</span>
        </div>

        <div class="p-5 mx-auto align-middle float-right">
          <a href="/home"
             @click.prevent="go('home')">
            <img src="/images/logo-seq.wire-black.png" width="36" alt="NCC"/>
          </a>
        </div>

        <div class="clear-both"></div>

        <placeholder-block height="90px" bg-color="bg-black"/>

      </div>
    </footer>

</template>

<style src="./App.css" lang="css"></style>
