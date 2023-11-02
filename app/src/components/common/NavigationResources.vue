<script lang="ts" setup>

import {go} from "@/hooks/usePageToolkits";
import JoinUsButton from "@/components/common/JoinUsButton.vue";
</script>

<template>

  <div class="p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
    <div class="nav-about-us">
      <span class="nav-title">About Us</span>
      <span class="nav-item">
        <a href="/about/who-we-are" @click.prevent="go('about/who-we-are')" title="Who We Are">Who We Are</a>
      </span>
      <span class="nav-item">
        <a href="/people/project-management-committee" @click.prevent="go('people/project-management-committee')" title="Project Management Committee">Project Management Committee</a>
      </span>
      <span class="nav-item">
        <a href="/conduct" @click.prevent="go('conduct')" title="Code of Conduct">Code of Conduct</a>
      </span>
      <span class="nav-item">
        <a href="/about/story" @click.prevent="go('about/story')" title="Story">Story</a>
      </span>
      <span class="nav-item">
        <a href="/about/faq" @click.prevent="go('about/faq')" title="FAQ">FAQ</a>
      </span>

      <hr class="my-5 w-5 border-white/50"/>

      <span class="nav-item">
        <a href="/about/contact" @click.prevent="go('about/contact')" title="Contact Us">Contact Us</a>
      </span>
    </div>
    <div class="nav-projects">
      <span class="nav-title">Projects</span>
      <span class="nav-item">
        <a href="https://contribute.ncc.work" title="Contribute" target="_blank">Contribute</a>
      </span>
      <span class="nav-item">
        <a href="https://landscape.ncc.work" title="Landscape" target="_blank">Landscape</a>
      </span>
      <span class="nav-item">
        <a href="https://tools.ncc.work" title="Project Tools" target="_blank">Project Tools</a>
      </span>
      <span class="nav-item">
        <a href="/projects" @click.prevent="go('projects')" title="Projects">Projects</a>
      </span>
      <span class="nav-item">
        <a href="/archived-projects" @click.prevent="go('archived-projects')" title="Archived Projects">Archived Projects</a>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <a href="https://contribute.ncc.work/project-join-ncc" title="How to Join Us" target="_blank">How to Join Us</a>
      </span>
    </div>
    <div class="nav-Learning">
      <span class="nav-title">Learning</span>
    </div>
    <div class="nav-community">
      <span class="nav-title">Community</span>
      <span class="nav-item">
        <a href="https://events.ncc.work" title="Events" target="_blank">Events</a>
      </span>
      <span class="nav-item">
        <a href="https://events.ncc.work/meetup" title="Meetup" target="_blank">Meetup</a>
      </span>
      <span class="nav-item">
        <a href="https://2f.ncc.work" title="NCC 2F" target="_blank">NCC 2F</a>
      </span>
      <span class="nav-item">
        <a href="/community-online" @click.prevent="go('community-online')" title="Community Online">Community Online</a>
      </span>
      <span class="nav-item">
        <a href="https://glossary.ncc.work" title="Glossary" target="_blank">Glossary</a>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <a href="/participation-guidelines" @click.prevent="go('participation-guidelines')" title="Participation Guidelines">Participation Guidelines</a>
      </span>
      <span class="nav-item">
        <a href="/rules" @click.prevent="go('rules')" title="Community Rules">Community Rules</a>
      </span>
    </div>
    <div class="nav-resource">
      <span class="nav-title">Resource & Media</span>
      <span class="nav-item">
        <a href="/news" @click.prevent="go('news')" title="News">News</a>
      </span>
      <span class="nav-item">
        <a href="/weekly" @click.prevent="go('weekly')" title="Weekly">Weekly</a>
      </span>
      <span class="nav-item">
        <a href="/announcements" @click.prevent="go('announcements')" title="Announcements">Announcements</a>
      </span>
      <span class="nav-item">
        <a href="/brand-guidelines" @click.prevent="go('brand-guidelines')" title="Brand Guidelines">Brand Guidelines</a>
      </span>
      <span class="nav-item">
        <a href="https://github.com/dotnetcore/ncc-artwork" title="Project Logos" target="_blank">Project Logos</a>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <a href="https://github.com/dotnetcore" title="NCC@GitHub" target="_blank">NCC@GitHub</a>
      </span>
      <span class="nav-item">
        <a href="https://gitee.com/dotnetcore" title="NCC@Gitee" target="_blank">NCC@Gitee</a>
      </span>
    </div>
    <div class="nav-resource">
      <join-us-button>JOIN NOW</join-us-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-title {
  @apply text-xs font-black pb-6 block;
}

.nav-item {
  @apply text-xs leading-7 block;
  @apply no-underline;
  @apply hover:underline underline-offset-4 hover:text-purple-100;
}

</style>