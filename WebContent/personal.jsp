<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<jsp:include page="/common/header.jsp"></jsp:include>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>个人空间-个人信息</title>
	<link type="text/css" rel="stylesheet"
		href="css/personalCss.css" />
	<link rel="stylesheet"
		href="css/jquery.Jcrop.min.css">
	<link rel="stylesheet" type="text/css"
		href="css/img_account.css">
	<script type="text/javascript"
		src="js/jquery/jquery-1.11.0.min.js"></script>
	<script type="text/javascript"
		src="js/bootstrap/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="js/pages/personal/frame/jquery.Jcrop.min.js"></script>
	<script type="text/javascript"
		src="js/pages/personal/frame/birthday.js"></script>
	<script src="js/common.js"
		type="text/javascript"></script>
	<script type="text/javascript"
		src="js/pages/personal/personal_information.js"></script>
	<script type="text/javascript">
		var jcrop_api, boundx, boundy, $preview, $pcnt, pimg;
		var xsize, ysize;
		$(document).ready(function(e) {
			$preview = $('.img-preview');
			$pcnt = $('.img-preview .img-contbox');
			$pimg = $('.img-preview .img-contbox img');
			xsize = $pcnt.width();
			ysize = $pcnt.height();
		});
	</script>
	<base href="<%=basePath%>" />
</head>
<body>
	<!-- 个人空间 开始-->
	<div class="content_infor">
		<a href="index.jhtml">我的去哪玩</a>> <a
			href="personalinfo.jhtml?type=init">个人空间</a>>
		<a id="target_title3" href="javascript:;">个人信息</a>
	</div>
	<div class="content_all">

		<!-- 左边  菜单栏开始-->

		<!-- 左边  菜单栏开始-->
		<div class="content_left ">
			<div class="content_left_first">
				<img src="user_img/1.jpg" class="img_head" />

				<p>编辑我的资料</p>
			</div>
			<div class="content_left_two">
				<ul>
					<li id="my_re_list"><span class="icon  icon_my_re_list ">
					</span> <span class="position_my_re_list"> <a
							href="#"> 我的约单 </a>
					</span></li>
					<li id="personal_detail" class="backgroundClass"><span
						class="icon  icon_my_re_list  icon_personal"> </span> <span
						class="position_my_re_list"> <a
							href="personalinfo.jhtml"> 个人信息 </a>
					</span></li>
					<li id="password_detail"><span
						class="icon  icon_my_re_list  icon_password" style=""> </span> <span
						class="position_my_re_list"> <a
							href="#"> 密码修改 </a>
					</span></li>
					<li id="my_comment"><span
						class="icon  icon_my_re_list icon_comment " style=""> </span> <span
						class="position_my_re_list"> <a
							href="#"> 我的点评 </a>
					</span></li>
					<span class="hr_css">
						<hr style="width: 120px; border-top: 1px #ccc solid;" />
					</span>
					<li id="usually_tourist_infor"><span
						class="icon  icon_my_re_list iconusually" style=""> </span> <span
						class="position_my_re_list"> <a
							href="#"> 常用游客信息 </a>
					</span></li>
					<li><span class="icon  icon_my_re_list icon_card " style="">
					</span> <span class="position_my_re_list">礼品卡</span></li>
					<li><span class="icon  icon_my_re_list iconmoney " style="">
					</span> <span class="position_my_re_list">我的积分</span></li>
					<li><span class="icon  icon_my_re_list icon_email " style="">
					</span> <span class="position_my_re_list">邮件订阅</span></li>
					<span class="hr_css">
						<hr style="width: 120px; border-top: 1px #ccc solid;" />
					</span>
					<li><span class="icon  icon_my_re_list icon_vip" style="">
					</span> <span class="position_my_re_list ">会员俱乐部</span></li>
					<li><span class="icon  icon_my_re_list icon_way" style="">
					</span> <span class="position_my_re_list">我的攻略</span></li>
					<li><span class="icon  icon_my_re_list icon_collection"
						style=""> </span> <span class="position_my_re_list">我的收藏</span></li>
					<li><span class="icon  icon_my_re_list icon_my_tour" style="">
					</span> <span class="position_my_re_list">我的游记</span></li>
				</ul>
			</div>
		</div>
		<!-- 左边  菜单栏结事-->

		<!-- 左边  菜单栏结事-->


		<!-- 右侧  选项卡开始-->
		<div class="content_right_pa">
			<!-- 右侧  个人资料开始-->
			<div class="content_right" id="personal_detail_content">
				<div class="head_detail">
					<ul>
						<li id="per_de">个人资料编辑</li>
						<li id="my_head">头像编辑</li>
					</ul>
				</div>
				<div class="per_detail_content">
					<form name="personForm" ">
						<ul>
							<li><span style="margin-left: 30px" class="redcolor"
								id="error_msg">${requestScope.err_msg}</span></li>

							<li><label> 昵称：</label> <input type="text"
								placeholder="请输入昵称" id="myname" name="name"
								value="${user.name }" class="input_style" /> <span
								id="myname_msg"></span></li>
							<li><label><span class="redcolor">*</span>性别：</label> <c:choose>
									<c:when test="${user.sex }">
										<input type="radio" name="sex" value="1" checked /> 男 <input
											type="radio" name="sex" value="0" />
								女
								</c:when>
									<c:otherwise>
										<input type="radio" name="sex" value="1" /> 男 <input
											type="radio" name="sex" value="0" checked />
								女
								</c:otherwise>
								</c:choose></li>
							<li><label> <span class="redcolor">*</span>手机号：
							</label> <input type="text" name="mobile" placeholder="请输入手机号码"
								value="${user.phone }" id="mobile" class="input_style"
								onBlur="checkMobile()" /> <span id="mobile_tip"> </span></li>
							<li><label> <span class="redcolor">*</span>邮箱：
							</label> <input type="text" placeholder="请输入邮箱" id="email" name="email"
								value="${user.email }" class="input_style" onBlur="checkEmail()" />
								<span id="email_msg"></span></li>
							<li><label> 真实姓名： </label> <input type="text"
								placeholder="请输入真实姓名" id="realname" value="${user.real_name }"
								name="realname" class="input_style" /> <span id="realname_msg"></span></li>
							<c:choose>
								<c:when test="${empty user.birthday.month}">
									<li><label> 生日：</label> <select class="sel_year" rel=""
										name="sel_year"></select> <select class="sel_month" rel=""
										name="sel_month"></select> <select class="sel_day" rel=""
										name="sel_day"></select></li>
								</c:when>
								<c:when test="${empty user.birthday.year}">
									<li><label> 生日：</label> <select class="sel_year" rel=""
										name="sel_year"></select> <select class="sel_month" rel=""
										name="sel_month"></select> <select class="sel_day" rel=""
										name="sel_day"></select></li>
								</c:when>
								<c:when test="${empty user.birthday.date}">
									<li><label> 生日：</label> <select class="sel_year" rel=""
										name="sel_year"></select> <select class="sel_month" rel=""
										name="sel_month"></select> <select class="sel_day" rel=""
										name="sel_day"></select></li>
								</c:when>
								<c:otherwise>
									<li><label> 生日：</label> <select class="sel_year"
										rel="<fmt:formatDate value="${user.birthday}" pattern="yyyy" />"
										name="sel_year"></select> <select class="sel_month"
										rel="${user.birthday.month+1}" name="sel_month"></select> <select
										class="sel_day" rel="${user.birthday.date}" name="sel_day"></select></li>
								</c:otherwise>
							</c:choose>

							<li><label> 地区： </label> <select id="province"
								name="province" class="cityclass" onchange="checkCity()"
								onBlur="checkSelect()">
									<c:choose>
										<c:when test="${!empty user.city }">
											<option value='${user.city.parentCity.id}'>${user.city.parentCity.name}</option>
										</c:when>
										<c:otherwise>
											<option value="">----请选择省份----</option>
										</c:otherwise>
									</c:choose>
									<c:forEach items="${provinces }" var="province">
										<option value='${province.id}'
										${city.parentCity.id==province.id?'selected':''}>${province.name}</option>
									</c:forEach>
							</select> <select id="select_city" name="city" class="city cityclass"
								onBlur="checkSelectCity()">
									<option value='${user.city.id }' selected>${user.city.name }</option>
							</select><span id="city_msg"></span></li>
							<li><label> </label> <input type="button"
								class="save_button" value="保  存" /></li>
						</ul>
					</form>
				</div>
				<div class="head_detail_content">
					<form name="headForm" method="post"
>
						<div class="headMain">
							<div class="preview_pane">
								<p>设置您的头像：</p>
								<p class="preview_background">
									<img src="img/icon.jpg" id="target" class="mainImage" />
								</p>
								<p>仅支持GIF、JPG、PNG图片</p>
							</div>
							<div class="source_pane">
								<p>头像预览（大小：200 * 200）</p>
								<div class="img-preview">
									<div class="img-contbox">
										<img src="img/icon.jpg" id="litte_pre" class="jcrop-preview"
											alt="Preview">
									</div>
								</div>
								<div>
									<a href="javascript:void(0);" class="file">上传照片 <input
									 name="image" id="imgOne" accept=".png,.jpg,.gif"
								>
									</a>
								</div>
							</div>
						</div>
						<input type="hidden" id="x1" name="x1" /> <input type="hidden"
							id="y1" name="y1" /> <input type="hidden" id="x2" name="x2" />
						<input type="hidden" id="y2" name="y2" /> <input type="hidden"
							id="w" name="w" /> <input type="hidden" id="h" name="h" /> <input
							type="hidden" id="ratio" name="ratio" /> <img
							style="display: none" src="img/icon.jpg" id="org_file"
							name="org_file" />
						<div class="text-center" style="margin-top: 100px">
							<input type="button" id="btnHeadSave"
								class="save_button save_left" 
								value="保   存" />
						</div>
					</form>
				</div>
			</div>
			<!-- 右侧  个人资料  开始-->
		</div>
		<!-- 右边  选项卡结束-->
	</div>
	<!-- 个人空间 结束-->

	<!-- 引入尾部开始 -->
	<iframe src="common/footer.jsp"
		style="width: 100%; height: 650px; border: 0; overflow: hidden;"></iframe>
	<!-- 引入尾部结束 -->

</body>
</html>