AgileConfig supports the access of multiple applications. Information such as the name, ID, and secret key needs to be configured for each application.

Each application can be set to whether it can be inherited, and an application that can be inherited is similar to the concept of a public namespace in Apollo.

- Common configurations can be extracted into an inheritable application, and other applications can obtain all configurations by inheriting it;
- If there is a duplicate configuration key between the child application and the inherited application, the configuration of the child application will override the configuration of the inherited application;
- A child application can inherit multiple applications;
- If there are duplicate keys between multiple applications, the configuration of the application inherited later will override the previous applications according to the inheritance order.

![Applications](/articles/projects/agileconfig/assets/applications.png)