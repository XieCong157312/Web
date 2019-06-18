/**
 * 我的个人资料相关的js
 */
// JavaScript Document
// 定义一个变量作为当前修改常用联系人的id
var modifyId;
// 定义一个变量作为当前删除的常用联系人的id
var deleteId;

var pageParam = 'init';

$(document).ready(function() {

	$("#my_re_list_content").show();
	$("#usually_tourist_content").show();
	$("#password_detail_content").show();
	$("#personal_detail_content").show();
	$("#my_comment_content").show();

	$('#error_msg').fadeOut(5000);

	// 点击个人资料

	$("#per_de").css("background", "white");
	$("#per_de").css("color", "#000");
	$("#per_de").css("font-weight", "900");

	// 个人资料
	$("#per_de").click(function() {
		$(this).css("color", "#000");
		$("#per_de").css("background", "white");
		$("#per_de").css("color", "#000");
		$("#per_de").css("font-weight", "900");
		$("#my_head").css("color", "#fefefe");
		$("#per_de").addClass('content_right_li_bg_c');
		$("#my_head").removeClass('content_right_li_bg_c');
		$(".per_detail_content").show();
		$(".head_detail_content").hide();
	});

	// 我的头像
	$("#my_head").click(function() {
		$("#per_de").css("color", "#fefefe");
		$(this).css("color", "#000");
		$("#my_head").css("font-weight", "900");
		$("#per_de").css("background", "#d8619b");
		$("#per_de").css("color", "white");
		$("#per_de").removeClass('content_right_li_bg_c');
		$("#my_head").addClass('content_right_li_bg_c');
		$(".per_detail_content").hide();
		$(".head_detail_content").show();
	});

	/* 密码修改 开始 */

	$("#oldPassWord").focus(function() {
		if ($("#oldPassWord").val() == "") {
			$("#passWordMsg").css("display", "inline-block");
		}
	}).blur(function() {
		$("#passWordMsg").css("display", "none");
	});

	$("#newPassWord").focus(function() {
		if ($("#newPassWord").val() == "") {
			$("#newWordMsg").css("display", "inline-block");
		}
	}).blur(function() {
		$("#newWordMsg").css("display", "none");
	});

	$("#newPassWordt").focus(function() {
		if ($("#newPassWordt").val() == "") {
			$("#newWordMsgt").css("display", "inline-block");
		}
	}).blur(function() {
		$("#newWordMsgt").css("display", "none");
	});
	/* 密码修改 结束 */

	// 点击新增常用联系人
	$(".add_often_tourist").click(function() {
		$(".tourist").show();
		$(".save_button").attr("onclick","checkAddContact()");
	});

	// 点击新增常用联系人中的取消
	$(".del_btn_cancel").click(function() {
		$(".del_dialog").hide();
	});

	// 点击新增常用联系人中的删除
	$(".delete").click(function() {
		$(".del_dialog").show();
	});

	// 点击新增常用联系人中的确认删除
	$(".del_btn_ok").click(function(e) {
		confirmDelete();
		// 设置删除的ajax请求
	});

	// 设置我的点评初始样式
	$("#to_comment").css("background-color", "white");
	$("#to_comment").css("color", "#000");
	$("#to_comment").css("font-weight", "900");

	$("#to_comment").click(function() {
		$(".to_comment_detail").show();
		$(".comments_detail").hide();

		$("#to_comment").css("background-color", "white");
		$("#to_comment").css("color", "#000");
		$("#to_comment").css("font-weight", "900");
		$("#comments").css("background-color", "#d8619b");
		$("#comments").css("color", "white");
		getWaitCommentOrders();
	});

	$("#comments").click(function() {
		$(".comments_detail").show();
		$(".to_comment_detail").hide();

		$("#comments").css("background-color", "white");
		$("#comments").css("color", "#000");
		$("#comments").css("font-weight", "900");
		$("#to_comment").css("background-color", "#d8619b");
		$("#to_comment").css("color", "white");
		getFinishCommentOrders();
	});
	$(".icon_writeBtn").click(function() {
		$('.comappend').animate({
			height : 'toggle'
		});
	});

	$(".iconcom-close").click(function() {
		$('.comappend').fadeOut(600);

	});
	  //关闭图片上传下拉框
    $(document).on("click",".iconcom-close",function(){
        $(".comappend").remove();
        $('.comappend').animate({height:'hide'});
    });
    
	// 显示上传图片 开始
	$(".stop").click(function() {
		$(".DB_imgSet").fadeOut(1000);
		$(".stop").fadeOut();
	});

	$(".DB_thumMove").click(function() {
		$(this).parent().parent().next().fadeIn();
	});


	// 显示上传图片 结束
});

// 验证手机号码
function checkMobile() {

	if ($("#mobile").val() == "") {
		$("#mobile_tip").html("手机号码不能为空！");
		$("#mobile_tip").css('color', 'red');
		return false;
	}

	if (!$("#mobile").val().match(/^(\d{11})$/)) {
		$("#mobile_tip").html("手机号码格式不正确！");
		$("#mobile_tip").css('color', 'red');
		return false;
	}
	$("#mobile_tip").css('color', '#34c518');
	$("#mobile_tip").html("手机号码输入正确！");
	return true;
}

// 验证邮箱
function checkEmail() {
	if ($("#email").val() == "") {
		$("#email_msg").html("邮箱地址不能为空！");
		$("#email_msg").css('color', 'red');
		return false;
	}
	if (!$("#email")
			.val()
			.match(
					/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		$("#email_msg").html("邮箱格式不正确！");
		$("#email_msg").css('color', 'red');
		return false;
	}
	$("#email_msg").html("邮箱输入正确！");
	$("#email_msg").css('color', '#34c518');
	return true;
}

// 验证真实姓名
function checkRealName() {
	/*if ($("#realname").val() == "" || $.trim($("#realname").val()).length <= 0) {
		$("#realname_msg").html("真实姓名不能为空！");
		$("#realname_msg").css('color', 'red');
		return false;
	}*/

	// 姓名必须是两位到二十位以内的中主或两位到二十位的英文
	if (!$("#realname").val().match(/^[\u4e00-\u9fa5 ]{2,20}$/)) {
		if (!$("#realname").val().match(/^([A-Za-z]+\s?)*[A-Za-z]{2,20}$/)) {
			$("#realname_msg").html("真实姓名格式不正确！");
			$("#realname_msg").css('color', 'red');
			return false;
		}
	}

	$("#realname_msg").html("真实姓名输入正确！");
	$("#realname_msg").css('color', '#34c518');
	return true;
}

// 验证姓名
function checkName() {
	if ($("#name").val() == "" || $.trim($("#name").val()).length <= 0) {
		$("#name_msg").html("用户名不能为空！");
		$("#name_msg").css('color', 'red');
		return false;
	}

	// 姓名必须是两位到二十位以内的中主或两位到二十位的英文
	if (!$("#name").val().match(/^[\u4e00-\u9fa5 ]{2,20}$/)) {
		if (!$("#name").val().match(/^([A-Za-z]+\s?)*[A-Za-z]{2,20}$/)) {
			$("#name_msg").html("用户名格式不正确！");
			$("#name_msg").css('color', 'red');
			return false;
		}
	}

	$("#name_msg").html("用户名输入正确！");
	$("#name_msg").css('color', '#34c518');
	return true;
}
//验证昵称
function checkNames() {
    if ($("#myname").val() == "" || $.trim($("#myname").val()).length <= 0) {
        $("#myname_msg").html("昵称不能为空！");
        $("#myname_msg").css('color','red');
        return false;
    }

    $("#myname_msg").html("昵称输入正确！");
    $("#myname_msg").css('color','#34c518');
    return true;
}

// 验证身份证号
function checkCardId() {
	if ($("#cardId").val() == "") {
		$("#cardIdMsg").html("身份证号不能为空！");
		$("#cardIdMsg").css('color', 'red');
		return false;
	}

	// 身份证必须是十五位或18位或17位加一个字母
	if (!$("#cardId").val().match(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/)) {
		$("#cardIdMsg").html("身份证号格式不正确！");
		$("#cardIdMsg").css('color', 'red');
		return false;
	}

	$("#cardIdMsg").html("身份证号输入正确！");
	$("#cardIdMsg").css('color', '#34c518');
	return true;
}

// 对省份选择进行验证
function checkSelect() {

	if ($("#province").val() == "") {
		$("#city_msg").html("请选择省份");
		$("#city_msg").css('color', 'red');
		return false;
	}

	if ($("#select_city").val() == "") {
		$("#city_msg").html("请先选择省份");
		$("#city_msg").css('color', 'red');
	}

	$("#city_msg").html("省份选择成功");
	$("#city_msg").css('color', '#34c518');
	return true;
}
// Ajax获取城市下拉列表
function checkCity() {
	$.ajax({
		type : "GET",
		async : true,
		url : "personalinfo.jhtml",
		data : {
			province : $("#province").val(),
			type : 'getCity'
		},
		dataType : "json",
		success : function(data) {
			$('#select_city').empty(); // 清空resText里面的所有内容
			var html = '';
			$.each(data, function(index, item) {
				html += '<option value=' + item['id'] + '>' + item['name']
						+ '</option>';
			});
			$('#select_city').append(html);
		}
	});
}
// 对城市选择进行验证
function checkSelectCity() {
	if ($("#province").val() == "") {
		$("#city_msg").html("请先选择省份");
		$("#city_msg").css('color', 'red');
		return false;
	}
	$("#city_msg").html("城市选择成功");
	return true;
}

function checkPassWord() {
	if ($("#oldPassWord").val() == "") {
		$("#passWordMsg").css("display", "inline-block");
		$("#passWordMsg").html("请输入旧密码");
		return false;
	}
	if ($("#newPassWord").val() == "") {
		$("#newWordMsg").css("display", "inline-block");
		$("#newWordMsg").html("请输入新密码");
		return false;
	}
	if ($("#newPassWordt").val() == "") {
		$("#newWordMsgt").css("display", "inline-block");
		$("#newWordMsgt").html("请再次输入新密码");
		return false;
	}
	if (($("#newPassWord").val() != "" && $("#newPassWordt").val() == "")
			|| ($("#newPassWord").val() == "" && $("#newPassWordt").val() != "")
			|| ($("#newPassWord").val() == " " && $("#newPassWordt").val() == " ")) {
		$("#newWordMsg").css("display", "inline-block");
		$("#newWordMsg").html("请输入新密码");
		return false;
	}

	if ($("#newPassWord").val() != $("#newPassWordt").val()) {
		$("#newWordMsg").css("display", "inline-block");
		$("#newWordMsg").html("两次新密码不同，请重新输入");
		return false;
	}

	$("#newWordMsg").css("display", "inline-block");
	$("#newWordMsg").html("两次新密码相同，输入正确");
	return true;
}

// 常用联系信息验证中文名
function checkCNName() {
	if ($("#cnName").val() == "" || $.trim($("#cnName").val()).length <= 0) {
		$("#cnNameMsg").html("姓名不能为空！");
		$("#cnNameMsg").css('color', 'red');
		return false;
	}

	// 姓名必须是两位到二十位以内的中主或两位到二十位的英文
	if (!$("#cnName").val().match(/^[\u4e00-\u9fa5 ]{2,20}$/)) {
		$("#cnNameMsg").html("姓名格式不正确！");
		$("#cnNameMsg").css('color', 'red');
		return false;
	}

	$("#cnNameMsg").html("姓名输入成功！");
	$("#cnNameMsg").css('color', '#34c518');
	return true;
}

// 常用联系信息验证手机号
function checkTel() {

	if ($("#phone").val() == "") {
		$("#phoneMsg").html("手机号码不能为空！");
		$("#phoneMsg").css('color', 'red');
		return false;
	}

	if (!$("#phone").val().match(/^(\d{11})$/)) {
		$("#phoneMsg").html("手机号码格式不正确！");
		$("#phoneMsg").css('color', 'red');
		return false;
	}

	$("#phoneMsg").css('color', '#34c518');
	$("#phoneMsg").html("手机号码输入正确！");
	return true;

}

// 常用联系信息中验证邮箱
function checkEmails() {
	if ($("#emails").val() == "") {
		$("#emailsMsg").html("邮箱地址不能为空！");
		$("#emailsMsg").css('color', 'red');
		return false;
	}
	if (!$("#emails")
			.val()
			.match(
					/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		$("#emailsMsg").html("邮箱格式不正确！");
		$("#emailsMsg").css('color', 'red');
		return false;
	}
	$("#emailsMsg").html("邮箱输入正确！");
	$("#emailsMsg").css('color', '#34c518');
	return true;
}

function checkUsuallyT() {
	if (!(checkCNName()&&checkTel()&&checkCardId())) {
		return false;
	}
	
	$(".tourist").hide();
	return true;

}

function checksubmit() {
	var ret = true;
	//ret = checkSelectCity();
	ret = checkPassWord();
	ret = checkMobile();
	//ret = checkRealName();
	ret = checkEmail();
	//ret = checkNames();
	return ret;

}

function dataSubmit() {
	if (checksubmit()) {
		document.personForm.submit();
	}
}

// 设置图片上传校验
function checkImage() {
	if ($("#imgOne").val() == "") {
		alert("请先选择上传照片");
	} else {
		document.forms["headForm"].submit();
	}
}

// 关闭弹出层函数（通用JS）
function close() {
	alert("aaaa");
	$("#del_dialog").hide();
	return true;
}
// 设置常用联系人删除弹窗
function deleterow(e) {
	deleteId = $(e).parent().parent().attr('id');
	$(".del_dialog").show();
}
function confirmDelete() {
	$(".del_dialog").hide();
	if (deleteContact() == true) {
		$("#" + deleteId).fadeOut(1000);
	}
}
function modifyrow(e) {
	$(".tourist").show();
	// 修改联系人信息的表单回显
	var fatherid = $(e).parent().parent().attr('id');
	var changeName = $('#' + fatherid).children('td').eq(0).text();
	var changePhone = $('#' + fatherid).children('td').eq(1).text();
	var changeCardNo = $('#' + fatherid).children('td').eq(3).text();
	var changeEmail = $('#' + fatherid).children('td').eq(4).text();
	var changeSex = $('#' + fatherid).children('td').eq(5).text();
	var changeBirth = $('#' + fatherid).children('td').eq(6).text();

	$('input[name="c_name"]').val(changeName);
	$('input[name="c_mobile"]').val(changePhone);
	$('input[name="c_email"]').val(changeEmail);
	$('input[name="c_cardno"]').val(changeCardNo);

	if ("男" == changeSex) {
		$('select[name="c_sex"]')[0].selectedIndex = 0;
	} else if ("女" == changeSex) {
		$('select[name="c_sex"]')[0].selectedIndex = 1;
	}
	// 对出生日期进行处理
	var time = changeBirth.replace(/-/g, "/");
	time = new Date(time);
	year = time.getFullYear();
	month = time.getMonth() + 1;
	date = time.getDate();
	
	$("#sel_year").attr("rel",year);
	$("#sel_month").attr("rel",month);
	$("#sel_day").attr("rel",date);
	$.ms_DatePicker();
	
	$('select[name="c_sel_year"]').find("option[value=" + year + "]").attr(
			"selected", true);
	$('select[name="c_sel_month"]').find("option[value=" + month + "]").attr(
			"selected", true);
	$('select[name="c_sel_day"]').find("option[value=" + date + "]").attr(
			"selected", true);

	modifyId = $(e).parent().parent().attr('id');
	$("#save_tourist").attr('onclick', 'checkUpdateContact()');
}
