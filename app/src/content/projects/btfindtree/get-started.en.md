[TOC]

## Use a custom binary search tree

```csharp
var dict = Dictionary<T,string>();
dict["a"] = "return 1;";
dict["abc"] = "return 2;";  

var script = BTFTemplate.GetCustomerBTFScript(dict,"arg.GetHashCode()",item=>item.GetHashCode().ToString())+"return default;";  
The above constitutes a complete method body for finding using GetHashCode.
// Such as switch(arg.GetHashCode()) { case 28273847: xxx }
// Where case 28273847 is obtained from the third parameter of GetCustomerBTFScript, the Func<TKey,string> delegate.
```



## Using Hash binary search tree

```csharp
    //Key: Can be of any type, because the real use of T is its GetHashCode
    //value: For example, it is a string; return 1;/ Action(a);/ a=1; and other normal code strings.
    //       The effect is to execute value when the user passes in key.
    
    var dict = Dictionary<T,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetHashBTFScript(dict);
    
    //Use natasha to construct with the result obtained.
    //For example: HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetHashBTFScript(ScriptDict) + "return default;");
    
```



## Using Fuzzy Pointer Search Tree

```csharp
    //Key: Must be a string, because both the fuzzy tree and the minimum weight are algorithms that target strings.
    //value: For example, it is a string; return 1;/ Action(a);/ a=1; and other normal code strings.
    //       The effect is to execute value when the user passes in key.
    
    var dict = Dictionary<string,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetGroupFuzzyPointBTFScript(dict);
    
    //Use natasha to construct with the result obtained.
    //For example: HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetFuzzyPointBTFScript(ScriptDict) + "return default;");
    
```



## Using Merging Minimum Weight Search Tree

```csharp
    //Key: Must be a string, because both the fuzzy tree and the minimum weight are algorithms that target strings.
    //value: For example, it is a string; return 1;/ Action(a);/ a=1; and other normal code strings.
    //       The effect is to execute value when the user passes in key.
    
    var dict = Dictionary<string,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetGroupPrecisionPointBTFScript(dict);
    
    //Use natasha to construct with the result obtained.
    //For example: HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetPrecisionPointBTFScript(ScriptDict) + "return default;");
    
```