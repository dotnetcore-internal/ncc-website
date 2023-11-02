<script lang="ts" setup>
import JoinUsButton from "@/components/common/JoinUsButton.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

</script>

<template>

  <div class="p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
    <div class="nav-about-us">
      <span class="nav-title">About Us</span>
      <span class="nav-item">
        <anchor href="/about/who-we-are" route-name="about/who-we-are" title="Who We Are">Who We Are</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/people/project-management-committee" route-name="people/project-management-committee" title="Project Management Committee">Project Management Committee</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/conduct" route-name="conduct" title="Code of Conduct">Code of Conduct</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/about/story" route-name="about/story" title="Story">Story</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/about/faq" route-name="about/faq" title="FAQ">FAQ</anchor>
      </span>

      <hr class="my-5 w-5 border-white/50"/>

      <span class="nav-item">
        <anchor href="/about/contact" route-name="about/contact" title="Contact Us">Contact Us</anchor>
      </span>
    </div>
    <div class="nav-projects">
      <span class="nav-title">Projects</span>
      <span class="nav-item">
        <anchor href="https://contribute.ncc.work" title="Contribute" target="_blank" mode="classic">Contribute</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://landscape.ncc.work" title="Landscape" target="_blank" mode="classic">Landscape</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://tools.ncc.work" title="Project Tools" target="_blank" mode="classic">Project Tools</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/projects" route-name="projects" title="All Our Projects">Member Projects</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/archived-projects" route-name="archived-projects" title="Archived Projects">Archived Projects</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <anchor href="https://contribute.ncc.work/project-join-ncc" title="How to Join Us" target="_blank" mode="classic">How to Join Us</anchor>
      </span>
    </div>
    <div class="nav-Learning">
      <span class="nav-title">Learning</span>
    </div>
    <div class="nav-community">
      <span class="nav-title">Community</span>
      <span class="nav-item">
        <anchor href="https://events.ncc.work" title="Events" target="_blank" mode="classic">Events</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://events.ncc.work/meetup" title="Meetup" target="_blank" mode="classic">Meetup</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://2f.ncc.work" title="NCC 2F" target="_blank" mode="classic">NCC 2F</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/community-online" route-name="community-online" title="Community Online">Community Online</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://glossary.ncc.work" title="Glossary" target="_blank" mode="classic">Glossary</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <anchor href="/participation-guidelines" route-name="participation-guidelines" title="Participation Guidelines">Participation Guidelines</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/rules" route-name="rules" title="Community Rules">Community Rules</anchor>
      </span>
    </div>
    <div class="nav-resource">
      <span class="nav-title">Resource & Media</span>
      <span class="nav-item">
        <anchor href="/news" route-name="news" title="News">News</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/weekly" route-name="weekly" title="Weekly">Weekly</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/announcements" route-name="announcements" title="Announcements">Announcements</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/brand-guidelines" route-name="brand-guidelines" title="Brand Guidelines">Brand Guidelines</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://github.com/dotnetcore/ncc-artwork" title="Project Logos" target="_blank" mode="classic">Project Logos</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <anchor href="https://github.com/dotnetcore" title="NCC@GitHub" target="_blank" mode="classic">NCC@GitHub</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://gitee.com/dotnetcore" title="NCC@Gitee" target="_blank" mode="classic">NCC@Gitee</anchor>
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