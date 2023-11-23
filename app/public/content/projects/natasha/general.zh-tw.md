基於 [Roslyn](https://github.com/dotnet/roslyn) 的 C# 動態程序集構建庫，該庫允許開發者在程序運行中使用 C# 代碼動態的構建域 / 程序集 / 類 / 結構體 / 枚舉 / 接口 / 方法等，為正在運行的程序增加程序集。Natasha 集成了域管理/插件管理，可以實現域隔離，域卸載，熱拔插等功能。 該庫遵循完整的編譯流程，提供完整的錯誤提示，可自動添加引用，完善的數據結構構建模板讓開發者只專注於程序集腳本的編寫，兼容 netcoreapp2.0+ / netcoreapp3.0+, 提供跨平台，統一、簡便的鏈式 API。 且我們會盡快修複您的問題及回複您的 [issue](https://github.com/dotnetcore/Natasha/issues/new).

## 為什麼需要 Natasha

### 當代支柱

動態編譯是支撐當代 .NET 生態 的重要支柱之一，這項技術 「服務」 於各種官方和非官方名庫。動態編譯的核心是 MSIL ，編寫 IL 代碼官方提供了 Emit 技術，但 Emit 編寫和維護是很痛苦的事，比如語法糖還原、異步方法、指令兼容、大量元數據操作、錯誤調試、動態自動機、複雜業務的動態構建等等，在 500 行 EmitCode 的面前，大部分人會面露難色，在 200 行跳轉標簽面前抓耳撓腮，在 100 個 BadIL 面前手足無措，這其中耗費的表情恐怕只有開源項目作者知道。

既然這東西這麼重要為什麼不封裝一下呢？官方提供了相對人性化的表達式樹，但這也僅僅改善了編寫便利，卻額外引入了一些新的東西，比如基於表達式樹的配置與解析等等。

### 解決之路

Roslyn 的出現讓我看到了生態百花齊放的希望，它讓 Emit 變得透明，並允許我們使用 C# 代碼進行動態編譯。這是王道啊，兄弟們，這是新時代的大彩之道啊。這套方案無異於鳥槍換炮，有人可能會比較在意官方的態度，這裏可以說，官方是推薦這麼做的，只不過你能不能駕馭得了的問題，這項技術帶來的成本是引用依賴、錯誤處理、分域加載等問題。經一系列的調研、整理、測試之後，Natasha 已解決上述問題並於 2019 年正式面向大眾，目前 Natasha 在 netcore/net5 版本中發布了穩定版，在這兩年的發展中，我們從整合到解耦，從中規中矩到新科技應用，Natasha 正在走一個由 無 ——> 有 ——> 整 ——> 精 ——> 輕 的路線。接下來我將結合示例詳細講解 Natasha 的應用.

### 項目初識

Natasha 采用 MIT 開源協議, 並接受了實戰的檢驗, 可以通過引用 DotNetCore.Natasha.CSharp 來使用 Natasha.

Natasha 最基本的編譯單元是 AssemblyCSharpBuilder, 該編譯單元有很多屬性:

- CompileErrorBehavior 編譯出錯的行為, 默認為拋出異常;
- SyntaxErrorBehavior 語法出錯的行為,默認為拋出異常;
- AssemblyOutputKind 程序集輸出到文件或內存流;
- OutputFolder 程序集輸出目錄, 默認為當前 APP 下的 DynamicLibraryFolders 目錄;
- CustomUsingShut 使用客戶自定義的 using 引用;

在隨機一個域中生成一個 Test 類

```cs
//初始化 Natasha 編譯組件及環境
NatashaInitializer.Preheating();
//創建編譯單元,並指定程序集名
AssemblyCSharpBuilder oop = new AssemblyCSharpBuilder("myAssembly");
//編譯單元使用從域管理分配出來的隨機域
oop.Domain = DomainManagement.Random();
//增加代碼到編譯單元中
oop.Add(@"namespace HelloWorld{  public class Test{ public Test(){ Name = null; } public string Name; }  }");
//根據短名獲取程序集中的類,長名則如 "HelloWorld.Test"
Type type = oop.GetTypeFromShortName("Test");
```



以上展示了對字符串的構造, Natasha 對此提供了很多模板以簡化操作比如 NClass, 以上代碼可以轉換為:

```cs
var type = NClass
.RandomDomain()
.Namespace("HelloWorld")
.Name("Test")
.Ctor(item => item.Public().Body("Name = null;"))
.PublicField<string>("Name")
.GetType();
```



需要注意的是,這個程序集屬於某個隨即域中, 你可以使用 type.DisposeDomain() 來移除引用以便 GC 來卸載它. 主域(程序開始的域)又叫共享域, 隨機域可以拿到主域中的類型及數據,隨機域之間的調用是不允許的, 這個特性也讓後面的插件編程大顯身手.

### 簡單應用場景

到此我們學習了如何使用 Natasha 構建類, 我們可以嘗試自己完成一些簡單場景, 比如實現一個 AOP 代理類, 如果你對 AOP 代理類有足夠的了解, 我相信 5 分鍾即可有小成.

之前有寫過例子,可供參考. 還可動態構建 Contoller 以實現動態 API 功能, 但這需要 MVC/WebAPI 相關的知識. 另可以結合 FreeSql 等支持 CodeFirst 的 ORM 在程序初始化時創建表結構, 有些公司實體要求低侵入性, 甚至 0 侵入性, 此時你可以使用 Natasha 構建帶有標簽侵入的臨時類來代替實體類完成部分功能.

Natasha 是實打實的動態實戰項目, 上面列舉的示例都需要具備一定的編程基礎才行, 如果沒有需求和思考建議不要生搬硬套.


