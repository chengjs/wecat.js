###  wecat.js
个人开发的一个js框架，欢迎提各种类型的issue，看到第一时间会回复   ：）  

---
#### 概述

目前正在开发打磨过程中，可能不会很及时的更新 ---> 3月底将基本展示出来

包含内容：
- 模板引擎
- 路由和路由对应的钩子函数,懒加载js等
- 数据和模板渲染（正在开发virtual-dom）
- 通信组件（支持父子通信、兄弟通信、广播消息、选择性的范围广播）
- http请求组件 （核心为xhr、fetch）
- 各个部分以插件形式载入项目 

#### 1 脚手架揭秘和实现
我们平时经常会使用vue、angular、react等的脚手架，都可以达到如下效果：
1. 全局安装对应的脚手架  xxx-cli  （不全局安装的话，只能在当前安装包下使用）
2. 接下来直接就如"vue init"就可以直接拉取一个模板项目到我们的当前文件夹

这个效果挺好用的，假如我积累了一套框架，我不可能每次都拷贝到其他文件夹，或者当别人需要的时候，我拷贝给别人一份
我希望我有一套自己的脚手架，能像这些成熟的框架的脚手架一样直接把我想要的模板项目用最简短而有效的命令拉取到任何想要获取的电脑的文件夹中

本地效果演示：
![](http://7xl4c6.com1.z0.glb.clouddn.com/FjpPFQiEG8LPV5H84LvPmX1YQ4uW)

他人机器上演示：
![](http://7xl4c6.com1.z0.glb.clouddn.com/FuN7_ko3l211kWoorHjVYR_z0pQe)
![](http://7xl4c6.com1.z0.glb.clouddn.com/FnfbDsCKUt8RfvNG3lQKh6d8uRzw)

##### 1.1 脚手架具体实现代码

















