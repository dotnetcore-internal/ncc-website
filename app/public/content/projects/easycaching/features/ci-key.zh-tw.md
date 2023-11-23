這裏的關鍵是根據要攔截的方法的信息（方法、參數）和自定義前綴自動生成。

對於一些基本數據類型，它將被轉換為字符串，然後進行拼接。

對於複雜類型，如自定義類，EasyCaching 提供了 ICachable 接口，允許用戶定義生成類的緩存鍵。

```public interface ICachable
{
    string CacheKey { get; }
}
```