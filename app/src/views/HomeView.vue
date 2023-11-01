<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import MemberProjects from "@/components/common/MemberProjects.vue";
import PartnersAndSponsors from "@/components/common/PartnersAndSponsors.vue";
import Slogan from "@/components/common/Slogan.vue";

setTitle('Home');

</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white min-h-75vh">Home</div>

  <MemberProjects />

  <PartnersAndSponsors />

  <Slogan />

</template>

<style scoped lang="css">

</style>