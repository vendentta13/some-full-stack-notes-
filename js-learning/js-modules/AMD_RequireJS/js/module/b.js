define(["c"], function (c) {
  let msg = "b.js";
  function showMsg() {
    console.log(msg, c.getMsg());
  }

  function getMsg() {
    return " get " + msg;
  }

  return { getMsg, showMsg };
});
