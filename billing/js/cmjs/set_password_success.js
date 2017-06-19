$(function(){
    //获取cookies
    var mmm=getCookieValue("newMooStoreAccount");
    $('.header span.userId').html(mmm);
});