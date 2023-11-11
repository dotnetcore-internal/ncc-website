# 项目存档通告

NPOI 项目的最上游项目是 [tonyqus/NPOI](https://github.com/tonyqus/NPOI)，该项目是 [Apache POI](https://github.com/apache/poi) 项目的 .NET 版本。[tonyqus/NPOI](https://github.com/tonyqus/NPOI) 是华语地区 [NUGET](https://www.nuget.org/packages/NPOI/) 包下载量最大的项目，为全体海内外开发者们所知，这种荣耀与贡献是谁也不可能抹杀的，就像 Linux 衍生出那么多版本，但又有谁会否认 Linus Torvalds 的贡献？

[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 作为 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 项目的下游项目，在 2016 年至 2017 年社区急需 .NET Core 版本的 NPOI，且**明确**收到 tony qu 无意迁移和维护 .NET Core 版本的情况下诞生，它是 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 的迁移版本。tony qu 亦多次通过 @alexinea 询问 [dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 单元测试的进度。[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 的迁移方式是杨晓东老师（我们对他的尊称，而不是他自称）一个文件一个文件地迁移的，两个项目的命名空间和文件目录都有不少变化。在第一次上传的自述文件（README.MD）中，杨晓东老师说明了此项目是 NPOI 的 Core 版本，NPOI 项目依然在 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 下。

```
This project is for NPOI Core. NPOI is still under at [https://github.com/tonyqus/npoi](https://github.com/tonyqus/npoi)
```

杨晓东老师无意维护 NFX 版本，而 tony qu 亦无意做 .NET Core 版本的迁移和维护，因此说明这只是 NPOI 的 Core 版本，原版本还是在 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 并无不妥。在后续的版本中，杨晓东老师在自述文件中也明确了这个版本是迁移自 [tonyqus/NPOI](https://github.com/tonyqus/NPOI)。因 **明确** 得知 tony qu 无意迁移和维护 .NET Core 版本，在 GitHub 的协助下，移除了 [dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 对 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 的 fork 关系，作为独立下游项目单独存在与发展，如同 Linux 下游分发项目。做开源的，每个人、每个时间段、每个场景都不可能做到那么完善和严谨，只要没有违反开源协议即无过错。杨晓东老师无意、NCC 无意抹杀 tony qu 的任何功劳。

我们认为，[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 完成了她的历史使命，在社区最需要 .NET Core 版本 NPOI 的时候给出了一份选择。作为上游项目，tony qu 本无权力要求下游项目归档，可有人听过上游 Linux 可以要求下游的 Linux 归档的？他在发给 @alexinea 和杨晓东老师的邮件中指出 NCC「没有必要靠 NPOI 来撑台面」。经 NCC 内部讨论一致决定：不与其争论，并屏蔽了他。于是暴风雨来了，tony qu 联系劝说 NCC 成员项目离开 NCC 、联系微软要 DMCA dotnetcore（因为他觉得 github.com/dotnetcore 太正式）等，进而导致了一系列 QQ、微信群里的争论。但 NCC QQ 大群和微信群，反而没怎么讨论此事——因为大家都很明白，[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 并未违反任何开源协议。

对于某些人在微信群、QQ 群截取图片传递给 tony qu 的做法，我们实在不敢恭维。Natasha 作者一开始就说过**要争论他可以直接拉群让 tony qu 来讨论**，不知道传话人可有把这句话带到给 tony qu 呢？更何况 Natasha 群也不是 NCC 的群，它只是 Natasha 技术学习群，却被 tony qu 认定为 NCC 的群，群内的发言也被 tony qu 到处散播，不知道是不知道还是真的不知道。

我们无意花更多的时间与 tony qu 纠缠，经 NCC PMC 讨论，现决定将 [dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 存档，以避免 NCC 社区陷入更大的纠纷。如无意外，今后我们也不会再针对这件事做出任何回应。我们感谢海内外开发者们的支持和理解，愿与包括各位在内的广大开发者和开源社区一道，为 .NET 技术和生态做出更多贡献。

::: right
[NCC 社区项目管理委员会](https://ncc.work/people/project-management-committee)，2020 年 11 月份
:::