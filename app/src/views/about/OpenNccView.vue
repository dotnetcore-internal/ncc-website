<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import TitleBlock from "@/components/blocks/TitleBlock.vue";
import BodyBlock from "@/components/blocks/BodyBlock.vue";

setTitle('wechat.our-official-wechat-account', 'i18n');
</script>

<template>

  <body-block>

    <title-block>
      {{ $t('wechat.our-official-wechat-account') }}
    </title-block>

    <div class="text-2xl p-5">
      {{ $t('wechat.connect-with-us-on-wechat') }}
    </div>

    <div class="p-5">
      <img src="/images/official-wechat-account-qrcode.jpg" alt="NCC WeChat QR Code" width="500"/>
    </div>

  </body-block>

</template>

<style scoped lang="css">

</style>