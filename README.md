# to-api：API 批量测试工具

**声明**：本项目仅供学习交流，请勿用于轰炸机、DDOS 等非法用途。

## 一、功能概述
toApi 旨在实现 API 的批量测试，力求一切操作自动化。用户唯一需要做的是在 `config` 中配置要测试的接口的各项信息。

## 二、安装步骤
1. 克隆当前项目：
   ```bash
   npm install
   ```
2. 运行项目：
   ```bash
   npm run test
   ```
**注意**：如若报错，直接按照提示安装缺失的依赖即可。

## 三、未来展望
对于一些复杂的接口，可能需要进行特殊处理，例如 token 验证以及其他复杂的验证操作。未来，本项目将设计成插件形式，方便用户进行扩展。用户只需在插件内部进行处理即可。
