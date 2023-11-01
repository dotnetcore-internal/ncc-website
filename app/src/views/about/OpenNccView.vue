<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import TitleBlock from "@/components/blocks/TitleBlock.vue";
import BodyBlock from "@/components/blocks/BodyBlock.vue";

setTitle('Our WeChat');
</script>

<template>

  <body-block>

    <title-block>Our Official WeChat Account</title-block>

    <div class="text-2xl p-5">Connect with us on WeChat by scanning this QR code!</div>

    <div>
      <img src="/images/official-wechat-account-qrcode.jpg" alt="NCC WeChat QR Code" width="500"/>
    </div>

  </body-block>

</template>

<style scoped lang="css">

</style>