//npm init=>package.json生成
//获取uiq，通过包名获取
let uniq = require("uniq");
//将其他模块汇总到主模块
let module1 = require("./module1");
let module2 = require("./module2");
let module3 = require("./module3");
module1.foo();

module2();

module3.foo();

console.log(module3.msg);

let myarr = module3.arrays;

//引用类型，地址相同
console.log(myarr == module3.arrays);

uniq(myarr);

//修改了原数组
console.log(myarr);

console.log(module3.arrays);

//caught ReferenceError: require is not defined
// at app.js:3:12

//node认识CommonJS规范，但是浏览器不认识
//需要通过browserify将CommonJS规范转换为浏览器认识的规范
//browserify app.js -o bundle.js

//全局安装直接使用browserify命令
// npx browserify ./src/app.js -o ./dist/bundle.js
// 这样就可以使用局部安装的 browserify 包来打包您的 JavaScript 文件。
//在上面的命令中，./src/app.js 是您要打包的入口文件的路径，./dist/bundle.js 是打包后的文件的输出路径。

// 注意，使用 npx 命令会自动查找项目中安装的本地 node_modules 目录中的 browserify 命令，并执行相应的操作。

//--save-dev 会将 browserify 作为开发依赖添加到 package.json 文件中，这样其他开发者就可以通过 npm install 命令安装项目的所有依赖包了。
//--save指的是生产环境依赖，--save-dev指的是开发环境依赖
