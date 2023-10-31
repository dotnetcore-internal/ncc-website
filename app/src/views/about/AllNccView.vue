<script setup lang="ts">
import {useTitle} from "@vueuse/core";

const title = useTitle();
title.value = 'All NCC Sites | .NET Core Community';
</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white min-h-75vh">All NCC Sites</div>

</template>

<style scoped lang="css">

</style>