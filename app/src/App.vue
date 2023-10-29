<script setup lang="ts">
import {RouterView} from "vue-router";
import {Twitter, Github, Telegram, Wechat} from '@icon-park/vue-next';


</script>

<template>
  <div
      class="responsive-width bg-amber-200/40"
      @contextmenu.prevent>
    <RouterView class="min-h-75vh" />
  </div>
  <footer class="bg-black text-white">
    <div class="responsive-width">

      <div class="p-5">
        <div class="inline-block align-middle">
          <a href="/" title=".NET Core Community">
            <img src="/images/logo.black.png" width="220" alt="NCC"/>
          </a>
        </div>
      </div>

      <div class="clear-both"></div>

      <div class="pb-2.5 px-5">
        We <span class="text-xl font-bold">NCC</span>, an unofficial, non-profit open source community based on the .NET technology stack. <br />
        We hope that through our efforts, we can make the .NET ecosystem more exciting.
      </div>

      <div class="clear-both"></div>

      <div class="p-5 align-middle relative float-left">
        <div class="inline-block align-middle">
          <a href="/all-ncc" class="text-white font-bold border p-2 px-5">All NCC Sites</a>
        </div>
      </div>

      <div class="p-5 relative float-right">
        <a href="https://twitter.com/ncc_community" title=".NET Core Community on Twitter" target="_blank" class="align-middle inline-block mx-2">
          <Twitter theme="filled" size="26" fill="#ffffff"/>
        </a>
        <a href="https://github.com/dotnetcore" title=".NET Core Community on GitHub" target="_blank" class="align-middle inline-block mx-2">
          <Github theme="filled" size="26" fill="#ffffff"/>
        </a>
        <a href="/wechat-open-ncc" title=".NET Core Community on WeChat" target="_blank" class="align-middle inline-block mx-2">
          <Wechat theme="filled" size="26" fill="#ffffff"/>
        </a>
        <a href="https://t.me/ncc_radio" title="The .NET Core Community Radio on Telegram" target="_blank" class="align-middle inline-block mx-2">
          <Telegram theme="filled" size="26" fill="#ffffff"/>
        </a>
      </div>

      <div class="clear-both"></div>

      <hr class="mx-5" />

      <div class="px-5 text-xs my-3.5" >
        Copyright © 2016-2024 .NET Core Community (NCC). All rights reserved.
      </div>

      <div class="clear-both"></div>

      <div class="bg-black" style="height: 90px"></div>

    </div>
  </footer>
</template>

<style src="./App.css" lang="css"></style>
