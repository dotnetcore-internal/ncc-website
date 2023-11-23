[TOC]

## 使用自定义二分查找树

```csharp
var dict = Dictionary<T,string>();
dict["a"] = "return 1;";
dict["abc"] = "return 2;";  

var script = BTFTemplate.GetCustomerBTFScript(dict,"arg.GetHashCode()",item=>item.GetHashCode().ToString())+"return default;";  
以上便构建了一段完整的利用HashCode查找的方法体。
//如switch(arg.GetHashCode()){ case 28273847: xxx }
//其中case 28273847 是由 GetCustomerBTFScript 第三个参数，Func<TKey,string> 委托得到的。
```



## 使用 Hash 二分查找树

```csharp
    //Key :   可以为任意类型，因为真正用到T的是它的HashCode
    //value:  比如是字符串; return 1;/ Action(a); / a=1; 等正常代码字符串。
    //        作用是当用户传入 key 的时候执行 value.
    
    var dict = Dictionary<T,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetHashBTFScript( dict );
    
    //拿到 result 使用 natasha 构造。
    //例如：HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetHashBTFScript(ScriptDict) + "return default;");
    
```



## 使用模糊指针查找树

```csharp
    //Key :   必须是字串，因为模糊树和最小权都是针对字串的一种算法结构
    //value:  比如是字符串; return 1;/ Action(a); / a=1; 等正常代码字符串。
    //        作用是当用户传入 key 的时候执行 value.
    
    var dict = Dictionary<string,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetGroupFuzzyPointBTFScript( dict );
    
    //拿到 result 使用 natasha 构造。
    //例如：HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetFuzzyPointBTFScript(ScriptDict) + "return default;");
    
```



## 使用归并最小权查找树

```csharp
    //Key :   必须是字串，因为模糊树和最小权都是针对字串的一种算法结构
    //value:  比如是字符串; return 1;/ Action(a); / a=1; 等正常代码字符串。
    //        作用是当用户传入 key 的时候执行 value.
    
    var dict = Dictionary<string,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetGroupPrecisionPointBTFScript( dict );
    
    //拿到 result 使用 natasha 构造。
    //例如：HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetPrecisionPointBTFScript(ScriptDict) + "return default;");
    
```