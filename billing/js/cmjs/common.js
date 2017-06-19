//控制页面的响应式的文字
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
    //设计稿是720*1280的 所以本页面1rem=45px
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));
//设置cookies
function addCookie(sName,sValue,day) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+day);;
    //设置失效时间
    document.cookie = escape(sName) + '=' + escape(sValue) +';expires=' + expireDate.toGMTString();6 //escape()汉字转成unicode编码,toGMTString() 把日期对象转成字符串
}

// 获取wallet信息
$(function(){
    $.ajax({
        url:'http://192.168.2.168:8080/payment/wallet',
        type:'get',
        success:function(data){
            $("div.header span.userBalance i").html(data.accountId);
            $("div.header span.userId i").html(data.balance);
        },
        error:function(){
           
        }
    });
})
/*读取cookies 值*/
function getCookieValue(name){  /**获取cookie的值，根据cookie的键获取值**/
//用处理字符串的方式查找到key对应value
var name = escape(name);
    //读cookie属性，这将返回文档的所有cookie
    var allcookies = document.cookie;
    //查找名为name的cookie的开始位置
    name += "=";
    var pos = allcookies.indexOf(name);
    //如果找到了具有该名字的cookie，那么提取并使用它的值
    if (pos != -1){                                             //如果pos值为-1则说明搜索"version="失败
        var start = pos + name.length;                  //cookie值开始的位置
        var end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
        if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie
        var value = allcookies.substring(start,end); //提取cookie的值
        return (value);                           //对它解码
    }else{  //搜索失败，返回空字符串
        return "";
    }
}


/*网络故障弹窗公共部分*/
function internetProblem(){
    var  html = '<div class="ui-dialog networkErrorPop">'+
                    '<div class="ui-dialog-cnt">'+
                        '<header class="ui-dialog-hd ui-border-b">'+
                            '<h3>Warning</h3>'+
                        '</header>'+
                        '<div class="ui-dialog-bd">'+
                            '<div>A network error has occurred.</div>'+
                        '</div>'+
                        '<div class="ui-dialog-ft">'+
                            '<button type="button" data-role="button"  class="closeBtn">Close</button>'+
                        '</div>'+
                    '</div>'+       
                '</div>';
    $("body").append(html);
    $('.networkErrorPop').dialog('show');
    $('.networkErrorPop button.closeBtn').on('click',function(){
        $('.networkErrorPop').dialog('hide');
    });
}

