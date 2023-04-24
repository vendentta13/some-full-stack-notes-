module.exports = function foo() {
  console.log("module2");
};

//暴露的是一个函数
//下面再写就会被覆盖
// module.exports = {
