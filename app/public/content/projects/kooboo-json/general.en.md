## Why KoobooJson?

- **KoobooJson is a small, self-contained & high performance json serialization tool**

KoobooJson contains just enough features and focus on performance. Its code structure is very clear that you may continue with your own customized development.

## Difference between KoobooJson and Newtonsoft. Json (Json.Net)?

- **Performance and binary size**

Json.Net is a comprehensive library that contains many features normal users do not need. Those features are the cause of performance & larger binary size. Kooboo Json is 5 times smaller and 5 times faster.

## Difference between KoobooJson and JIL, Utf-8Json?

- **All of them have great performance, Kooboo Json has no depedency like the other two has**.

JIL and Utf-8Json have certain dependencies and implemented some pre-processing mechanisms. This makes the libary size relatively large. Kooboo Json does not depend on any other libary and the entire size is less than 150K.

JIL, UTF-8JSON and many other tools, use the EMIT IL code technique to reach high performance. This makes code very complex and difficult to read. Kooboo Josn uses Expression tree for better readability and maintainability.

Expression tree will be tranlated into IL code for the .NET run time, while EMIT output IL code directly. Emit is by default faster than Expression tree. Kooboo Json uses some self invented techniques, such as branch prediction, shortest call paths, pre-processed matching, improved byte comparison technology, etc. Those techniques make Kooboojson perform better than JIL and UTF-8Json.


