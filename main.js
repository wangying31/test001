require("./font.less");
require("./abc.css");

var math_ = require("./math_.js");//加载模块
document.querySelector("div").innerHTML += math_.plus(12,56) + " " +math_.random();
