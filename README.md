# flare 插件目录

[浏览插件](https://veryy.github.io/flare-plugins/) · [连接 App](https://veryy.github.io/flare-plugins/connect/)

此仓库发布静态网站、签名目录、插件包与公开密钥。App 与网站使用同一份签名目录，插件可独立下载和更新。

目录地址：`https://veryy.github.io/flare-plugins/api/catalog.json`

目录根公钥：[catalog-root.pem](catalog-root.pem)

SHA-256 公钥指纹：`2f77fb028a693bde3fec910a4a57fdbfda1d7aedb7a49a4e13282ea32b4ce5ca`

在 flare 的「我的 → 管理插件 → 连接插件目录」填入地址与目录根公钥，核对身份后连接。支持官方目录预设的版本可直接填入，再确认信任。下载文件中的任意公钥不能自动成为信任来源。

当前包含实验性 B 站插件、知乎日报插件及两个明确标记的示例插件。知乎日报仅提供日报文章，不提供完整知乎问答或搜索。B 站搜索可能被平台拒绝；插件详情中的能力说明与限制是判断依据。示例插件不是实际平台接入。

目录登记发布者公钥并校验包签名；安装时仍需确认权限。私钥与平台账号凭据不属于此仓库。当前由管理员审核后发布，尚无开发者自助上传与审核服务。
