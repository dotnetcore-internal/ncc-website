<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import MemberProjects from "@/components/common/MemberProjects.vue";
import PartnersAndSponsors from "@/components/common/PartnersAndSponsors.vue";
import Slogan from "@/components/common/Slogan.vue";

const title = useTitle();
title.value = 'Home | .NET Core Community';

</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white min-h-75vh">Home</div>

  <MemberProjects />

  <PartnersAndSponsors />

  <Slogan />

</template>

<style scoped lang="css">

</style>