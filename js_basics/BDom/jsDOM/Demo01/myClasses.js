let myTime = {
  getTime() {
    //格式化日期 年月日
    var date = new Date();
    //获取 年月日
    var y = new String(date.getFullYear());
    var m = new String(date.getMonth() + 1);
    var d = new String(date.getDate());
    var arr = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    //一个星期中的哪一天
    var day = date.getDay();
    var which = new String(arr[day]);
    return y + "年" + m + "月" + d + "日" + which;
  },
};

let sibling_F = {
  getNextElementSibling(element) {
    let el = element;
    while ((el = el.nextSibling)) {
      if (el.nodeType == 1) {
        return el;
      }
    }
    return null;
  },

  getPreviousElementSibling(element) {
    let el = element;
    while ((el = el.previousSibling)) {
      if (el.nodeType == 1) {
        return el;
      }
    }
    return null;
  },
};
