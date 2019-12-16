{% extends "../layout/_layout.swig" %}
{% set navCur = 'project' %}

{%- block style %}
<link rel="stylesheet" href="{{css.path + 'project.css'}}">
{% endblock -%}


{% block preScript %}
  <script>
  //     var viewWidth = document.documentElement.clientWidth;
  //     if(viewWidth > 768 ){
  //       viewWidth = 768;
  //     }
  //     document.documentElement.style.fontSize = (viewWidth/768) * 100 + "px";
  </script>
{% endblock %}

{% block main %}
  <div class="caption">
    <h1>NCC 成员项目一览</h1>
    <small>All member projects of .NET Core Community</small>
  </div>
  <div class="project-box">
   <div class="project-level"><h5>NCC Top-Level Projects</h5></div>
   <ul class="project-group">  
       <li class="project-item project-aspect-core">
          <div class="inner">
             <div class="project-summary">
              <p class="summary-text">AspectCore is an Aspect-Oriented Programming based cross platform framework for .NET Core and .NET Framework.</p>
              <a href="https://github.com/dotnetcore/AspectCore-Framework" class="skip"></a>
            </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/AspectCore-Framework"><strong>AspectCore</strong></a>
                <a href="https://github.com/liuhaoyang"><em>Project leader: 刘浩杨</em></a>
              </p>
             </div>
          </div>
       </li>
       <li class="project-item project-asp-cap">
          <div class="inner">
             <div class="project-summary">
                <p class="summary-text">CAP is a .NET Standard library to achieve eventually consistent in distributed architectures system like SOA or Microservice. It is lightweight and efficienct.</p>
                <a href="https://github.com/dotnetcore/CAP" class="skip"></a>
              </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/CAP"><strong>CAP</strong></a>
                <a href="http://savorboard.cnblogs.com/"><em>Project leader: 杨晓东</em></a>
              </p>
             </div>
          </div>
       </li>
       <li class="project-item project-dotnetspider">
          <div class="inner">
             <div class="project-summary">
                <p class="summary-text">A .NET Standard library to implement web crawler similar to WebMagic and Scrapy.</p>
                <a href="https://github.com/dotnetcore/DotnetSpider" class="skip"></a>
                    </div>
                    <div class="project-meta">
                      <span class="project-avator"></span>
                      <p class="project-name">
                       <a href="https://github.com/dotnetcore/DotnetSpider"><strong>DotnetSpider</strong></a>
                       <a href="https://github.com/zlzforever"><em>Project leader: 邹嵩</em></a>
                     </p>
             </div>
          </div>
       </li>
       <li class="project-item project-npoi">
          <div class="inner">
             <div class="project-summary">
                <p class="summary-text">A .NET Core library that can read/write Office formats without Microsoft Office installed. No COM+, no interop.</p>
                <a href="https://github.com/dotnetcore/NPOI" class="skip"></a>
             </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/NPOI"><strong>NPOI</strong></a>
                <a href="https://github.com/dotnetcore/NPOI"><em>migrated by dotnetcore team</em></a>
              </p>
             </div>
          </div>
       </li>
       <li class="project-item project-asp-surging">
          <div class="inner">
             <div class="project-summary">
              <p class="summary-text">A distributed micro-service engine that provides high-performance RPC remote service calls.</p>
              <a href="https://github.com/dotnetcore/surging" class="skip"></a>
            </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/surging"><strong>Surging</strong></a>
                <a href="http://www.cnblogs.com/fanliang11/"><em>Project leader: 范亮</em></a>
               </p>
             </div>
          </div>
       </li>
   </ul>    
   <div class="project-level"><h5>NCC Sandbox Projects</h5></div>
   <ul class="project-group"> 
       <li class="project-item project-alipay-sdk">
          <div class="inner">
                    <div class="project-summary">
                       <p class="summary-text">A third-party Alipay server SDK, based on .NET Standard 2.0 development, provides a more reliable design than the official, but remains consistent with the official apis.</p>
                       <a href="https://github.com/dotnetcore/Alipay.AopSdk.Core" class="skip"></a>
                    </div>
                    <div class="project-meta">
                      <span class="project-avator"></span>
                      <p class="project-name">
                       <a href="https://github.com/dotnetcore/Alipay.AopSdk.Core"><strong>Alipay.AopSdk.Core</strong></a>
                       <a href="https://github.com/stulzq"><em>Project leader: 李志强</em></a>
                     </p>
                    </div>
                 </div>
              </li>
       <li class="project-item project-canal">
          <div class="inner">
                    <div class="project-summary">
                       <p class="summary-text">An open source for Alibaba Canal .NET Client. Canal is the Alibaba MySql database binlog incremental subscription & consumer components.</p>
                       <a href="https://github.com/dotnetcore/CanalSharp" class="skip"></a>
                    </div>
                    <div class="project-meta">
                      <span class="project-avator"></span>
                      <p class="project-name">
                       <a href="https://github.com/dotnetcore/CanalSharp"><strong>CanalSharp</strong></a>
                       <a href="https://github.com/withlin"><em>Project leader: 付金林</em></a>
                     </p>
                    </div>
                 </div>
              </li>
       <li class="project-item project-easycaching">
          <div class="inner">
            <div class="project-summary">
               <p class="summary-text">An open source caching library that contains basic usages and some advanced usages of caching which can help us to handle caching more easier!</p>
               <a href="https://github.com/dotnetcore/EasyCaching" class="skip"></a>
            </div>
            <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                  <a href="https://github.com/dotnetcore/EasyCaching"><strong>EasyCaching</strong></a>
                  <a href="https://github.com/catcherwong"><em>Project leader: 汪文清</em></a>
               </p>
            </div>
         </div>
      </li>
       <li class="project-item project-flubucore">
          <div class="inner">
            <div class="project-summary">
               <p class="summary-text">A cross platform build and deployment automation system for building projects and executing deployment scripts using C# code.</p>
               <a href="https://github.com/dotnetcore/FlubuCore" class="skip"></a>
            </div>
            <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                  <a href="https://github.com/dotnetcore/FlubuCore"><strong>FlubuCore</strong></a>
                  <a href="https://github.com/mzorec"><em>Project leader: Marko Zorec</em></a>
               </p>
            </div>
         </div>
      </li>
      <li class="project-item project-magicodes-ie">
         <div class="inner">
            <div class="project-summary">
               <p class="summary-text">A common import and export library for Excel, Word, PDF and HTML.</p>
               <a href="https://github.com/dotnetcore/Magicodes-IE" class="skip"></a>
            </div>
            <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
               <a href="https://github.com/dotnetcore/Magicodes-IE"><strong>Mgicodes IE</strong></a>
               <a href="https://github.com/xin-lai"><em>Project leader: 李文强</em></a>
            </p>
         </div>
      </div>
      </li>
      <li class="project-item project-asp-natasha">
         <div class="inner">
            <div class="project-summary">
               <p class="summary-text">Simplify IL operations, optimize the IL programming flow, and write dynamic caches that provide high performance.</p>
               <a href="https://github.com/dotnetcore/Natasha" class="skip"></a>
            </div>
            <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
               <a href="https://github.com/dotnetcore/Natasha"><strong>Natasha</strong></a>
               <a href="https://github.com/NMSAzulX"><em>Project leader: LanX</em></a>
            </p>
         </div>
      </div>
      </li>
      <li class="project-item project-smartcode">
         <div class="inner">
            <div class="project-summary">
               <p class="summary-text">An excellent open source code generator (of cause not only a generates code).</p>
               <a href="https://github.com/dotnetcore/SmartCode" class="skip"></a>
            </div>
            <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
               <a href="https://github.com/dotnetcore/SmartCode"><strong>SmartCode</strong></a>
               <a href="https://github.com/Ahoo-Wang"><em>Project leader: Ahoo-Wang</em></a>
            </p>
         </div>
      </div>
   </li>
      <li class="project-item project-smartsql">
         <div class="inner">
            <div class="project-summary">
               <p class="summary-text">SmartSql = MyBatis + Cache(Memory | Redis) + R/W Splitting + Dynamic Repository + Diagnostics.</p>
               <a href="https://github.com/dotnetcore/SmartSql" class="skip"></a>
            </div>
            <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
               <a href="https://github.com/dotnetcore/SmartSql"><strong>SmartSql</strong></a>
               <a href="https://github.com/Ahoo-Wang"><em>Project leader: Ahoo-Wang</em></a>
            </p>
         </div>
      </div>
   </li>
   <li class="project-item project-asp-util">
          <div class="inner">
             <div class="project-summary">
              <p class="summary-text">An open source application framework under the .NET Core platform, designed to improve the development efficiency of small teams. It is composed of common helpers, hierarchical architecture design, UI components, third-party component and service interface packages.</p>
              <a href="https://github.com/dotnetcore/Util" class="skip"></a>
            </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/Util"><strong>Util</strong></a>
                <a href="http://www.cnblogs.com/xiadao521/"><em>Project leader: 何镇汐</em></a>
              </p>
             </div>
          </div>
       </li>
       <li class="project-item project-webapiclient">
          <div class="inner">
                    <div class="project-summary">
                       <p class="summary-text">An open source project based on the HttpClient. You only need to define the c# interface and modify the related features to invoke the client library of the remote http interface asynchronously.</p>
                       <a href="https://github.com/dotnetcore/WebApiClient" class="skip"></a>
                    </div>
                    <div class="project-meta">
                      <span class="project-avator"></span>
                      <p class="project-name">
                       <a href="https://github.com/dotnetcore/WebApiClient"><strong>WebApiClient</strong></a>
                       <a href="https://github.com/xljiulang"><em>Project leader: 老九</em></a>
                     </p>
                    </div>
                 </div>
              </li>
       <li class="project-item project-wtm">
          <div class="inner">
                    <div class="project-summary">
                       <p class="summary-text">A development tool for small and medium-sized back-end management systems. Implement zero-code creation project, zero-code generation management module.</p>
                       <a href="https://github.com/dotnetcore/WTM" class="skip"></a>
                    </div>
                    <div class="project-meta">
                      <span class="project-avator"></span>
                      <p class="project-name">
                       <a href="https://github.com/dotnetcore/WTM"><strong>WTM</strong></a>
                       <a href="https://github.com/liuliang-wt"><em>Project leader: 刘亮</em></a>
                     </p>
                    </div>
                 </div>
              </li>
       
       
     </ul>
     <div class="project-level"><h5>NCC External Sandbox Projects</h5></div>
      <ul class="project-group"> 
         <li class="project-item project-kooboojson">
            <div class="inner">
               <div class="project-summary">
                  <p class="summary-text">Smaller and Faster C# JSON Serialization Tool (Construction Based on Expression Tree).</p>
                  <a href="https://github.com/kooboo/Json" class="skip"></a>
               </div>
               <div class="project-meta">
                  <span class="project-avator"></span>
                  <p class="project-name">
                     <a href="https://github.com/kooboo/Json"><strong>Kooboo Json (ex)</strong></a>
                     <a href="https://github.com/Kooboo"><em>by Kooboo Team</em></a>
                  </p>
               </div>
            </div>
         </li>
         <li class="project-item project-asp-zkweb">
            <div class="inner">
               <div class="project-summary">
               <p class="summary-text">ZKWeb is a flexible web framework support .Net Framework and .Net Core.</p>
               <a href="https://github.com/zkweb-framework/zkweb" class="skip"></a>
               </div>
               <div class="project-meta">
                  <span class="project-avator"></span>
                  <p class="project-name">
                  <a href="https://github.com/zkweb-framework/zkweb"><strong>ZKWeb (ex)</strong></a>
                  <a href="https://www.cnblogs.com/zkweb"><em>by ZKWeb Team</em></a>
               </p>
               </div>
            </div>
         </li>
      </ul>
   <div class="project-level"><h5>NCC Other Projects</h5></div>
      <ul class="project-group"> 
      <li class="project-item project-asp-translate">
         <div class="inner">
            <div class="project-summary">
              <p class="summary-text">The Simplified Chinese edition of Microsoft ASP.NET Core documentation, translated by .NET China Foundation</p>
              <a href="https://github.com/dotnetcore/aspnetcore-doc-cn" class="skip"></a>
             </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/aspnetcore-doc-cn"><strong>.NET Core 文档翻译</strong></a>
                <a href="https://github.com/dotnetcore"><em>by Group of .NET Translation </em></a>
              </p>
             </div>
          </div>
       </li>
       <li class="project-item project-collecton">
          <div class="inner">
             <div class="project-summary">
              <p class="summary-text"></p>
              <a href="https://github.com/dotnetcore/Collections" class="skip"></a>
            </div>
             <div class="project-meta">
               <span class="project-avator"></span>
               <p class="project-name">
                <a href="https://github.com/dotnetcore/Collections"><strong>NCC Collection</strong></a>
                <a href="https://github.com/alexinea"><em>by NCC Team</em></a>
              </p>
             </div>
          </div>
       </li>
   </ul>
  </div>
{% endblock %}