A library of C-dynamic assembly buildings based on [Roslyn](https://github.com/dotnet/roslyn) , which allows developers to add assemblies to running programs by using the dynamic build domain/assembly/class/structure/enumeration/interface/method, etc. of the C# code dynamically in the run of the program.Natasha integrates domain management/plug-in management for domain isolation, domain offloading, hot-swapping and more. The library follows a complete compilation process, provides complete error tips, automatically adds references, and a well-developed data structure building template that allows developers to focus only on assembly scripting, compatible with netcoreapp2.0 plus / netcoreapp3.0 plus, providing a cross-platform, unified, simple chain API. And we will fix your problem and reply to your as soon as possible .

## Why Natasha

### Knowledge reserve

Up to now, there are still many people asking what dynamic compilation is, what scenes Emit is used in, how to use the expression tree, it is recommended that if you do not know the students first to find information to learn, such as[food article](https://www.cnblogs.com/whuanle/category/1548012.html).

### Contemporary pillars

Dynamic compilation is one of the key pillars supporting the contemporary .NET ecosystem, and this technology "serves" a variety of official and unofficial libraries.The core of dynamic compilation is MSIL, and writing IL code officially provides Emit technology, but writing and maintaining Emit is painful, such as syntax sugar reduction, asynchronous methods, instruction compatibility, large amounts of metadata manipulation, error debugging, dynamic automata, dynamic building of complex businesses, and so on. I'm afraid only the author of the open source project knows the expression.

Since this thing is so important, why not wrap it up?Officials offer a relatively human expression tree, but this only improves the ease of writing, but introduces new things, such as expression tree-based configuration and parsing.

### The way to solve it

The emergence of Roslyn gave me hope of an eco-flowering that made Emit transparent and allowed us to compile dynamically using C# code.This is Wang Dao, brothers, this is the new era of the great color of the way ah.This scheme is tantamount to a bird gun for a gun, some people may care more about the official attitude, it can be said that the official is recommended to do so, but you can not control the problem, the cost of this technology is reference dependency, error handling, domain loading and other issues.After a series of research, collation, and testing, Natasha has addressed these issues and is officially available to the public in 2019, and now Natasha has released a stable version in the netcore/net5 release, and over the course of the past two years, we have gone from integration to decoupling, from mid-term to new technology applications, natasha is taking a light route from no-> -> -> -> .Next I'll go into more detail about Natasha's application in conjunction with the sample.

### Project first knowledge

Natasha adopts the MIT open source protocol and has been tested in practice, and can be used by referencing DotNetCore.Natasha.CSharp.

Natasha's most basic compilation unit is AssemblyCSharpBuilder, which has many properties:

- CompileErorBehavior compiles the wrong behavior, defaulting to throwing an exception;
- The behavior of SyntaxError Behavior syntax errors, which defaults to throwing exceptions;
- AssemblyOutputKind assembly output to file or memory stream;
- OutputFold assembly output directory, default to dynamicLibraryFolds directory under current APP;
- CustomUsingShut uses a customer-defined using reference;

Build a Test class in a random domain

```cs
Initialize the Natasha compilation components and environment
NatashaInitializer.Preheating();
// Create a compilation unit and specify the assembly name
AssemblyCSharpBuilder oop = new AssemblyCSharpBuilder("myAssembly");
//Compilation unit uses random domains assigned from domain management
oop. Domain = DomainManagement.Random();
//Add code to the compilation unit
oop. Add(@"namespace HelloWorld{  public class Test{ public Test(){ Name = null; } public string Name; }  }");
// gets the class in the assembly according to the short name, and the long name is "HelloWorld.Test"
Type type = oop. GetTypeFromShortName("Test");
```



The above shows the construction of strings, for which Natasha provides a number of templates to simplify operations such as NClass, which can be converted to:

```cs
var type = NClass
. RandomDomain()
. Namespace("HelloWorld")
. Name("Test")
. Ctor(item => item. Public(). Body("Name = null;" ))
. PublicField<string>("Name")
. GetType();
```



Note that this assembly belongs to a certain immediate domain, and you can use type. DisposeDomain() to remove the reference so that the GC can uninstall it. The main domain (the domain where the program starts) is also called the shared domain, the random domain can get the types and data in the main domain, the call between the random domains is not allowed, this feature also makes the later plug-in programming a big hand.

### Simple scenario

At this point we learned how to use Natasha to build classes, we can try to complete some simple scenarios ourselves, such as implementing an AOP proxy class, if you know enough about AOP proxy classes, I believe that in 5 minutes you can have a small success.

There have been written examples before for reference. Controller can also be built dynamically to implement dynamic API functionality, but this requires knowledge of MVC/WebAPI. You can also use FreeSql and other CODEFirst-enabled ORMs to create table structures during program initialization, some corporate entities require low intrusiveness, or even zero intrusiveness, at which point you can use Natasha to build temporary classes with labeled intrusions to replace the entity classes to complete some of the functions.

Natasha is a real dynamic practical project, the examples listed above all need to have a certain programming foundation, if there is no need and thinking advice not to be rigid.

