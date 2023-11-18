<script lang="ts" setup>
import JoinUsButton from "@/components/common/JoinUsButton.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
</script>

<template>

  <div class="p-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
    <div class="nav-about-us">
      <span class="nav-title">{{ $t("about-us") }}</span>
      <span class="nav-item">
        <anchor href="/about/who-we-are" route-name="about/who-we-are" :title="$t('who-we-are')">{{ $t("who-we-are") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/people/project-management-committee" route-name="people/project-management-committee" :title="$t('pmc')">{{ $t("pmc") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/conduct" route-name="conduct" :title="$t('code-of-conduct')">{{ $t("code-of-conduct") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/about/story" route-name="about/story" :title="$t('story')">{{ $t("story") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/about/faq" route-name="about/faq" :title="$t('faq')">{{ $t("faq") }}</anchor>
      </span>

      <hr class="my-5 w-5 border-white/50" />

      <span class="nav-item">
        <anchor href="/about/contact" route-name="about/contact" :title="$t('contact-us')">{{ $t("contact-us") }}</anchor>
      </span>
    </div>
    <div class="nav-projects">
      <span class="nav-title">{{ $t("projects") }}</span>
      <span class="nav-item">
        <anchor href="https://contribute.ncc.work" :title="$t('project-contribute')" target="_blank" mode="classic">{{ $t("project-contribute") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://landscape.ncc.work" :title="$t('project-landscape')" target="_blank" mode="classic">{{ $t("project-landscape") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://tools.ncc.work" :title="$t('project-tools')" target="_blank" mode="classic">{{ $t("project-tools") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/projects" route-name="projects" :title="$t('project-member-full')">{{ $t("project-member") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/archived-projects" route-name="archived-projects" :title="$t('project-archived-full')">{{ $t("project-archived-full") }}</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50" />
      <span class="nav-item">
        <anchor href="/project-maturity-model" route-name="project-maturity-model" :title="$t('project-maturity-model-full')">{{ $t("project-maturity-model-full") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://contribute.ncc.work/project-join-ncc" :title="$t('project-how-to-join-us')" target="_blank" mode="classic">{{ $t("project-how-to-join-us") }}</anchor>
      </span>
    </div>
    <div class="nav-Learning">
      <span class="nav-title">{{ $t("learning") }}</span>
    </div>
    <div class="nav-community">
      <span class="nav-title">{{ $t("community") }}</span>
      <span class="nav-item">
        <anchor href="https://events.ncc.work" :title="$t('community-events')" target="_blank" mode="classic">{{ $t("community-events") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://events.ncc.work/meetups" :title="$t('community-meetups')" target="_blank" mode="classic">{{ $t("community-meetups") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://2f.ncc.work" :title="$t('community-2f')" target="_blank" mode="classic">{{ $t("community-2f") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/community-online" route-name="community-online" :title="$t('community.online')">{{ $t("community-online") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://glossary.ncc.work" :title="$t('glossary')" target="_blank" mode="classic">{{ $t("glossary") }}</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50" />
      <span class="nav-item">
        <anchor href="/participation-guidelines" route-name="participation-guidelines" :title="$t('community-participation')">{{ $t("community-participation") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/rules" route-name="rules" :title="$t('community-rules')">{{ $t("community-rules") }}</anchor>
      </span>
    </div>
    <div class="nav-resource">
      <span class="nav-title">{{ $t("resources-and-media") }}</span>
      <span class="nav-item">
        <anchor href="/news" route-name="news" :title="$t('media-news')">{{ $t("media-news") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/weekly" route-name="weekly" :title="$t('media-weekly')">{{ $t("media-weekly") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/announcements" route-name="announcements" :title="$t('media-announcements')">{{ $t("media-announcements") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="/brand-guidelines" route-name="brand-guidelines" :title="$t('media-brand')">{{ $t("media-brand") }}</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://github.com/dotnetcore/ncc-artwork" :title="$t('media-logos')" target="_blank" mode="classic">{{ $t("media-logos") }}</anchor>
      </span>
      <hr class="my-5 w-5 border-white/50" />
      <span class="nav-item">
        <anchor href="https://github.com/dotnetcore" title="NCC@GitHub" target="_blank" mode="classic">NCC@GitHub</anchor>
      </span>
      <span class="nav-item">
        <anchor href="https://gitee.com/dotnetcore" title="NCC@Gitee" target="_blank" mode="classic">NCC@Gitee</anchor>
      </span>
    </div>
    <div class="nav-resource">
      <join-us-button>{{ $t("join-at-footer") }}</join-us-button>
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