Built-in Attributes refer to some attributes provided within the framework that can be used directly to meet various applications in general situations. Of course, developers can also write attributes that meet the needs of specific scenarios in practical applications, and then decorate custom attributes to interfaces, methods, or parameters.

## Execution Order

Parameter Value Validation -> IApiActionAttribute -> IApiParameterAttribute -> IApiReturnAttribute -> IApiFilterAttribute

## Execution Order After Execution

IApiReturnAttribute -> Return Value Validation -> IApiFilterAttribute