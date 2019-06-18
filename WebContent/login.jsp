<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>去哪玩_登录</title>
<link type="text/css" rel="stylesheet" href="css/login.css" />
<script type="text/javascript" src="js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/pages/login/login.js"></script>

</head>
<body>
	<!-- 背景  开始 -->
	<div class="backgrounds" id="backgrounds">
		<!-- 表单框 -->
		<div class="content" id="div_position">

			<div class="login_framework">
			
				<form id="log_reg_form" method="post" name="loginForm" action="/PRJ_WTP_JEE_018/login.jhtml">
				
					<input type="hidden" name="re" value="${param.re}" />
				
					<div class="content2">
						
						<div id="contents" class="contents">${message}</div>
						
						<ul>
							<li><input id="tid" name="name" type="text" class="text" /><br /></li>
						</ul>
						<ul id="pwd_p">
							<li><input type="text" name="password" id="pwd" class="text"
								value="您的密码" /></li>
						</ul>
						<!-- 验证码获取的时候，点击刷新，需要不同的请求才会刷新，因此我们给一个时间参数，使请求每一时刻都不同，达到刷新验证码的目的 -->
						<ul id="identfy_all">
							<li>
								<span class="identifying">
							
									<img src="code.jhtml" width="120px" height="40px"
									onclick="javascript:this.src='code.jhtml?id='+new Date().getMilliseconds()">
									
								</span>
								<input type="text" name="code" id="ident" class="text identify" value="验证码" />
							</li>
						</ul>
						<span class="rem_password"> <a href="#" class="texts">&nbsp</a>
						</span> <input class="login_button" id="button" value="登  录"
							type="button"/>
					</div>
				</form>
				<div class="third_part centers" id="third_part"
					style="display: none;">
					<div class="hro"></div>
					<div class="content_th">
						用合作网站账户直接登录<br /> <a href="javascript:void(0);" class="posit"><img
							src="img/sina.png"><br />
							<p>新浪微博</p></a> <a href="javascript:void(0);" class="posit"><img src="img/qq.png"><br />
							<p>QQ</p></a> <a href="javascript:void(0);" class="posit"><img src="img/renren.png"><br />
							<p>人人网</p></a> <a href="javascript:void(0);" class="posit"><img src="img/so.png"><br />
							<p>更多</p></a>
					</div>
				</div>
			</div>
			<div class="regist" id="regesits">
				还没有帐号?<span class="texts cursors">马上注册</span>
			</div>
			<div class="logins" id="logins" style="display: none;">
				已经注册?<span class="texts cursors">马上登录</span>
			</div>
		</div>
	</div>
	<!-- 背景  结束 -->
	<script type="text/javascript">
		if('${init}' == 'reg'){
			$("#third_part").show();
			$("#logins").show();
			$("#pwd_p").hide();
			$("#regesits").hide();
			$("#identfy_all").hide();
			$(":button").val("注 册");
			$("#logo_img").css("display", "block");
			$("#button").click(function() {
				register('loginForm');
			});
		}
	</script>
</body>
</html>