# cucrsp-app
### 小程序项目

> 项目结构介绍

components 放置项目公用组件目录 在app.json中的usingComponents引入
           建议某一个页面的私有组件写在该目录下，如 仅index页面用的组件 则在index目录下建立子组                   件目录childComponents, 在index.json中的 usingComponents引入

pages     项目中的页面文件

servies   项目中的api文件，建议每个页面的api写在一个文件里
          如index页面对应index.js

utils         项目工具文件
    filter    项目过滤器文件 如时间过滤器

assets        放置项目中静态文件
    images    项目中的图片
    style     定制主题色


### 项目引入第三方组件库

    微信开发者工具，点击 详情-->本地设置--> 使用npm模块

    npm i vant-weapp -S --production 

    微信开发者工具，点击 工具-->构建npm

    在app.json中的usingComponents引入需要的组件
    
    


