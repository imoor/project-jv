$(function(){

    //获取cookies
    var mmm=getCookieValue("name");
    $('.header span.userId').html(mmm);
    /*点击confirm按钮*/
    $('a.backToGameBtn').on('click',function(){
        var  firstInputPws=$('.pwd-input').val();
        addCookie('setPwdFirstInput',firstInputPws,1);
        window.location.href='./reInput_CMstore_payPassword_fromPayment.html';
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
});