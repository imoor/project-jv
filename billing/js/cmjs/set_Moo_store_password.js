$(function(){
    //获取cookies
    var cur_userName=getCookieValue("newMooStoreAccount");
    var cur_token=getCookieValue("newMooStoretoken");
    $('#newMooStoreAccount').html(cur_userName);

    /*点击确认按钮*/
    $("a.confirmBtn").on('click',function(){
    	var  pwd_1=$("input.inputPassWord_1").val();
    	var  pwd_2=$("input.inputPassWord_2").val();
    	if(!pwd_1 && !pwd_2){
    		$('.passwordCheck').find('div.content').html('Can not be none !!!');
    		$('.passwordCheck').dialog('show')
    	}else if(pwd_1!=pwd_2){
    		$('.passwordWrong').dialog('show')
    	}else{
            var cur_data={
                    "accessToken":cur_token,
                    "name": cur_userName,
                    "password":pwd_1
                };
            /**/
    		$.ajax({
    			url:'http://192.168.2.168:8080/payment/account',
    			type:'post',
    			data:cur_data,
    			success:function(data){
    				window.location.href='./set_password_success.html'
    			},
                error:function(data){
                    internetProblem();
                }
    		})
    	}
    });
    $('.ui-dialog').find('button').on('click',function(){
    	$('.ui-dialog').dialog('hide');
    });
});