為 SourceLink 功能提供可繼承性的 NuGet 包。

## 使用方法

1、項目作者引用該包

2、項目作者在發布 NUGET 包時需要指定源碼的 GITHUB 地址

如： `<PackageProjectUrl>https://github.com/dotnetcore/Natasha</PackageProjectUrl>`

3、用戶引用上述 NUGET 包，並對 VS 做出如下設置：

    - 選項 - 調試 - 啟用源鏈接支持。
    - 選項 - 調試 - 去掉 啟用」僅我的代碼「 前面的鉤。

4、用戶在調試時，F11 進入封裝好的函數內