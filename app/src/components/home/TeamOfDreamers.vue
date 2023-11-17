<script setup lang="ts">
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import TitleLink from "@/components/blocks/TitleLink.vue";
import SectionHead from "@/components/home/SectionHeadBlock.vue";

import { ArrowRight, ArrowRightDown } from "@icon-park/vue-next";
</script>

<template>

  <div class="section-join-us pt-10">

    <div class="responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10">

      <section-head>
        {{ $t("home.embrace-net") }}
        <br />
        {{ $t("home.join-the-dreamers") }}
        <arrow-right-down class="inline-block align-middle" theme="outline" size="48" fill="#FFF" />
      </section-head>

    </div>

    <div class="responsive-width grid grid-cols-1 lg:grid-cols-3 gap-4">

      <div class="join-card become-a-member">
        <div class="join-card-title">
          Members
        </div>

        <p class="card-first-line">Building .NET technologies?</p>

        <p>Join NCC and our member projects to shape the technology ecosystem and make the .NET community even stronger.</p>

        <placeholder-block height="90px" />

        <div class="card-bottom">
          <title-link href="/about/join" route-name="about/join" target="_blank" class="join-btn">
            Become a member
          </title-link>
        </div>

      </div>

      <div class="join-card become-a-contributor">
        <div class="join-card-title">
          Contributors
        </div>

        <p class="card-first-line">Looking to get involved?</p>

        <p>Whether you are a programmer or a designer, become a part of us and help open source projects move towards a better future.</p>

        <placeholder-block height="90px" />

        <div class="card-bottom">
          <title-link href="https://contribute.ncc.work" target="_blank" mode="classic" class="join-btn">
            Start Contributing
          </title-link>
        </div>

      </div>

      <div class="join-card as-an-end-user">
        <div class="join-card-title">
          End Users
        </div>

        <p class="card-first-line">Using .NET technologies?</p>

        <p>Connect closely with the community, peers, and open source project teams to make the NCC project your best solution.</p>

        <placeholder-block height="90px" />

        <div class="card-bottom">
          <title-link href="/about/who-we-are" route-name="about/who-we-are" target="_blank" class="join-btn">
            Become a member
          </title-link>
        </div>

      </div>

    </div>

    <div class="responsive-width grid grid-cols-1 lg:grid-cols-8 py-5">

      <div class="text-4xl lg:col-start-4 lg:col-span-4 text-center lg:text-left">
        New to NCC ?
        <arrow-right class="inline-block align-middle" theme="outline" size="36" fill="#FFF" />

        <div class="inline-block align-middle ml-10">
          <img src="/images/logo-seq.gray-white.png" alt="NCC" class="about-ncc-logo" />
          <title-link href="/about/who-we-are" route-name="about/who-we-are" target="_blank" class="about-ncc">
            About NCC
          </title-link>
        </div>

      </div>


    </div>

  </div>

</template>

<style scoped lang="css">

.section-join-us {
  @apply text-white;
  @apply pb-12;
  background: url("/images/material/join-us.webp") center bottom no-repeat;

  .join-card {
    @apply backdrop-blur-sm rounded-xl m-5 relative overflow-hidden cursor-default;
    @apply border border-white/20 dark:border-black/20;
    @apply text-lg;
    @apply hover:scale-110 transition-all ease-in-out duration-500;

    .join-card-title {
      @apply w-full h-12 backdrop-saturate-0;
      @apply text-center text-xl font-bold;
      line-height: 3rem;
    }

    & p {
      @apply font-light;
      @apply p-5 text-xl;
    }

    .card-bottom {
      @apply self-end;
      @apply absolute bottom-0 w-full h-20;
      @apply text-sm px-5;
      @apply bg-gradient-to-b from-transparent to-white/40 border-b border-white/75;
      @apply dark:to-black/40 dark:border-black/75;
      @apply rounded-b-xl;

      .join-btn {
        @apply uppercase pt-6;
        @apply text-white hover:text-white;
        @apply decoration-white;
      }
    }
  }

  .become-a-member {
    background: url("/images/material/space-01.png") bottom right no-repeat;
    background-size: 50%;

    .join-card-title {
      @apply bg-purple-500/30;
    }
  }

  .become-a-contributor {
    background: url("/images/material/space-02.png") bottom right no-repeat;
    background-size: 50%;

    .join-card-title {
      @apply bg-yellow-500/30;
    }
  }

  .as-an-end-user {
    background: url("/images/material/space-03.png") bottom right no-repeat;
    background-size: 50%;

    .join-card-title {
      @apply bg-green-500/30;
    }
  }

  .about-ncc-logo {
    @apply xl:inline-block xl:align-middle;
    @apply m-5 mb-2 xl:m-0;
    @apply w-16;
  }

  .about-ncc {
    @apply xl:inline-block xl:align-middle xl:ml-8;
    @apply text-white uppercase text-lg;
    @apply decoration-white;
  }
}

</style>