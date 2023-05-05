//npm init=>package.json生成
//获取uiq，通过包名获取
let uniq = require("uniq");
//将其他模块汇总到主模块
let module1 = require("./modules/module1");
let module2 = require("./modules/module2");
let module3 = require("./modules/module3");
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
