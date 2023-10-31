<script setup lang="ts">

</script>

<template>

  <div class="responsive-width text-2xl text-black dark:text-white min-h-75vh">Home</div>

  <div class="">
    <div class="responsive-width">
      <div class="text-3xl dark:text-white tracking-tight p-5 pb-0">Our Projects</div>

      <hr class="m-5 border-black dark:border-white"/>

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
        <div class="project-name">
          <a href="/projects/efcore-gaussdb" title="EfCore GaussDB">EfCore GaussDB</a>
        </div>
        <div class="project-name">
          <a href="/projects/efcore-kingbasees" title="EfCore KingbaseES">EfCore KingbaseES</a>
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
        <div class="project-letter">H</div>
        <div class="project-name">
          <a href="/projects/httpreports" title="HttpReports">HttpReports</a>
        </div>
        <div class="project-letter">K</div>
        <div class="project-name">
          <a href="/projects/kooboo-json" title="KoobooJson">KoobooJson</a>
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
          <a href="/projects/smartsql" title="SmartSql">SmartSql</a>
        </div>
        <div class="project-name">
          <a href="/projects/smartcode" title="SmartCode">SmartCode</a>
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

  <div class="bg-gray-100 dark:bg-gray-900/50 dark:text-white">
    <div class="responsive-width">
      <div class="text-3xl tracking-tight p-5 pb-0">Our Partners & Sponsors</div>

      <hr class="m-5 border-black dark:border-white"/>

      <div class="p-5"> Content </div>

    </div>

  </div>

  <div class="bg-gray-900 text-white">
    <div class="responsive-width">
      <div class="text-3xl tracking-tight p-5 pb-0">Our Slogan</div>

      <hr class="m-5 border-white"/>

      <div class="lg:text-3xl md:text-2xl sm:text-lg font-light italic px-5 pb-10">
        Gather the might of our age, merge the triumphs of the multitude, <br/>
        surmount hurdles and trials, unite aboard one vessel, and lo, <br/>
        we shall emerge as a wondrous marvel.
      </div>
    </div>
  </div>

</template>

<style scoped lang="css">
.project-letter{
  @apply bg-gray-100 dark:bg-gray-800 w-1/6 m-0.5 rounded-2xl ;
  @apply text-sm text-gray-600 dark:text-gray-200 text-center font-extrabold leading-8;
}

.project-name{
  @apply dark:text-white leading-8;
  font-size: 1rem;
}

.project-name:hover{
  @apply underline underline-offset-4;
  @apply text-purple-700 dark:text-purple-100;
}
</style>