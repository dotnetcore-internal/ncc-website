基于 [Roslyn](https://github.com/dotnet/roslyn) 的 C# 动态程序集构建库，该库允许开发者在程序运行中使用 C# 代码动态的构建域 / 程序集 / 类 / 结构体 / 枚举 / 接口 / 方法等，为正在运行的程序增加程序集。Natasha 集成了域管理/插件管理，可以实现域隔离，域卸载，热拔插等功能。 该库遵循完整的编译流程，提供完整的错误提示，可自动添加引用，完善的数据结构构建模板让开发者只专注于程序集脚本的编写，兼容 netcoreapp2.0+ / netcoreapp3.0+, 提供跨平台，统一、简便的链式 API。 且我们会尽快修复您的问题及回复您的 [issue](https://github.com/dotnetcore/Natasha/issues/new).

## 为什么需要 Natasha

### 当代支柱

动态编译是支撑当代 .NET 生态 的重要支柱之一，这项技术 “服务” 于各种官方和非官方名库。动态编译的核心是 MSIL ，编写 IL 代码官方提供了 Emit 技术，但 Emit 编写和维护是很痛苦的事，比如语法糖还原、异步方法、指令兼容、大量元数据操作、错误调试、动态自动机、复杂业务的动态构建等等，在 500 行 EmitCode 的面前，大部分人会面露难色，在 200 行跳转标签面前抓耳挠腮，在 100 个 BadIL 面前手足无措，这其中耗费的表情恐怕只有开源项目作者知道。

既然这东西这么重要为什么不封装一下呢？官方提供了相对人性化的表达式树，但这也仅仅改善了编写便利，却额外引入了一些新的东西，比如基于表达式树的配置与解析等等。

### 解决之路

Roslyn 的出现让我看到了生态百花齐放的希望，它让 Emit 变得透明，并允许我们使用 C# 代码进行动态编译。这是王道啊，兄弟们，这是新时代的大彩之道啊。这套方案无异于鸟枪换炮，有人可能会比较在意官方的态度，这里可以说，官方是推荐这么做的，只不过你能不能驾驭得了的问题，这项技术带来的成本是引用依赖、错误处理、分域加载等问题。经一系列的调研、整理、测试之后，Natasha 已解决上述问题并于 2019 年正式面向大众，目前 Natasha 在 netcore/net5 版本中发布了稳定版，在这两年的发展中，我们从整合到解耦，从中规中矩到新科技应用，Natasha 正在走一个由 无 ——> 有 ——> 整 ——> 精 ——> 轻 的路线。接下来我将结合示例详细讲解 Natasha 的应用.

### 项目初识

Natasha 采用 MIT 开源协议, 并接受了实战的检验, 可以通过引用 DotNetCore.Natasha.CSharp 来使用 Natasha.

Natasha 最基本的编译单元是 AssemblyCSharpBuilder, 该编译单元有很多属性:

- CompileErrorBehavior 编译出错的行为, 默认为抛出异常;
- SyntaxErrorBehavior 语法出错的行为,默认为抛出异常;
- AssemblyOutputKind 程序集输出到文件或内存流;
- OutputFolder 程序集输出目录, 默认为当前 APP 下的 DynamicLibraryFolders 目录;
- CustomUsingShut 使用客户自定义的 using 引用;

在随机一个域中生成一个 Test 类

```cs
//初始化 Natasha 编译组件及环境
NatashaInitializer.Preheating();
//创建编译单元,并指定程序集名
AssemblyCSharpBuilder oop = new AssemblyCSharpBuilder("myAssembly");
//编译单元使用从域管理分配出来的随机域
oop.Domain = DomainManagement.Random();
//增加代码到编译单元中
oop.Add(@"namespace HelloWorld{  public class Test{ public Test(){ Name = null; } public string Name; }  }");
//根据短名获取程序集中的类,长名则如 "HelloWorld.Test"
Type type = oop.GetTypeFromShortName("Test");
```



以上展示了对字符串的构造, Natasha 对此提供了很多模板以简化操作比如 NClass, 以上代码可以转换为:

```cs
var type = NClass
.RandomDomain()
.Namespace("HelloWorld")
.Name("Test")
.Ctor(item => item.Public().Body("Name = null;"))
.PublicField<string>("Name")
.GetType();
```



需要注意的是,这个程序集属于某个随即域中, 你可以使用 type.DisposeDomain() 来移除引用以便 GC 来卸载它. 主域(程序开始的域)又叫共享域, 随机域可以拿到主域中的类型及数据,随机域之间的调用是不允许的, 这个特性也让后面的插件编程大显身手.

### 简单应用场景

到此我们学习了如何使用 Natasha 构建类, 我们可以尝试自己完成一些简单场景, 比如实现一个 AOP 代理类, 如果你对 AOP 代理类有足够的了解, 我相信 5 分钟即可有小成.

之前有写过例子,可供参考. 还可动态构建 Contoller 以实现动态 API 功能, 但这需要 MVC/WebAPI 相关的知识. 另可以结合 FreeSql 等支持 CodeFirst 的 ORM 在程序初始化时创建表结构, 有些公司实体要求低侵入性, 甚至 0 侵入性, 此时你可以使用 Natasha 构建带有标签侵入的临时类来代替实体类完成部分功能.

Natasha 是实打实的动态实战项目, 上面列举的示例都需要具备一定的编程基础才行, 如果没有需求和思考建议不要生搬硬套.


