# 專案歸檔公告

NPOI 項目的最上遊項目是 [tonyqus/NPOI](https://github.com/tonyqus/NPOI)，該項目是 [Apache POI](https://github.com/apache/poi) 項目的 .NET 版本。[tonyqus/NPOI](https://github.com/tonyqus/NPOI) 是華語地區 [NUGET](https://www.nuget.org/packages/NPOI/) 包下載量最大的項目，為全體海內外開發者們所知，這種榮耀與貢獻是誰也不可能抹殺的，就像 Linux 衍生出那麼多版本，但又有誰會否認 Linus Torvalds 的貢獻？

[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 作為 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 項目的下遊項目，在 2016 年至 2017 年社區急需 .NET Core 版本的 NPOI，且**明確**收到 tony qu 無意遷移和維護 .NET Core 版本的情況下誕生，它是 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 的遷移版本。tony qu 亦多次通過 @alexinea 詢問 [dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 單元測試的進度。[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 的遷移方式是楊曉東老師（我們對他的尊稱，而不是他自稱）一個文件一個文件地遷移的，兩個項目的命名空間和文件目錄都有不少變化。在第一次上傳的自述文件（README.MD）中，楊曉東老師說明了此項目是 NPOI 的 Core 版本，NPOI 項目依然在 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 下。

```
This project is for NPOI Core. NPOI is still under at [https://github.com/tonyqus/npoi](https://github.com/tonyqus/npoi)
```

楊曉東老師無意維護 NFX 版本，而 tony qu 亦無意做 .NET Core 版本的遷移和維護，因此說明這只是 NPOI 的 Core 版本，原版本還是在 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 並無不妥。在後續的版本中，楊曉東老師在自述文件中也明確了這個版本是遷移自 [tonyqus/NPOI](https://github.com/tonyqus/NPOI)。因 **明確** 得知 tony qu 無意遷移和維護 .NET Core 版本，在 GitHub 的協助下，移除了 [dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 對 [tonyqus/NPOI](https://github.com/tonyqus/NPOI) 的 fork 關系，作為獨立下遊項目單獨存在與發展，如同 Linux 下遊分發項目。做開源的，每個人、每個時間段、每個場景都不可能做到那麼完善和嚴謹，只要沒有違反開源協議即無過錯。楊曉東老師無意、NCC 無意抹殺 tony qu 的任何功勞。

我們認為，[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 完成了她的曆史使命，在社區最需要 .NET Core 版本 NPOI 的時候給出了一份選擇。作為上遊項目，tony qu 本無權力要求下遊項目歸檔，可有人聽過上遊 Linux 可以要求下遊的 Linux 歸檔的？他在發給 @alexinea 和楊曉東老師的郵件中指出 NCC「沒有必要靠 NPOI 來撐台面」。經 NCC 內部討論一致決定：不與其爭論，並屏蔽了他。於是暴風雨來了，tony qu 聯系勸說 NCC 成員項目離開 NCC 、聯系微軟要 DMCA dotnetcore（因為他覺得 github.com/dotnetcore 太正式）等，進而導致了一系列 QQ、微信群裏的爭論。但 NCC QQ 大群和微信群，反而沒怎麼討論此事——因為大家都很明白，[dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 並未違反任何開源協議。

對於某些人在微信群、QQ 群截取圖片傳遞給 tony qu 的做法，我們實在不敢恭維。Natasha 作者一開始就說過**要爭論他可以直接拉群讓 tony qu 來討論**，不知道傳話人可有把這句話帶到給 tony qu 呢？更何況 Natasha 群也不是 NCC 的群，它只是 Natasha 技術學習群，卻被 tony qu 認定為 NCC 的群，群內的發言也被 tony qu 到處散播，不知道是不知道還是真的不知道。

我們無意花更多的時間與 tony qu 糾纏，經 NCC PMC 討論，現決定將 [dotnetcore/NPOI](https://github.com/dotnetcore/NPOI) 存檔，以避免 NCC 社區陷入更大的糾紛。如無意外，今後我們也不會再針對這件事做出任何回應。我們感謝海內外開發者們的支持和理解，願與包括各位在內的廣大開發者和開源社區一道，為 .NET 技術和生態做出更多貢獻。

::: right
[NCC 社區專案管理委員會](https://ncc.work/people/project-management-committee)，2020 年 11 月份
:::