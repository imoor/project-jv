$(function(){

    //获取cookies
    var mmm=getCookieValue("name");
    var setPwdFirstInput=getCookieValue("setPwdFirstInput");
    $('.header span.userId').html(mmm);
    console.log(setPwdFirstInput)
    /*确认按钮*/
    $('a.backToGameBtn').on('click',function(){
        var  reInputPws=$('#pwd-input').val();
        if(reInputPws===setPwdFirstInput){
            window.location.href='./set_password_success.html'
        }else{
            $(".ui-dialog").dialog("show");
        }
    });
    /*密码输入框*/
    var $input = $(".fake-box input");
    $("#pwd-input").on("input", function() {
        var pwd = $(this).val().trim();
        for (var i = 0, len = pwd.length; i < len; i++) {
            $input.eq("" + i + "").val(pwd[i]);
        }
        $input.each(function() {
            var index = $(this).index();
            if (index >= len) {
                $(this).val("");
            }
        });
        if (len == 6) {
            //执行其他操作
        }
    });
    /*弹窗事件*/
    $(".ui-dialog .ui-dialog-ft button").on('click',function(){
        $(".ui-dialog").dialog("hide");
    });
});