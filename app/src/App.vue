<script setup lang="ts">
import { RouterView } from "vue-router";


</script>

<template>
  <div
    class="inset-0 h-screen max-w-screen-sm mx-auto overflow-hidden"
    @contextmenu.prevent>
    <RouterView class="w-screen h-screen" />
  </div>
</template>

<style src="./App.css" lang="css"></style>
