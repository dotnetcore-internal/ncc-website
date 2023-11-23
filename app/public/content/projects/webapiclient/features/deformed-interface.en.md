In practical application scenarios, we often encounter some poorly designed deformed interfaces, mainly those interfaces that did not have the concept of restful in the early days. We need to identify and analyze these interfaces and package them into friendly client invocation interfaces:

- Unfriendly parameter names aliases
- A field in the form is JSON text
- Nested model submission form
- Response does not specify ContentType
- Signature-like parameters or apikey parameters
- Form field sorting