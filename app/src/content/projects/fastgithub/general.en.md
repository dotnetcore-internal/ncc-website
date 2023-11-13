[TOC]

## Introduce

GitHub acceleration artifact, solving the problem of GitHub not opening, user avatars not loading, `releases` not uploading or downloading, and command failures such as `git-clone`, `git-pull`, and `git-push`.

- FastGithub does not have the function of "crossing the GFW", nor does it have any related plans.
- FastGithub does not support operating systems that have been discontinued by the vendor, such as Windows 7, and will not actively provide support.
- FastGithub cannot accelerate your games.
- FastGithub has not actively released in any channels outside of GitHub.

## Software Functions

- Provide pure IP resolution of domain names;
- Provide IP speed test and select the fastest IP;
- Provide custom configuration of TLS connection for domain names;
- Replace Google's CDN resources to solve the problem of many foreign websites failing to load js and css;

##  Security Statement

FastGithub generates self-issued CA certificates for each different host, which are saved in the `cacert` folder. Client devices need to install and unconditionally trust the self-issued CA certificates. Please do not disclose the certificate private key to others to avoid losses.

##  Legal and Compliance Statement

Article 6 of the "Interim Provisions on the Computer Information Networks Connecting to the International Network" stipulates: "For a computer information network to directly conduct international networking, it must use the international entry and exit channels provided by the Ministry of Posts and Telecommunications National Public Telecommunications Network. No unit or individual may establish or use other channels for international networking on its own."

FastGithub's local proxies all use "the international entry and exit channels provided by the public telecommunications network". The traffic from foreign Github servers to the FastGithub program on domestic users' computers uses normal traffic channels, without any additional encryption to the traffic (only the original TLS encryption of the web page, different from the traffic encryption of VPN). The entire proxy process after FastGithub obtains the web page data takes place entirely within the country, and the provisions on the international Internet are no longer applicable.


