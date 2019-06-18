// JavaScript Document

//设置背景自适应浏览器宽度
window.onload = function() {

	var winHeight = document.documentElement.clientHeight;
	var winWidth = window.screen.width;
	document.getElementById("backgrounds").style.height = winHeight + "px";
	document.getElementById("backgrounds").style.width = winWidth + "px";

	// 设置登录框垂直居中
	document.getElementById("div_position").style.marginTop = winHeight / 2
			- 170 + "px";
}
$(document).ready(
		function() {

			/* 刷新时随机更换页面背景图片 开始  */
			// 图片数组
			var imgArr = [ "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg",
					"img/5.jpg", "img/6.jpg" ];
			var index = parseInt(Math.random() * (imgArr.length));
			// 定时更换背景
			$(".backgrounds").css("backgroundImage",
					"url(" + imgArr[index] + ")");
			/* 刷新时随机更换页面背景图片 结束  */

			/*  账号、密码、验证码初始状态 开始  */
			$("#tid").focus(function() {
				if ($(this).val() == '您的邮箱账号/手机号')
					$(this).val("");
				$(this).css("color", "#333333");
			}).blur(function() {
				if ($(this).val() == '') {
					$(this).val("您的邮箱账号/手机号");
					$(this).attr("style", "");
				}
			});
			$("#pwd").focus(function() {
				if ($(this).val() == '您的密码') {
					$(this).val("");
					$(this).attr("type", "password");
				}
				$(this).css("color", "#333333");
			}).blur(function() {
				if ($(this).val() == '') {
					$(this).val("您的密码");
					$(this).attr("style", "");
					$(this).attr("type", "text");
				}
			});

			$("#ident").focus(function() {
				if ($(this).val() == '验证码') {
					$(this).val("");
					$(this).attr("type", "text");
				}
				$(this).css("color", "#333333");
			}).blur(function() {
				if ($(this).val() == '') {
					$(this).val("验证码");
					$(this).attr("style", "");
					$(this).attr("type", "text");
				}
			});
			/* 账号、密码、验证码初始状态 结束 */

			/* 点击马上注册，页面处理 开始  */
			$("#regesits").click(function() {
				$("#third_part").show();
				$("#logins").show();
				$("#pwd_p").hide();
				$("#regesits").hide();
				$("#identfy_all").hide();
				$(":button").val("注 册");
				$("#logo_img").css("display", "block");
				$("#contents").html(" ");
			});
			/* 点击马上注册，页面处理 结束 */

			/* 点击登录，页面处理 开始 */
			$("#logins").click(function() {
				$("#third_part").hide();
				$("#logins").hide();
				$("#pwd_p").show();
				$("#regesits").show();
				$("#identfy_all").show();
				$(":button").val("登 录");
				$("#logo_img").css("display", "none");
				$("#contents").html(" ");
			});
			/* 点击登录，页面处理 结束  */

			$("#button").click(function() {
				if($("#regesits").is(":visible")){
					login('loginForm');
				}
				else{
					register('loginForm');
				}
					
			});
		})
		
/**
 * 此处是登录页面修改点击登录的表单action值
 * 切换到登录模式
 * @param formName 表单名称
 */
function login(formName) {
	if (check()) {
		var url = $("#log_reg_form").attr("action");
		var start = url.lastIndexOf("/");
		var end = url.indexOf(";");
		if(end == -1)
			var newurl = url.replace(url.substring(start),"/login.jhtml");
		else
			var newurl = url.replace(url.substring(start,end),"/login.jhtml");
		$("#log_reg_form").attr("action", newurl);
		window.document.forms[formName].submit();
	}
}
/**
 * 此处是点击注册进入注册页面后修改表单提交的action
 * 切换到注册模式
 * @param formName 表单名称
 */
function register(formName) {
	if (check()) {
		var url = $("#log_reg_form").attr("action");
		var start = url.lastIndexOf("/");
		var end = url.indexOf(";");
		if(end == -1)
			var newurl = url.replace(url.substring(start),"/register.jhtml");
		else
			var newurl = url.replace(url.substring(start,end),"/register.jhtml");
		$("#log_reg_form").attr("action", newurl);
		window.document.forms[formName].submit();
	}
}

/**
 * 对用户名、密码、验证码进行验证。
 * @returns {Boolean} 返回是否验证通过
 */
function check() {
	// 点击登录按钮时，对输入框的值进行验证
	if ($("#pwd").is(":visible")) {
		var pwd = $("#pwd").val();
		var tid = $("#tid").val();
		var ident = $("#ident").val();
		if (tid == "您的邮箱账号/手机号" && pwd == "您的密码") {
			$("#contents").html("账号或密码不能为空");
			return false;
		} else if (tid == "您的邮箱账号/手机号" || tid == " ") {
			$("#contents").html("账号不能为空");
			return false;
		} else if (!tid
				.match(/(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/)) {
			$("#contents").html("邮箱账号/手机号格式不正确");
			return false;
		} else if (pwd == "您的密码") {
			$("#contents").html("密码不能为空");
			return false;
		} else if (ident == "验证码" || ident == " ") {
			$("#contents").html("验证码不能为空");
			return false;
		}
		return true;
	}

	// 点击注册按钮时，对输入框的值进行验证
	if ($("#pwd").is(":hidden")) {
		var tid = $("#tid").val();
		if (tid == "您的邮箱账号/手机号" || tid == " ") {
			$("#contents").html("账号或密码不能为空");
			return false;
		} else if (!tid
				.match(/(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/)) {
			$("#contents").html("邮箱账号/手机号格式不正确");
			return false;
		}
		return true;
	}
}
// js获取项目根路径，如： http://localhost:8080/Qunawan
function getRootPath() {
	// 获取当前网址，如： http://localhost:8080/Qunawan/pages/index.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： Qunawan/pages/index.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8080
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/Qunawan
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht + projectName);
}
