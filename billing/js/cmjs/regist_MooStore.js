$(function(){
    var countdown=10;
    //获取手机验证码
    $('div.registMooStore_form div.inputcode a.sendPhoneBtn').on('click',function(){
        var phoneNum=$('input.phoneNumber').val();
        if(phoneNum){
            if(countdown==10){
                settime($(this));
                $.ajax({
                    url:'http://192.168.2.168:8080/checkCode',
                    data:{"mobile":phoneNum},
                    type:'GET',
                    dataType:'JSON',
                    success:function(data){
                        console.log("success")
                    }
                })
            }
        }else{
            $('.accountExist').find('div.contentText').html('Phone Number can not be none');
                    $('.accountExist').dialog('show')
        }
    });
    //提交手机号和手机验证码进行注册验证
    $('div.registMooStore_form a.confirmBtn').on('click',function(){
        var phoneNum=$('input.phoneNumber').val();
        var phoneCode=$('input.Codenumber').val();
        $.ajax({
            url:'http://192.168.2.168:8080/payment/access/token',
            type:'get',
            dataType:'JSON',
            data:{
                mobile:phoneNum,
                checkCode:phoneCode
            },
            success:function(data){
                    addCookie('newMooStoreAccount',phoneNum,1);
                    addCookie('newMooStoretoken',data.token,1);
                    window.location.href='./set_Moo_store_password.html';
            },
            error:function(){
                if(data.code==2000){ //账号已存在
                    $('.accountExist').find('div.contentText').html('Account name already exists.');
                    $('.accountExist').dialog('show')
                }else if(data.code==9100){//账号与验证码不匹配
                    $('.codeWrong').dialog('show')
                }else{
                    internetProblem();
                }  
            }
        });
        
    });
    $(".ui-dialog").find('button.closeBtn').on('click',function(){
        $(".ui-dialog").dialog("hide");
    });
    /*弹窗事件*/
    $(".accountExist .ui-dialog-ft button.closeBtn").on('click',function(){
        $(".accountExist").dialog("hide");
    });
    $(".accountExist .ui-dialog-ft button.changeMobel").on('click',function(){
        $(".accountExist").dialog("hide");
    });
    function settime(val) {
        if (countdown == 0) {
            val.text("send");
            val.css("color","#29c1ec");
            countdown = 60;
        } else {
            val.text("resend(" + countdown + ")");
            val.css("color","#dddddd");
            countdown--;
            setTimeout(function() {
                settime(val)
            },1000)
        }
    }
});