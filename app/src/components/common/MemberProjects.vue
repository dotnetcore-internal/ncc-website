<script setup lang="ts">
import TitleBlock from "@/components/blocks/TitleBlock.vue";
</script>

<template>

  <div class="">
    <div class="responsive-width">

      <title-block h1-mode="false" color-mode="auto" :with-horizontal-rule="true" :is-font-black="false">Our Projects</title-block>

      <div class="text-lg font-light px-5 pb-10 sm:columns-4 lg:columns-5 columns-3">
        <div class="project-letter">A</div>
        <div class="project-name">
          <a href="/projects/agileconfig" title="AgileConfig">AgileConfig</a>
        </div>
        <div class="project-name">
          <a href="/projects/alipay-sdk" title="Alipay SDK">Alipay SDK</a>
        </div>
        <div class="project-name">
          <a href="/projects/aspectcore" title="AspectCore">AspectCore</a>
        </div>
        <div class="project-letter">B</div>
        <div class="project-name">
          <a href="/projects/bootstrapblazor" title="BootstrapBlazor">BootstrapBlazor</a>
        </div>
        <div class="project-letter">C</div>
        <div class="project-name">
          <a href="/projects/canalsharp" title="CanelSharp">CanalSharp</a>
        </div>
        <div class="project-name">
          <a href="/projects/cap" title="CAP">CAP</a>
        </div>
        <div class="project-name">
          <a href="/projects/collection" title="Collection">Collection</a>
        </div>
        <div class="project-name">
          <a href="/projects/compile-environment" title="Compile Environment">Compile Environment</a>
        </div>
        <div class="project-letter">D</div>
        <div class="project-name">
          <a href="/projects/dotnetspider" title="DotnetSpider">DotnetSpider</a>
        </div>
        <div class="project-letter">E</div>
        <div class="project-name">
          <a href="/projects/easycaching" title="EasyCaching">EasyCaching</a>
        </div>
        <div class="project-letter">F</div>
        <div class="project-name">
          <a href="/projects/fastgithub" title="FastGithub">FastGithub</a>
        </div>
        <div class="project-name">
          <a href="/projects/flubucore" title="FlubuCore">FlubuCore</a>
        </div>
        <div class="project-name">
          <a href="/projects/freesql" title="FreeSql">FreeSql</a>
        </div>
        <div class="project-letter">G</div>
        <div class="project-name">
          <a href="/projects/efcore-gaussdb" title="GaussDB for EntityFramework Core">GaussDB for EfCore</a>
        </div>
        <div class="project-letter">H</div>
        <div class="project-name">
          <a href="/projects/httpreports" title="HttpReports">HttpReports</a>
        </div>
        <div class="project-letter">K</div>
        <div class="project-name">
          <a href="/projects/efcore-kingbasees" title="KingbaseES for EntityFramework Core">KingbaseES for EfCore</a>
        </div>
        <div class="project-name">
          <a href="/projects/kooboo-json" title="Kooboo Json">Kooboo Json</a>
        </div>
        <div class="project-letter">M</div>
        <div class="project-name">
          <a href="/projects/magicodes-ie" title="Magicodes Exporter & Importer">Magicodes IE</a>
        </div>
        <div class="project-name">
          <a href="/projects/mocha" title="Mocha">Mocha</a>
        </div>
        <div class="project-letter">N</div>
        <div class="project-name">
          <a href="/projects/natasha" title="Natasha">Natasha</a>
        </div>
        <div class="project-name">
          <a href="/projects/npoi" title="NPOI">NPOI</a>
        </div>
        <div class="project-letter">O</div>
        <div class="project-name">
          <a href="/projects/osharp" title="OSharp">OSharp</a>
        </div>
        <div class="project-letter">S</div>
        <div class="project-name">
          <a href="/projects/sharding-core" title="ShardingCore">ShardingCore</a>
        </div>
        <div class="project-name">
          <a href="/projects/smartsql" title="SmartSql">SmartSql</a>
        </div>
        <div class="project-name">
          <a href="/projects/smartcode" title="SmartCode">SmartCode</a>
        </div>
        <div class="project-name">
          <a href="/projects/sourcelink-environment" title="SourceLink Environment">SourceLink Environment</a>
        </div>
        <div class="project-letter">U</div>
        <div class="project-name">
          <a href="/projects/util" title="Util">Util</a>
        </div>
        <div class="project-letter">W</div>
        <div class="project-name">
          <a href="/projects/webapiclient" title="WebApiClient">WebApiClient</a>
        </div>
        <div class="project-name">
          <a href="/projects/wtm" title="WTM">WTM</a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="css">

.project-letter {
  @apply bg-gray-100 dark:bg-gray-800 w-1/6 m-0.5 rounded-2xl ;
  @apply text-sm text-gray-600 dark:text-gray-200 text-center font-extrabold leading-8;
}

.project-name {
  @apply dark:text-white leading-8;
  font-size: 1rem;
}

.project-name:hover {
  @apply underline underline-offset-4;
  @apply text-purple-700 dark:text-purple-100;
}

</style>