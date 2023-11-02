<script setup lang="ts">
import {computed, onMounted, watch} from "vue";
import {usePreferredDark, useWindowSize} from '@vueuse/core'
import {unlockBody} from "@/hooks/usePageToolkits";

import {useUiStore} from "@/stores/uiStore";
import {RightSmallUp} from "@icon-park/vue-next";

import TitleFrame from "@/components/header/TitleFrame.vue";
import TitleContentBlock from "@/components/header/TitleContentBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";

const uiStore = useUiStore();

const {width} = useWindowSize();

const updateMobileMode = (n: number) => {
  if (n < 1024) {
    uiStore.setMobileMode(true);
    unlockBody();
  } else {
    uiStore.setMobileMode(false);
  }
};

watch(width, (n) => {
  updateMobileMode(n);
});

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
      ? '#f8f8f8'
      : '#000000';
});

const useSecondaryTitleTopBorder = computed(() => {
  return uiStore.isMobileMode
      ? '2px'
      : '0';
});

onMounted(() => {
  updateMobileMode(width.value);
});

</script>

<template>

  <title-frame>

    <title-content-block feature-key="about">
      <span class="header-title">About</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">DISCOVER NCC</li>

          <li class="header-content">
            <anchor href="/about/who-we-are" title="Who We Are" mode="classic">
              Who We Are
              <span>
                NCC Community is a vendor-neutral, business-neutral technology community dedicated to fostering a thriving ecosystem for .NET
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/people/project-management-committee" title="Project Management Committee" mode="classic">
              Project Management Committee
              <span>
                The PMC is responsible for project management, community oversight, and budget decisions for NCC
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">ADDITIONAL INFO</li>

          <li class="header-content">
            <anchor href="/conduct" title="Code of Conduct" mode="classic">
              Code of Conduct
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/about/faq" title="FAQ" mode="classic">
              FAQ
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">FEATURED READS</li>

          <li class="header-content">
            <anchor href="/about/story" title="Story" mode="classic">
              Story
              <span>
                NCC sets sail from the birthplace of dreams, and to make .NET greater together
              </span>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="projects">
      <span class="header-title">Projects</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">NCC PROJECTS</li>

          <li class="header-content">
            <anchor href="/projects" title="Projects" mode="classic">
              All
              <span>
                All projects entering the community have undergone  PMC evaluation, and community voting
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/top-level-projects" title="Top-Level Projects" mode="classic">
              Top-Level
              <span>
                The project is considered stable and widely adopted in production environments, attracting numerous contributors
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/archived-projects" title="Archived Projects" mode="classic">
              Archived
              <span>
                Projects that have reached the end of their lifecycle and have become inactive
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">GET INVOLVED</li>

          <li class="header-content">
            <anchor href="https://contribute.ncc.work" title="Contribute" target="_blank" mode="classic">
              Contribute
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                Join us and become a part of our team, contributing to NCC member projects with passion and expertise
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://landscape.ncc.work" title="Landscape" target="_blank" mode="classic">
              Landscape
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                A comprehensive categorical overview of member projects, their extended initiatives, and the ecosystem projects and products that have emerged based on them
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://contribute.ncc.work/project-join-ncc" title="How to Join Us" target="_blank" mode="classic">
              How to Join Us
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">TOOLS & RESOURCES</li>

          <li class="header-content">
            <anchor href="https://tools.ncc.work" title="Project Tools" target="_blank" mode="classic">
              Project Tools
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://github.com/dotnetcore" title="NCC@GitHub" target="_blank" mode="classic">
              NCC@GitHub
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://gitee.com/dotnetcore" title="NCC@Gitee" target="_blank" mode="classic">
              NCC@Gitee
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="learning">
      <span class="header-title">Learning</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">LEARNING & APPLYING</li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">ADDITIONAL RESOURCES</li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">FEATURED READS</li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="community">
      <span class="header-title">Community</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">TAKE PART</li>

          <li class="header-content">
            <anchor href="https://events.ncc.work" title="Events" target="_blank" mode="classic">
              Events
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                Meet with NCC community members during the events, and learn about the latest developments in the community
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://events.ncc.work/meetup" title="Meetup" target="_blank" mode="classic">
              Meetup
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                Participate in small-scale community meet-up events where the community thrives because of you
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://2f.ncc.work" title="NCC 2F" target="_blank" mode="classic">
              NCC 2F
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                The second floor of the world, capable of accommodating a desk amidst the chaotic world, capable of carrying a tranquil heart and bright eyes
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">COMMUNITY CONTENT</li>

          <li class="header-content">
            <anchor href="/community-online" title="Community Online" mode="classic">
              Community Online
              <span>
                Join us in the online and offline worlds
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/participation-guidelines" title="Participation Guidelines" mode="classic">
              Participation Guidelines
              <span>
                A diverse community guide: embracing differences and contributing constructively in a healthy way
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/rules" title="Community Rules" mode="classic">
              Community Rules
              <span>
                Community Standards established, reviewed, and approved by PMC: these normative documents will guide the community's operations and development
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">COMMUNITY RESOURCES</li>

          <li class="header-content">
            <anchor href="https://glossary.ncc.work" title="Glossary" target="_blank" mode="classic">
              Glossary
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>Describing abstract and profound technical concepts in clear and simple language</span>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="resource">
      <span class="header-title">Resource & Media</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">COMMUNITY NEWS</li>

          <li class="header-content">
            <anchor href="/news" title="News" mode="classic">
              News
              <span>
                NCC and its member projects in the news media
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/weekly" title="Weekly" mode="classic">
              Weekly
              <span>
                Weekly recap and commentary
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/announcements" title="Announcements" mode="classic">
              Announcements
              <span>
                Media releases and official NCC announcements
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">MEDIA RESOURCES</li>

          <li class="header-content">
            <anchor href="/brand-guidelines" title="Brand Guidelines" mode="classic">
              Brand Guidelines
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://github.com/dotnetcore/ncc-artwork" title="Project Logos" target="_blank" mode="classic">
              Project Logos
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>


      </template>
    </title-content-block>

  </title-frame>

</template>

<style scoped lang="css">
.header-title {
  @apply font-black;
}

.header-sub-title {
  @apply text-xs font-bold text-gray-400;
  @apply pt-5 pl-5;
}

.header-content {
  @apply my-1 block;
}

.header-content a {
  @apply w-full pl-5 py-3 block;
  @apply text-lg font-black dark:text-white;
  @apply hover:text-purple-900 hover:dark:text-purple-100;
  @apply hover:bg-purple-500/5 hover:dark:bg-purple-900/5;
  @apply rounded-xl;
}

.header-content span {
  @apply my-1.5 block;
  @apply text-xs font-medium text-gray-400 dark:text-gray-500;
}

.header-content-arrow {
  @apply !inline-block;
  @apply -ml-1 align-middle;
}

.header-sub-title-secondary {
  @apply border-gray-200 dark:border-white/10;
  border-top-width: v-bind(useSecondaryTitleTopBorder);
}
</style>