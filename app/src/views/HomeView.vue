<script setup lang="ts">
import { setTitle } from "@/hooks/usePageToolkits";

import LatestNews from "@/components/home/LatestNews.vue";
import MemberProjects from "@/components/projects/MemberProjects.vue";
import PartnersAndSponsors from "@/components/home/PartnersAndSponsors.vue";
import Slogan from "@/components/home/Slogan.vue";

import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import TitleLink from "@/components/blocks/TitleLink.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

import { ArrowRightDown } from "@icon-park/vue-next";

setTitle("Home");

</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white h-40">Home</div>

  <div class="bg-white dark:bg-black pb-16">

    <div class="responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10">

      <div class="growing-4-ecosystem">{{ $t("home.growing-for-ecosystem") }}</div>

      <div class="independently-operated-by">
        <span v-html="$t('home.independently-operated-by')"></span>
      </div>

    </div>

    <div class="responsive-width grid lg:grid-cols-4 grid-cols-2 px-6">

      <anchor href="/top-level-projects" :title="$t('project-top-level-full')" mode="classic" class="number-card block">
        <span class="number">4</span>
        <span class="desc">
          <span class="">Top-Level</span>
          <span>Projects</span>
        </span>
      </anchor>

      <anchor href="/projects" :title="$t('project-all-full')" mode="classic" class="number-card block">
        <span class="number">32</span>
        <span class="desc">
          <span class="">Member</span>
          <span>Projects</span>
        </span>
      </anchor>

      <div class="number-card cursor-default">
        <span class="number">100+</span>
        <span class="desc">
          <span class="">NCC</span>
          <span>Members</span>
        </span>
      </div>

      <div class="number-card cursor-default">
        <span class="number">100M+</span>
        <span class="desc">
          <span class="">NuGet</span>
          <span>Downloads</span>
        </span>
      </div>

    </div>

  </div>

  <div class="section-join-us pt-10">

    <div class="responsive-width grid grid-cols-1 lg:grid-cols-2 pb-10">

      <span>
        {{ $t("home.embrace-net") }}
        <br />
        {{ $t("home.join-the-dreamers") }}
        <arrow-right-down class="inline-block align-middle" theme="outline" size="48" fill="#FFF" />
      </span>

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

  </div>

  <div class="bg-white dark:bg-black h-40">

    <div class="responsive-width">

      <h1>{{ $t("community-together-with-us") }}</h1>

      <hr />

    </div>
  </div>

  <latest-news />

  <member-projects :display-more-btn="true" />

  <partners-and-sponsors />

  <slogan />

</template>

<style scoped lang="css">

.growing-4-ecosystem,
.section-join-us {
  @apply text-5xl font-medium;
  @apply pt-16 ;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  line-height: 4.75rem;
}

.growing-4-ecosystem {
  @apply inline-block;
}

.independently-operated-by {
  @apply self-end;
  @apply p-5 px-8;
  font-family: 'Lexend', 'Microsoft YaHei', Helvetica, Arial, sans-serif;

  :global(.highlight) {
    @apply font-bold underline underline-offset-4 decoration-2 decoration-double decoration-pink-600/50;
  }
}

.number-card {
  @apply uppercase;

  .number {
    @apply text-5xl font-bold;
    @apply inline-block align-middle;
  }

  .desc {
    @apply text-left font-medium;
    @apply ml-3 inline-block align-middle;

    & span {
      @apply block;
    }
  }
}

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

      .join-btn{
        @apply uppercase pt-6;
        @apply text-white hover:text-white;
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
}

</style>