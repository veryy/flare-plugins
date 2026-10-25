# flare 插件目录

[浏览插件](https://veryy.github.io/flare-plugins/) · [连接 App](https://veryy.github.io/flare-plugins/connect/) · [SDK 开发包](https://veryy.github.io/flare-plugins/developers/) · [提交插件／反馈](https://github.com/veryy/flare-plugins/issues/new/choose)

此仓库发布静态网站、签名目录、插件包与公开密钥。App 与网站使用同一份签名目录，插件可独立下载和更新。

目录地址：`https://veryy.github.io/flare-plugins/api/catalog.json`

目录根公钥：[catalog-root.pem](catalog-root.pem)

SHA-256 公钥指纹：`2f77fb028a693bde3fec910a4a57fdbfda1d7aedb7a49a4e13282ea32b4ce5ca`

在 flare 的「我的 → 管理插件 → 连接插件目录」填入地址与目录根公钥，核对身份后连接。支持官方目录预设的版本可直接填入，再确认信任。下载文件中的任意公钥不能自动成为信任来源。

当前包含实验性 B 站插件、知乎日报插件及两个明确标记的示例插件。知乎日报仅提供日报文章，不提供完整知乎问答或搜索。B 站搜索可能被平台拒绝；插件详情中的能力说明与限制是判断依据。示例插件不是实际平台接入。

目录序号 7：知乎日报更新至 `1.0.1`，过滤作者头像，避免误作正文插图放大；保留作者署名与正文图片，不新增域名或权限，保留 `1.0.0`。阅读示例仍为 `1.1.0`，提供本地评论与独立回复分页，保留其 `1.0.0` 历史版本。评论界面需要支持该能力的 flare 版本，示例发言不来自真实用户或平台。

开发页提供独立的 JS／TS SDK 工作区、类型、模板、调试工作台、签名工具、锁定依赖与原创本地阅读示例，SDK／工具采用 MIT。无需访问 App 私有仓库；下载后核对 SHA-256，再解压执行 `npm ci` 与 `npm run check`。开发包 `KIT.json` 记录来源提交与逐文件摘要，根目录 README 提供完整步骤。

插件提交和故障反馈通过本仓库的 GitHub Issue 表单接收，由管理员核实作者身份与公钥、检查包和签名后发布；提交不会自动执行或上线。提交签名插件包和签名 JSON 的公开 HTTPS 地址、作者公钥、分类、版本说明与验证记录。不要上传私钥、Cookie、平台账号或带签名参数的媒体 URL。尚无自助注册、在线上传审核与自动发布服务。

目录登记发布者公钥并校验包签名；安装时仍需确认权限。私钥与平台账号凭据不属于此仓库。SDK 下载与反馈页面更新不改变目录序号和已有插件版本。
