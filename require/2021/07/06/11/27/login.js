document.querySelector("#display").innerHTML = "<div style=text-align:center><span style=font-size:2em;color:red>Login - Air Uniform Account</span><br>Username<input type=text id=username placeholder=Username maxlength=24><br>Password<input type=password id=password placeholder=Password maxlength=16><br><input type=button value=Login onclick=javascript:user_login();><br><a href=register>Click me to register.</a></div>";
Bmob.initialize("88ae889891d99fe7", "000427");
function user_login(){

};













function setcookie(name,value,time)
{
var exp = new Date();
exp.setTime(exp.getTime() + time);
document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
function getcookie(name) {
var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
if (arr = document.cookie.match(reg))
{
return unescape(arr[2]);
}
else
{
return null;
}
}
function delcookie(name,time) {
var exp = new Date();
exp.setTime(exp.getTime() - time);
var cval = getcookie(name);
if (cval != null)
document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}
