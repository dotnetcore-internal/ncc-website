下載代理器可以部署在不同的機器上，若是單機爬蟲則是每個爬蟲實例會啟動一個單獨的下載代理器。下載代理器負責接收需要下載的請求並使用對應的下載器（HttpClient, Puppter 或者自定義實現的下載器）。

