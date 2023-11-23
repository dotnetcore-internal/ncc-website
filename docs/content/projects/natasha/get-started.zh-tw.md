## 場景

Emit 和表達式樹的使用場景，Natasha 均適用。

## 使用群體

首先來說本類庫並不是為初學者准備的，而是需要有一定的封裝基礎，有一定的動態編程經驗的人。
盡管 Natasha 入門十分簡單，但如果您沒有基礎知識和經驗的話還是不知道它能用在何處。

## 安裝

如果您的項目是 .NetCore 項目，那麼您可以使用 Natasha .

- 命令
  `Install-Package DotNetCore.Natasha.CSharp -Version xxxx`
- nuget
  `DotNetCore.Natasha.CSharp`

## 用前必看

1. Natasha 自 4.2.0.0 起開始支持輕量化編譯,如果需要覆蓋全部引用,請引入`DotNetCore.Compile.Environment`包.
2. Natasha 生成文件較多可以在項目文件中增加 `<SatelliteResourceLanguages>en</SatelliteResourceLanguages>` 來指定默認的資源語言.
3. Natasha 使用前必須預熱: `NatashaManagement/NatashaInitializer.Preheating();` 選擇任何一個類初始化都可以.


## Natasha 封裝規約

Natasha 有自己的封裝規則，這可以讓封裝者思路更加清晰，並讓作品更加容易維護。

## 一個完整的 Operator

Operator 作為動態構建對外使用的操作類，一個 Operator 可大致由以下 3 部分組成：

- Template
- Builder
- Package / Extension

Template + Compiler => Builder Package(Builder) + API + Extension => Operator

## 腳本構建器（Builder）

作為 Operator 最重要的核心部分，Builder 主要為 Operator 提供委托，可以從外部接收配置，可以在內部組合模板並進行編譯。
其大致分為兩部分 Template 模板與 Compiler 編譯器：

- Template 構建模板 使用 Template 模板構建運行時腳本字符串，模板對外暴漏 API 以方便使用者組成編譯字符串。
    - UsingTemplat 是 Natasha 內置模板，提供了從命名空間到完整對象的代碼構建。
    - DelegateTemplate 是 Natasha 內置模板，提供了方法代碼的構建。
    - FieldTemplate 是 Natasha 內置模板，提供了字段代碼的構建。
    - PropertyTemplate 是 Natasha 內置模板，提供了屬性代碼的構建。

- Compiler 編譯器 編譯器接收模板提供的字符串並進行編譯，完成 Builder 的編譯任務。 - AssemblyCSharpBuilder : 使用 Natasha 的 CSharp 編譯器可以輕松的完成字符串的編譯和元數據的提取。

```csharp
 直接使用 Natasha 內置的 Builder 可以快速實現定制，例如： OopBuilder<TOperator> ，MethodBuilder<TOperator>。
 前者為其提供對象構造模板，後者專注構建方法。
```



## 操作類（Operator）

Operator 在 Builder 的基礎上進行了 Package 封裝，Operator 存儲了 Builder 提供的編譯結果，對外暴漏用戶級別的 API 。

#### 案例

例如 Natasha 內置的 [FastMethodOperator](https://github.com/dotnetcore/Natasha/blob/master/src/Natasha.CSharp/Natasha.CSharp.Template/Api/Level1/Operator/FastMethodOperator.cs) 在 [MethodBuilder](https://github.com/dotnetcore/Natasha/blob/master/src/Natasha.CSharp/Natasha.CSharp.Template/Builder/MethodBuilder.cs) 的基礎上進行了包裝和簡化，FastMethodOpeartor 的初始化函數中定制了一個專屬自己的腳本構建流程，如下模板翻譯成 `public static` ：

```cs
this.Access(AccessFlags.Public)
.Modifier(ModifierFlags.Static);
```