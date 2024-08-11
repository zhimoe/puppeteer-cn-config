# puppeteer_cn_config

### 注意事项
1. puppeteer 新版的配置推荐是自己的配置文件，不建议使用.npmrc 环境变量。配置方式参考：https://pptr.dev/guides/configuration/
   
2. npm mirror 的二进制文件下载地址、web url 地址、npm 包配置地址是不一样的。
   - https://registry.npmmirror.com/binary.html 是二进制镜像文件的 WEB URL 用于浏览器查看文件的，这个地址配置无法下载二进制文件。
   - https://npmmirror.com/mirrors/chrome-for-testing 是二进制下载地址，例如下来 puppeteer 包的 chrome-for-testing 依赖，sass 包的 node-sass 的依赖。
   - npm config set registry https://registry.npmmirror.com 是淘宝的 npm 包地址。
  
3. 默认 puppeteer 下载 chrome 文件在 ~/.cache/puppeteer 中，这对于 CD 构建镜像非常不友好，可以通过`cacheDirectory: join(__dirname, '.cache', 'puppeteer'),`修改到当前目录。