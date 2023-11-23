AgileConfig supports maintaining configurations through JSON RESTful APIs.

Both input and output parameters of the interface are in JSON format, so you need to set the `Content-Type` header to `application/json`.

The interface uses Basic authentication, setting the `Authorization` header to `Basic base64(userName:password)`. Where `userName` and `password` are the username and password of the configuration center.