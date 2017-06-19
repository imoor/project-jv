/*
* @Author: Administrator
* @Date:   2017-01-05 11:45:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-11 10:21:47
*/

'use strict';
$(function(){
	var mmm=getCookieValue("name");
	console.log(mmm)
	$('.bind_Moo_store_successTit i.accountId').html(mmm);
	$('.header span.userId').html(mmm);
});