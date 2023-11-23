[Execute your own custom C# code.](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Custom-code)



```csharp
context.CreateTarget("DoExample")
        .Do((c) =>
        {
            //// write your awesome code.
            File.Copy("NotSoAwesome.txt", Path.Combine(OutputDirectory, "JustAnExample.txt") );
            //// Access flubu built in tasks in DO if needed.
            c.Tasks().GenerateT4Template("example.TT").Execute(c);                
        })
        .AddTask(x => x.CompileSolutionTask())
        .Do(NuGetPackageReferencingExample);
```

