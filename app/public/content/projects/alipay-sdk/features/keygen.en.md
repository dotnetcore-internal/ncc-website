Unzip the compressed package `keygen.zip` in the `tool` folder and run `start.bat` to generate public key and private key in the `keys` directory, with a length of 2048.

The public key and private key generated here only need to configure the **private key** in the configuration file, and the public key needs to be set in the Alipay backend. Then set `SignType` to `RSA2`. The public key configuration in the configuration file is not the one we generate ourselves, it needs to be obtained from the Alipay backend, which needs to be noted here.

![KeyGen](/content/projects/alipay-sdk/assets/keygen.png)