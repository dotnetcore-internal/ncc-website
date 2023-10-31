<script setup lang="ts">
import {useTitle} from "@vueuse/core";

const title = useTitle();
title.value = 'NCC WeChat | .NET Core Community';
</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white">
    <div class="text-3xl font-black p-5">NCC WECHAT</div>
    <div class="text-2xl p-5">Connect with us on WeChat by scanning this QR code!</div>
    <div>
      <img src="/images/official-wechat-account-qrcode.jpg" alt="NCC WeChat QR Code" width="500"/>
    </div>
  </div>

</template>

<style scoped lang="css">

</style>