# fed-e-task-02-02
模块化开发与规范化标准> Part2模块二作业

一、简答题
1、Webpack 的构建流程主要有哪些环境？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
 答：哪些环境： yarn webpack --mode none           (最原始环境的打包环境/模式)
               yarn webpack --mode development    (开发环境/模式)
               yarn webpack --mode production     (生产环境/模式)
     打包过程： 
              1、 安装webpack
                依次执行如下命令：
                1.npm install -g webpack; //全局安装webpack
                2.npm install webpack --save-dev; //安装关联到项目目录
                3.npm install webpack-cli -g; //此工具用于在命令行中运行 webpack
                4.npm install webpack webpack-cli --save-dev;

              2、 下载模块加载器（loader）
                安装项目需要用到的所有loaders，例如css-loader、style-loader、babel-loader等。
                5.npm install xxx-loader --save-dev;
            
              3、打包两种方式
                3.1 手动配置webpack.config.js
                    1.在build_test下创建文件webpack.config.js:
                    2.devServer 构建本地服务器：让你的浏览器监听你的代码的修改，并自动刷新显示修改后的结果，它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖。
                    3.在终端输入命令，打包并开启本地服务器
                     webpack-dev-server --port 3000 //此处指定了端口号，也可不写默认8080
                    4.终端结果输出编译成功，此时可见public文件夹下自动生成了打包输出文件builder.js. 访问localhost:3000，可访问public/index.html内容。

                3.2 终端命令打包
                    npx webpack src/index.js -o public/builder.js --mode development;
                    此处打包后在public目录下生成打包输出文件builder.js，因未配置本地服务器，需在其他html文件引入builder.js静态访问此html文件以查看页面效果。


2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
答：loader
    其中使用loader可以处理一些非js文件，将js中引入的图片、样式文件等文件以正确的方式插入到html或样式文件中。
    使用babel-loader可以将es5以上的语法打包后转为es5语法。但es5以上的api(promise、async)需要通过babel-polyfill进行处理。

    plugin
    plugin可以对代码进行优化、传输文件、清除文件等。
    tree-shaking用到的是uglifyjs-plugin、purify-css对代码进行压缩，对无用的代码进行清除。但在webpack4中，production模式自带此功能。



二、编程题 --- 代码下载链接为空，打不开！
1、使用 Webpack 实现 Vue 项目打包任务
具体任务及说明：

先下载任务的基础代码：https://github.com/lagoufed/fed-e-001/raw/master/tasks/02-02-base-code.zip

这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构

有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）

这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务

尽可能的使用上所有你了解到的功能和特性