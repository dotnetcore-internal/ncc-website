解压tool文件夹下 `keygen.zip` 压缩包，运行 `start.bat` 即可在 keys 目录下生成公钥和私钥，长度为 2048。

这里生成的公钥和私钥，只需将**私钥**配置到配置文件文件中，公钥需要设置到支付宝后台。然后设置`SignType`为`RSA2`。配置文件中的公钥配置，不是我们自己生成的这个，需要到支付宝后台获取，这里需要注意一下。

![KeyGen](/content/projects/alipay-sdk/assets/keygen.png)