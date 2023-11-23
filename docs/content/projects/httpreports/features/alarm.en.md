HttpReports.Dashboard supports the warning monitoring function. After setting the request rules, when the warning is triggered, the warning information will be pushed to the mailbox or WebHook. To use this function, you need to configure the Smtp mailbox first, otherwise you will not receive the warning email.

![Alarm 1](/content/projects/httpreports/assets/alarm-1.png)

![Alarm 2](/content/projects/httpreports/assets/alarm-2.png)

# Monitoring Types

The monitoring function mainly monitors the following four items:

- Response timeout
- Request error
- Request volume monitoring

# WebHook

Warning supports WebHook. After configuration, the warning information can be automatically pushed to the address you defined, and the push method is Post push.

```json
{
  "Title":"...",
  "Content":"..."
}
```