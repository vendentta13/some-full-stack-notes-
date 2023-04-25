define(["b"], function (b) {
  let msg = "a.js";

  function showMsg() {
    console.log(msg, b.getMsg());
  }

  function getMsg() {
    return msg;
  }
  return { showMsg, getMsg };
});
