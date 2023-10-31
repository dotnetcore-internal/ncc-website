<script lang="ts" setup>

</script>

<template>

  <div class="p-5 grid grid-cols-6 gap-4">
    <div class="nav-about-us">
      <span class="nav-title">About Us</span>
      <span class="nav-item">
        <a href="/about/who-we-are" title="Who We Are">Who We Are</a>
      </span>
      <span class="nav-item">
        <a href="/people/project-management-committee" title="Project Management Committee">Project Management Committee</a>
      </span>
      <span class="nav-item">
        <a href="/conduct" title="Code of Conduct">Code of Conduct</a>
      </span>
      <span class="nav-item">
        <a href="/about/story" title="Story">Story</a>
      </span>
      <span class="nav-item">
        <a href="/about/faq" title="FAQ">FAQ</a>
      </span>

      <hr class="my-5 w-5 border-white/50"/>

      <span class="nav-item">
        <a href="/about/contact" title="Contact Us">Contact Us</a>
      </span>
    </div>
    <div class="nav-projects">
      <span class="nav-title">Projects</span>
      <span class="nav-item">
        <a href="https://contribute.ncc.work" title="Contribute">Contribute</a>
      </span>
      <span class="nav-item">
        <a href="https://landscape.ncc.work" title="Landscape">Landscape</a>
      </span>
      <span class="nav-item">
        <a href="https://tools.ncc.work" title="Project Tools">Project Tools</a>
      </span>
      <span class="nav-item">
        <a href="/projects" title="Projects">Projects</a>
      </span>
      <span class="nav-item">
        <a href="/archived-projects" title="Archived Projects">Archived Projects</a>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <a href="https://contribute.ncc.work/project-join-ncc" title="How to Join Us">How to Join Us</a>
      </span>
    </div>
    <div class="nav-Learning">
      <span class="nav-title">Learning</span>
    </div>
    <div class="nav-community">
      <span class="nav-title">Community</span>
      <span class="nav-item">
        <a href="https://events.ncc.work" title="Events">Events</a>
      </span>
      <span class="nav-item">
        <a href="/meetup" title="Meetup">Meetup</a>
      </span>
      <span class="nav-item">
        <a href="https://2f.ncc.work" title="NCC 2F">NCC 2F</a>
      </span>
      <span class="nav-item">
        <a href="/community-online" title="Community Online">Community Online</a>
      </span>
      <span class="nav-item">
        <a href="https://glossary.ncc.work" title="Glossary">Glossary</a>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <a href="/participation-guidelines" title="Participation Guidelines">Participation Guidelines</a>
      </span>
      <span class="nav-item">
        <a href="/rules" title="Community Rules">Community Rules</a>
      </span>
    </div>
    <div class="nav-resource">
      <span class="nav-title">Resource & Media</span>
      <span class="nav-item">
        <a href="/news" title="News">News</a>
      </span>
      <span class="nav-item">
        <a href="/announcements" title="Announcements">Announcements</a>
      </span>
      <span class="nav-item">
        <a href="/brand-guidelines" title="Brand Guidelines">Brand Guidelines</a>
      </span>
      <span class="nav-item">
        <a href="https://github.com/dotnetcore/ncc-artwork" title="Project Logos">Project Logos</a>
      </span>
      <hr class="my-5 w-5 border-white/50"/>
      <span class="nav-item">
        <a href="https://github.com/dotnetcore" title="NCC@GitHub">NCC@GitHub</a>
      </span>
      <span class="nav-item">
        <a href="https://gitee.com/dotnetcore" title="NCC@Gitee">NCC@Gitee</a>
      </span>
    </div>
    <div class="nav-resource">
      Join Us
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-title {
  @apply text-xs font-black pb-6 block;
}

.nav-item {
  @apply text-xs leading-7 block;
}

.nav-item a:hover {
  @apply underline underline-offset-4;
  @apply text-purple-100;
}
</style>