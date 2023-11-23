解壓tool文件夾下 `keygen.zip` 壓縮包，運行 `start.bat` 即可在 keys 目錄下生成公鑰和私鑰，長度為 2048。

這裏生成的公鑰和私鑰，只需將**私鑰**配置到配置文件文件中，公鑰需要設置到支付寶後台。然後設置`SignType`為`RSA2`。配置文件中的公鑰配置，不是我們自己生成的這個，需要到支付寶後台獲取，這裏需要注意一下。

![KeyGen](/articles/projects/alipay-sdk/assets/keygen.png)