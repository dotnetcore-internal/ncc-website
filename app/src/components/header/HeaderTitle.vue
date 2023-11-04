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
      <span class="header-title">{{ $t('nav.titles.about') }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t('nav.titles.about-discover-ncc') }}</li>

          <li class="header-content">
            <anchor href="/about/who-we-are" :title="$t('who-we-are')" mode="classic">
              {{ $t('who-we-are') }}
              <span>
                NCC Community is a vendor-neutral, business-neutral technology community dedicated to fostering a thriving ecosystem for .NET
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/people/project-management-committee" :title="$t('pmc')" mode="classic">
              {{ $t('pmc') }}
              <span>
                The PMC is responsible for project management, community oversight, and budget decisions for NCC
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.about-additional-info') }}</li>

          <li class="header-content">
            <anchor href="/conduct" :title="$t('code-of-conduct')" mode="classic">
              {{ $t('code-of-conduct') }}
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/about/faq" :title="$t('faq')" mode="classic">
              {{ $t('faq') }}
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.about-featured-reads') }}</li>

          <li class="header-content">
            <anchor href="/about/story" :title="$t('story')" mode="classic">
              {{ $t('story') }}
              <span>
                NCC sets sail from the birthplace of dreams, and to make .NET greater together
              </span>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="projects">
      <span class="header-title">{{ $t('nav.titles.projects') }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t('nav.titles.projects-ncc-projects') }}</li>

          <li class="header-content">
            <anchor href="/projects" :title="$t('project-all-full')" mode="classic">
              {{ $t('project-all') }}
              <span>
                All projects entering the community have undergone  PMC evaluation, and community voting
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/top-level-projects" :title="$t('project-top-level-full')" mode="classic">
              {{ $t('project-top-level') }}
              <span>
                The project is considered stable and widely adopted in production environments, attracting numerous contributors
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/archived-projects" :title="$t('project-archived-full')" mode="classic">
              {{ $t('project-archived') }}
              <span>
                Projects that have reached the end of their lifecycle and have become inactive
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.projects-get-involved') }}</li>

          <li class="header-content">
            <anchor href="https://contribute.ncc.work" :title="$t('project-contribute')" target="_blank" mode="classic">
              {{ $t('project-contribute') }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                Join us and become a part of our team, contributing to NCC member projects with passion and expertise
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://landscape.ncc.work" :title="$t('project-landscape')" target="_blank" mode="classic">
              {{ $t('project-landscape') }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                A comprehensive categorical overview of member projects, their extended initiatives, and the ecosystem projects and products that have emerged based on them
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://contribute.ncc.work/project-join-ncc" :title="$t('project-how-to-join-us')" target="_blank" mode="classic">
              {{ $t('project-how-to-join-us') }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.projects-tools-resources') }}</li>

          <li class="header-content">
            <anchor href="https://tools.ncc.work" :title="$t('project-tools')" target="_blank" mode="classic">
              {{ $t('project-tools') }}
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
      <span class="header-title">{{ $t('nav.titles.learning') }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t('nav.titles.learning-applying') }}</li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.learning-additional-info') }}</li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.learning-featured-reads') }}</li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="community">
      <span class="header-title">{{ $t('nav.titles.community') }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t('nav.titles.community-take-part') }}</li>

          <li class="header-content">
            <anchor href="https://events.ncc.work" :title="$t('community-events')" target="_blank" mode="classic">
              {{ $t('community-events') }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                Meet with NCC community members during the events, and learn about the latest developments in the community
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://events.ncc.work/meetups" :title="$t('community-meetups')" target="_blank" mode="classic">
              {{ $t('community-meetups') }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>
                Participate in small-scale community meet-up events where the community thrives because of you
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://2f.ncc.work" :title="$t('community-2f')" target="_blank" mode="classic">
              {{ $t('community-2f') }}
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

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.community-content') }}</li>

          <li class="header-content">
            <anchor href="/community-online" :title="$t('community-online')" mode="classic">
              {{ $t('community-online') }}
              <span>
                Join us in the online and offline worlds
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/participation-guidelines" :title="$t('community-participation')" mode="classic">
              {{ $t('community-participation') }}
              <span>
                A diverse community guide: embracing differences and contributing constructively in a healthy way
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/rules" :title="$t('community-rules')" mode="classic">
              {{ $t('community-rules') }}
              <span>
                Community Standards established, reviewed, and approved by PMC: these normative documents will guide the community's operations and development
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col3>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.community-resources') }}</li>

          <li class="header-content">
            <anchor href="https://glossary.ncc.work" :title="$t('glossary')" target="_blank" mode="classic">
              {{ $t('glossary') }}
              <right-small-up class="header-content-arrow" theme="filled" size="24" :fill="useIconColor"/>
              <span>Describing abstract and profound technical concepts in clear and simple language</span>
            </anchor>
          </li>

        </ul>

      </template>
    </title-content-block>

    <title-content-block feature-key="resource">
      <span class="header-title">{{ $t('nav.titles.resources-and-media') }}</span>
      <template #col1>

        <ul>

          <li class="header-sub-title">{{ $t('nav.titles.media-news') }}</li>

          <li class="header-content">
            <anchor href="/news" :title="$t('media-news')" mode="classic">
              {{ $t('media-news') }}
              <span>
                NCC and its member projects in the news media
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/weekly" :title="$t('media-weekly')" mode="classic">
              {{ $t('media-weekly') }}
              <span>
                Weekly recap and commentary
              </span>
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="/announcements" :title="$t('media-announcements')" mode="classic">
              {{ $t('media-announcements') }}
              <span>
                Media releases and official NCC announcements
              </span>
            </anchor>
          </li>

        </ul>

      </template>
      <template #col2>

        <ul>

          <li class="header-sub-title header-sub-title-secondary">{{ $t('nav.titles.media-resources') }}</li>

          <li class="header-content">
            <anchor href="/brand-guidelines" :title="$t('media-brand')" mode="classic">
              {{ $t('media-brand') }}
            </anchor>
          </li>

          <li class="header-content">
            <anchor href="https://github.com/dotnetcore/ncc-artwork" :title="$t('media-logos')" target="_blank" mode="classic">
              {{ $t('media-logos') }}
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