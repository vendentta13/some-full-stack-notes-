(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        function unique_pred(list, compare) {
          var ptr = 1,
            len = list.length,
            a = list[0],
            b = list[0];
          for (var i = 1; i < len; ++i) {
            b = a;
            a = list[i];
            if (compare(a, b)) {
              if (i === ptr) {
                ptr++;
                continue;
              }
              list[ptr++] = a;
            }
          }
          list.length = ptr;
          return list;
        }

        function unique_eq(list) {
          var ptr = 1,
            len = list.length,
            a = list[0],
            b = list[0];
          for (var i = 1; i < len; ++i, b = a) {
            b = a;
            a = list[i];
            if (a !== b) {
              if (i === ptr) {
                ptr++;
                continue;
              }
              list[ptr++] = a;
            }
          }
          list.length = ptr;
          return list;
        }

        function unique(list, compare, sorted) {
          if (list.length === 0) {
            return list;
          }
          if (compare) {
            if (!sorted) {
              list.sort(compare);
            }
            return unique_pred(list, compare);
          }
          if (!sorted) {
            list.sort();
          }
          return unique_eq(list);
        }

        module.exports = unique;
      },
      {},
    ],
    2: [
      function (require, module, exports) {
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

        //认识CommonJS规范，但是浏览器不认识
        //需要通过browserify将CommonJS规范转换为浏览器认识的规范
        //browserify app.js -o bundle.js

        // npx browserify ./src/app.js -o ./dist/bundle.js
        // 这样就可以使用局部安装的 browserify 包来打包您的 JavaScript 文件。
        //在上面的命令中，./src/app.js 是您要打包的入口文件的路径，./dist/bundle.js 是打包后的文件的输出路径。

        // 注意，使用 npx 命令会自动查找项目中安装的本地 node_modules 目录中的 browserify 命令，并执行相应的操作。

        //--save-dev 会将 browserify 作为开发依赖添加到 package.json 文件中，这样其他开发者就可以通过 npm install 命令安装项目的所有依赖包了。
        //--save指的是生产环境依赖，--save-dev指的是开发环境依赖
      },
      { "./module1": 3, "./module2": 4, "./module3": 5, uniq: 1 },
    ],
    3: [
      function (require, module, exports) {
        module.exports = {
          msg: "module1",
          foo() {
            console.log(this.msg);
          },
        };
        //暴露的是一个对象，对象中包含了msg和foo两个属性
      },
      {},
    ],
    4: [
      function (require, module, exports) {
        module.exports = function foo() {
          console.log("module2");
        };

        //暴露的是一个函数
        //下面再写就会被覆盖
        // module.exports = {
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        exports.foo = function () {
          console.log("module3");
        };

        exports.msg = "module3";

        //暴露的是一个数组
        exports.arrays = [1, 2, 3, 6, 5, 5, 1, 1, 2];
      },
      {},
    ],
  },
  {},
  [2]
);
