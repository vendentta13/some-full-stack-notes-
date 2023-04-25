define(["a"], function (a) {
  let msg = "b.js";
  function showMsg() {
    console.log(msg, a.getMsg());
  }

  function getMsg() {
    return " get " + msg;
  }

  return { getMsg, showMsg };
});
