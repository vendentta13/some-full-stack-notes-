import { foo, arr } from "./m1";
import { fun, fun2 } from "./m2";
import m3 from "./m3";
foo();
console.log(arr);
fun();
fun2();
console.log(m3.data_);
//使用分别暴露或者统一暴露，要使用解构赋值的方式接收
