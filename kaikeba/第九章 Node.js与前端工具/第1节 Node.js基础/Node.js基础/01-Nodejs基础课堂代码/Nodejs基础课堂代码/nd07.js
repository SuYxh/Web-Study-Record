//URL模块实例
/*
//使用传统的 API 解析 URL 字符串：
const url = require("url");
const urlinfo = "http://www.abcd.com:8080/admin/users/list.html?query=string&id=200#hash";

const myURL = url.parse(urlinfo);

console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.search);
*/

//使用 WHATWG 的 API 解析 URL 字符串：
const urlinfo = "http://www.abcd.com:8080/admin/users/list.html?query=string&id=200#hash";

const myURL = new URL(urlinfo);

console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.search);

console.log(myURL.searchParams.get("query"));
console.log(myURL.searchParams.get("id"));

/*
协议：http
域名：www.abcd.com
端口：8080
路径：/admin/users/
文件名：list.html
参数：query=string&id=200
*/