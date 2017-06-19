/*
* @Author: Administrator
* @Date:   2017-01-05 11:22:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-11 21:35:22
*/

'use strict';
$(function(){
	/*重置表单 reset按钮*/
	$("a.resetBtn").click(function(){
		$('form input').val('');
	});
    /*弹窗提示
	打开弹窗	$(".ui-dialog").dialog("show");
	关闭弹窗    $(".ui-dialog").dialog("hide")
    */
 	/*$(".ui-dialog").dialog("show");*/
 	$(".confirmBtn").on('click',function(){
 		//获取绑定信息
 		var userName=$('.bind_Moo_store_form input.textCardNum').val();
 		var userPws=$('.bind_Moo_store_form input.CardPaw').val();
 		if(!userName){
 			$('.ui-dialog').find('div.content').html('MOO Store account can not be none!!!');
 			$('.ui-dialog').dialog('show');
 		}else if(!userPws){
 			$('.ui-dialog').find('div.content').html('Password can not be none!!!');
 			$('.ui-dialog').dialog('show');
 		}else{
 			$.ajax({
 			url:'http://192.168.2.168:8080/payment/player/account',
 			type:'POST',
 			dataType:'JSON',
 			data:{
 				"mobile":userName,
 				"passWord":userPws
 			},
 			success:function(data){	
 					//绑定成功 挑战到成功页面
					addCookie('userName',userName,1)
					window.location.href='./bind_CMAccount_success.html'
 				
 			},
 			error:function(data){
 				if(data.code==2002){
 					//账号密码不匹配 打开提示弹窗
 					$('.ui-dialog').find('div.content').html('Account name or password does not match. Please try again.');
 					$(".ui-dialog").dialog("show");
 				}else if(data.code==2001){//账号不存在
 					$('.ui-dialog').find('div.content').html('User does not exist ');
 					$(".ui-dialog").dialog("show");
 				}else{
 					internetProblem();
 				}
 			}
 		})
 		}
 	});
});