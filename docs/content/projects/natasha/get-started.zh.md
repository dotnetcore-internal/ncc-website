## 场景

Emit 和表达式树的使用场景，Natasha 均适用。

## 使用群体

首先来说本类库并不是为初学者准备的，而是需要有一定的封装基础，有一定的动态编程经验的人。
尽管 Natasha 入门十分简单，但如果您没有基础知识和经验的话还是不知道它能用在何处。

## 安装

如果您的项目是 .NetCore 项目，那么您可以使用 Natasha .

- 命令
  `Install-Package DotNetCore.Natasha.CSharp -Version xxxx`
- nuget
  `DotNetCore.Natasha.CSharp`

## 用前必看

1. Natasha 自 4.2.0.0 起开始支持轻量化编译,如果需要覆盖全部引用,请引入`DotNetCore.Compile.Environment`包.
2. Natasha 生成文件较多可以在项目文件中增加 `<SatelliteResourceLanguages>en</SatelliteResourceLanguages>` 来指定默认的资源语言.
3. Natasha 使用前必须预热: `NatashaManagement/NatashaInitializer.Preheating();` 选择任何一个类初始化都可以.


## Natasha 封装规约

Natasha 有自己的封装规则，这可以让封装者思路更加清晰，并让作品更加容易维护。

## 一个完整的 Operator

Operator 作为动态构建对外使用的操作类，一个 Operator 可大致由以下 3 部分组成：

- Template
- Builder
- Package / Extension

Template + Compiler => Builder Package(Builder) + API + Extension => Operator

## 脚本构建器（Builder）

作为 Operator 最重要的核心部分，Builder 主要为 Operator 提供委托，可以从外部接收配置，可以在内部组合模板并进行编译。
其大致分为两部分 Template 模板与 Compiler 编译器：

- Template 构建模板 使用 Template 模板构建运行时脚本字符串，模板对外暴漏 API 以方便使用者组成编译字符串。
    - UsingTemplat 是 Natasha 内置模板，提供了从命名空间到完整对象的代码构建。
    - DelegateTemplate 是 Natasha 内置模板，提供了方法代码的构建。
    - FieldTemplate 是 Natasha 内置模板，提供了字段代码的构建。
    - PropertyTemplate 是 Natasha 内置模板，提供了属性代码的构建。

- Compiler 编译器 编译器接收模板提供的字符串并进行编译，完成 Builder 的编译任务。 - AssemblyCSharpBuilder : 使用 Natasha 的 CSharp 编译器可以轻松的完成字符串的编译和元数据的提取。

```csharp
 直接使用 Natasha 内置的 Builder 可以快速实现定制，例如： OopBuilder<TOperator> ，MethodBuilder<TOperator>。
 前者为其提供对象构造模板，后者专注构建方法。
```



## 操作类（Operator）

Operator 在 Builder 的基础上进行了 Package 封装，Operator 存储了 Builder 提供的编译结果，对外暴漏用户级别的 API 。

#### 案例

例如 Natasha 内置的 [FastMethodOperator](https://github.com/dotnetcore/Natasha/blob/master/src/Natasha.CSharp/Natasha.CSharp.Template/Api/Level1/Operator/FastMethodOperator.cs) 在 [MethodBuilder](https://github.com/dotnetcore/Natasha/blob/master/src/Natasha.CSharp/Natasha.CSharp.Template/Builder/MethodBuilder.cs) 的基础上进行了包装和简化，FastMethodOpeartor 的初始化函数中定制了一个专属自己的脚本构建流程，如下模板翻译成 `public static` ：

```cs
this.Access(AccessFlags.Public)
.Modifier(ModifierFlags.Static);
```