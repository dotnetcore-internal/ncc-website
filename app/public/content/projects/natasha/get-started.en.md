## Scenario

Both Emit and Expression Tree use scenarios, Natasha, apply.

## Use groups

First of all, this class library is not for beginners, but needs to have a certain packaging basis, have a certain degree of dynamic programming experience of people.First of all, this class library is not for beginners, but needs to have a certain packaging basis, have a certain dynamic programming skills of people.
Although Natasha is easy to get started, you don't know where it can be used if you don't have the basics and experience.
Although Natasha is easy to get started, you don't know where it can be used if you don't have the basics and experience.

## Installation

If your project is . NetCore project, then you can use Natasha .

- Command
  `Install-Package DotNetCore.Natasha.CSharp -Version xxxx`
- nuget
  `DotNetCore.Natasha.CSharp`

## A must see before use

1. Natasha supports lightweight compilation starting at 4.2.0.0, if you need to override all references, please introduce the`DotNetCore.Compile.Environment`package.
2. The more Natasha make files can be added to the project file `<SatelliteResourceLanguages>en</SatelliteResourceLanguages>` to specify the default resource language.
3. Natasha must be warmed up before use: `NatashaManagement/NatashaInitializer.Preheating();` select any one of the classes to initialize.

## Natasha encapsulation protocol

Natasha has its own encapsulation rules, which allow the encapsulator to think more clearly and make the work easier to maintain.

## A complete Operator

Operator, as a dynamically built operation class for external use, can consist of approximately the following three parts：

- Template
- Builder
- Package / Extension

Template + Compiler => Builder Package(Builder) + API + Extension => Operator

## Script Builder

As the most important core part of Operator, Builder primarily provides delegates for Operator, can receive configurations from outside, can combine templates internally, and compiles them.
it is roughly divided into two parts, the Template template and the Compiler compiler：
it is roughly divided into two parts, the Template template and the Compiler compiler：
It is roughly divided into two parts: the Template template and the Compiler compiler：

- Template Build Template Use template templates to build runtime script strings, and templates leak OUT of the API to make it easier for consumers to compose compilation strings.
    - UsingTemplat is Natasha's built-in template that provides code builds from namespaces to complete objects.
    - DelegateTemplate is Natasha's built-in template that provides the build of method code.
    - FieldTemplate is Natasha's built-in template that provides the build of field code.
    - PropertyTemplate is Natasha's built-in template that provides the build of property code.

- Compiler compiler

  The compiler takes the strings provided by the template and compiles them to complete Builder's compilation task.

    - AssemblyCSharpBuilder: Using Natasha's CSharp compiler, you can easily compile strings and extract metadata.

```csharp
 Customization can be quickly achieved using Natasha's built-in Builder, such as： OopBuilder<TOperator> , MethodBuilder<TOperator>.
 The former provides it with an object construction template, while the latter focuses on the build method.
```



## Operator

The Operator is packaged on the basis of Builder, and the Operator stores the compilation results provided by the Builder, exposing user-level APIs to the outside world.

#### Case

For example, Natasha built-in [FastMethodOperator](https://github.com/dotnetcore/Natasha/blob/master/src/Natasha.CSharp/Natasha.CSharp.Template/Api/Level1/Operator/FastMethodOperator.cs) at [MethodBuilder](https://github.com/dotnetcore/Natasha/blob/master/src/Natasha.CSharp/Natasha.CSharp.Template/Builder/MethodBuilder.cs) Based on packaging and simplification, FastMethodOpeartor's initialization function has customized its own script construction process, which is translated into the following template `public static` ：

```cs
this. Access(AccessFlags.Public)
. Modifier(ModifierFlags.Static);
```