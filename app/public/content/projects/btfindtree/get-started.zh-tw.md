[TOC]

## 使用自定義二分查找樹

```csharp
var dict = Dictionary<T,string>();
dict["a"] = "return 1;";
dict["abc"] = "return 2;";  

var script = BTFTemplate.GetCustomerBTFScript(dict,"arg.GetHashCode()",item=>item.GetHashCode().ToString())+"return default;";  
以上便構建了一段完整的利用HashCode查找的方法體。
//如switch(arg.GetHashCode()){ case 28273847: xxx }
//其中case 28273847 是由 GetCustomerBTFScript 第三個參數，Func<TKey,string> 委托得到的。
```



## 使用 Hash 二分查找樹

```csharp
    //Key :   可以為任意類型，因為真正用到T的是它的HashCode
    //value:  比如是字符串; return 1;/ Action(a); / a=1; 等正常代碼字符串。
    //        作用是當用戶傳入 key 的時候執行 value.
    
    var dict = Dictionary<T,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetHashBTFScript( dict );
    
    //拿到 result 使用 natasha 構造。
    //例如：HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetHashBTFScript(ScriptDict) + "return default;");
    
```



## 使用模糊指針查找樹

```csharp
    //Key :   必須是字串，因為模糊樹和最小權都是針對字串的一種算法結構
    //value:  比如是字符串; return 1;/ Action(a); / a=1; 等正常代碼字符串。
    //        作用是當用戶傳入 key 的時候執行 value.
    
    var dict = Dictionary<string,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetGroupFuzzyPointBTFScript( dict );
    
    //拿到 result 使用 natasha 構造。
    //例如：HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetFuzzyPointBTFScript(ScriptDict) + "return default;");
    
```



## 使用歸並最小權查找樹

```csharp
    //Key :   必須是字串，因為模糊樹和最小權都是針對字串的一種算法結構
    //value:  比如是字符串; return 1;/ Action(a); / a=1; 等正常代碼字符串。
    //        作用是當用戶傳入 key 的時候執行 value.
    
    var dict = Dictionary<string,string>();
    dict["a"] = "return 1;";
    dict["abc"] = "return 2;";
    string result = BTFTemplate.GetGroupPrecisionPointBTFScript( dict );
    
    //拿到 result 使用 natasha 構造。
    //例如：HashDelegate = NDomain.Random().UnsafeFunc<string, int>(BTFTemplate.GetPrecisionPointBTFScript(ScriptDict) + "return default;");
    
```