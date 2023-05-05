module.exports = {
  msg: "module1",
  foo() {
    console.log(this.msg);
  },
};
//暴露的是一个对象，对象中包含了msg和foo两个属性
