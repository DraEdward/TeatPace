
    var star=new Date();
    var count=0;
    window.setInterval(function (){
    count +=1;
}
    ,1000);
    function getOS() {//获取用户操作系统
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
    var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
    if (isWin7) return "Win7";
    var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
    if (isWin10) return "Win10";
}
    return "other";

}



    window.onload=function () {//进入页面
    var Title=document.title;
    var thisos;
    thisos=new XMLHttpRequest();
    thisos.open("GEt","opens.do?startime="+star+"&os="+getOS()+"&cip="+returnCitySN["cip"]+"&cname="+returnCitySN["cname"]+"&title="+Title,true);
    thisos.send();

    var x=document.getElementsByTagName("a");//遍历寻找到所有<a>标签的节点
    for(var i=0;i<x.length;i++){//循环绑定事件
    var a=x[i];
    a.onclick=(function (index) {
    return function (){

    var looktext=this.innerHTML;
    var xmlhttp;//建立AJAX

    //E7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","statistics.do?t="+looktext,true);
    xmlhttp.send();

};//输出a的标签
})(i);
}
}



    window.onunload=function () {//页面关闭时将浏览的时间传到服务器
    var left=new Date();
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","closeTab.do?lefttime="+left,true);
    xmlhttp.send();
}
