在從零實現AOP的過程中，難免會需要大量反射相關的操作，雖然在.net 4.5+/.net core中反射的性能有了大幅的優化，但為了追求極致性能，自己實現了部分反射的替代方案，包括構造器調用、方法調用、字段讀寫，屬性讀寫和特性讀取。在重構時，把反射擴展操作封裝到單獨的項目中，以此方便自己和大家使用。

更多信息可閱讀[文檔](https://github.com/dotnetcore/AspectCore-Framework/blob/master/docs/reflection-extensions.md)