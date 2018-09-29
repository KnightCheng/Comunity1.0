# 项目架构解析
## 项目简介
  项目用vue-cli3.0脚手架工具搭建。
## 文件 
1.pacakge.json
```
  包含项目的版本、名称、运行脚本、及项目相关依赖；
```
2.babel.config.js  
```
  babel配置文件，用于对项目ES6等高级语法项目普通或低版本进行转换编译；
```
3.postcss.config.js
```
  css自动补充兼容性代码配置
```
4.gitgnore
```
  git提交忽略文件
```
5.eslintrc.js
```
  配置eslint语法规则的文件
```
6.vue.config.js
```
  vue配置文件
```
## 文件夹
1.public文件夹
```
  存放公共文件，index.html会做为项目打包的模板文件
``` 
2.src文件夹
```
  项目的主文件
  1.assets：存放项目的静态资源文件（图标/图片等）；
  2.commpoents 存放复用组件
  3.views 存放页面视图文件
  4.App.vue 项目基础组件
  5.main.js 项目入口文件，开发运行编译都作为起始点
  6.router.js 路由文件
  7.store.js vuex状态管理文件
  8.editconfig vs编辑器配置文件
```
3.api文件夹
```
  项目的接口文件，所有ajax请求都存放在api文件夹中
```
4.config文件夹
```
  项目的配置文件
```
5.directive文件夹
```
  用来存放vue的自定义指令
```
6.lib文件夹
```
  utils.js: 存放与业务有关的工具方法
  tools.js: 存放与业务无关的工具方法
```
7.store文件夹
```
  vuex的状态管理文件
```
8.mock文件夹
```
  使用mockjs做一些模拟数据
```