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
	<title>去哪玩_旅游网</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="css/index.css">
	<script src="js/jquery/jquery-1.11.0.min.js"></script>
	<script src="js/pages/index/rocket.js"></script>
	<base href="<%=basePath%>" />
</head>
<body>

	<!-- 顶端，引入公共部分的顶部jsp -->
	<%@ include file="/common/header.jsp"%>
	
	<form id="searchForm" action="javascript:void(0);" method="post">
	
		<input type="hidden" name="triptype" id="triptype" value=""/>
		<input type="hidden" name="place" id="place" value=""/>
		<input type="hidden" name="theme" id="theme" value=""/>
	</form>
	<!-- 内容模块开始 -->
	<div id="2" class="public-box" data-count-first="自驾游">
		<div class="public-tit">
			<h3>
				<strong>自驾游</strong><span>行走山水间，足迹遍中国</span>
			</h3>
			<a class="public-tit-more fr" href="javascript:void(0);">更多自驾游</a>
		</div>

		<!-- 公共左边导航模块开始 -->
		<div class="public-asidebg" data-count-first="左侧导航">
			<div class="public-asidenav">
				<div class="min-title">热门景点</div>
				<!-- 导航栏内容部分 -->
				<div class="navigation-content">
					<center>
						<table class="navigation-table nplace">
							<c:forEach items="${placeMap }" var="map">
								<c:if test="${map.key == '自驾游' }">
									<c:forEach items="${map.value}" var="place" varStatus="n">
										<c:if test="${n.count%2==1 }">
											<tr>
										</c:if>
										
										<c:if test="${n.count==1 }">
											<td align="right" width="100px"><a href="javascript:void(0);">${place }</a></td>
											<td width="30px"></td>
											<c:if test="${n.last }">
												<td align="left" width="100px"><a href="javascript:void(0);"></a></td>
											</c:if>
										</c:if>
										<c:if test="${n.count==2 }">
											<td align="left" width="100px"><a href="javascript:void(0);">${place }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==1 && n.count!=1 }">
											<td align="right"><a href="javascript:void(0);">${place }</a></td>
											<td></td>
										</c:if>
										<c:if test="${n.count%2==0 && n.count!=2 }">
											<td align="left"><a href="javascript:void(0);">${place }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==0 }">
											</tr>
										</c:if>
									</c:forEach> 
								</c:if>
							</c:forEach>
						</table>
					</center>
				</div>
				<div class="line1_style">
					<img src="./img/line1.png" width="23px" height="211px" alt="" />
				</div>

				<div class="min-title">热门主题</div>
				<div class="navigation-content">
					<center>
						<table class="navigation-table ntheme">
							<c:forEach items="${themeMap }" var="map">
								<c:if test="${map.key == '自驾游' }">
									<c:forEach items="${map.value}" var="theme" varStatus="n">
										<c:if test="${n.count%2==1 }">
											<tr>
										</c:if>
										
										<c:if test="${n.count==1 }">
											<td align="right" width="100px"><a href="javascript:void(0);">${theme }</a></td>
											<td width="30px"></td>
											<c:if test="${n.last }">
												<td align="left" width="100px"><a href="javascript:void(0);"></a></td>
											</c:if>
										</c:if>
										<c:if test="${n.count==2 }">
											<td align="left" width="100px"><a href="javascript:void(0);">${theme }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==1 && n.count!=1 }">
											<td align="right"><a href="javascript:void(0);">${theme }</a></td>
											<td></td>
										</c:if>
										<c:if test="${n.count%2==0 && n.count!=2 }">
											<td align="left"><a href="javascript:void(0);">${theme }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==0 }">
											</tr>
										</c:if>
									</c:forEach> 
								</c:if>
							</c:forEach>
						</table>
					</center>
				</div>
				<div class="line2_style">
					<img src="./img/line2.png" width="23px" height="184px" alt="" />
				</div>
			</div>

		</div>
		<!-- 公共左边导航模块结束 -->

		<!-- 自驾游侧边产品list -->
		<div class="public-pro fls freedomWalk-detail"
			id="freedomWalk-detail3" data-count-first="右侧图片列表">
			<div class="pro-list">
				<!--自驾游推荐景点-->
				<ul>
					<c:forEach items="${itemMap}" var="map">
						<c:if test="${map.key == '自驾游' }">
							<c:forEach items="${map.value}" var="item" varStatus="n">
								<li>
									<div class="pro_list_content">
										<p>
										
											<!-- 实训场景013：活跃时长统计（二） - a标签的url重写【START】 -->
											<a href="javascript:void(0);" title="###"><img
												src="image_cache/${item.main_picname }" alt="###" width="290" height="200"></a>
											<!-- 实训场景013：活跃时长统计（二） - a标签的url重写【END】 -->
												
										</p>
				
										<p>
											<span class="pro-list-price fr"><i>￥</i><em>${item.min_price }</em>起</span> <a
												href="javascript:void(0);" title="###" >${item.s_title }</a>
										</p>
									</div>
								</li>
							</c:forEach> 
						</c:if>
					</c:forEach>
				</ul>
			</div>
		</div>

	</div>
	<div id="3" class="public-box" data-count-first="国内游">
		<div class="public-tit">
			<h3>
				<strong>国内游</strong><span>拎包就走,轻松出游</span>
			</h3>
			<a class="public-tit-more fr" href="javascript:void(0);">更多国内游</a>
		</div>

		<!-- 公共左边导航模块开始 -->
		<div class="public-asidebg" data-count-first="左侧导航">
			<div class="public-asidenav">
				<div class="min-title">热门景点</div>
				<!-- 导航栏内容部分 -->
				<div class="navigation-content">
					<center>
						<table class="navigation-table nplace">
							<c:forEach items="${placeMap }" var="map">
								<c:if test="${map.key == '国内游' }">
									<c:forEach items="${map.value}" var="place" varStatus="n">
										<c:if test="${n.count%2==1 }">
											<tr>
										</c:if>
										
										<c:if test="${n.count==1 }">
											<td align="right" width="100px"><a href="javascript:void(0);">${place }</a></td>
											<td width="30px"></td>
											<c:if test="${n.last }">
												<td align="left" width="100px"><a href="javascript:void(0);"></a></td>
											</c:if>
										</c:if>
										<c:if test="${n.count==2 }">
											<td align="left" width="100px"><a href="javascript:void(0);">${place }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==1 && n.count!=1 }">
											<td align="right"><a href="javascript:void(0);">${place }</a></td>
											<td></td>
										</c:if>
										<c:if test="${n.count%2==0 && n.count!=2 }">
											<td align="left"><a href="javascript:void(0);">${place }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==0 }">
											</tr>
										</c:if>
									</c:forEach> 
								</c:if>
							</c:forEach>
						</table>
					</center>
				</div>
				<div class="line1_style">
					<img src="./img/line1.png" width="23px" height="211px" alt="" />
				</div>

				<div class="min-title">热门主题</div>
				<div class="navigation-content">
					<center>
						<table class="navigation-table ntheme">
							<c:forEach items="${themeMap }" var="map">
								<c:if test="${map.key == '国内游' }">
									<c:forEach items="${map.value}" var="theme" varStatus="n">
										<c:if test="${n.count%2==1 }">
											<tr>
										</c:if>
										
										<c:if test="${n.count==1 }">
											<td align="right" width="100px"><a href="javascript:void(0);">${theme }</a></td>
											<td width="30px"></td>
											<c:if test="${n.last }">
												<td align="left" width="100px"><a href="javascript:void(0);"></a></td>
											</c:if>
										</c:if>
										<c:if test="${n.count==2 }">
											<td align="left" width="100px"><a href="javascript:void(0);">${theme }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==1 && n.count!=1 }">
											<td align="right"><a href="javascript:void(0);">${theme }</a></td>
											<td></td>
										</c:if>
										<c:if test="${n.count%2==0 && n.count!=2 }">
											<td align="left"><a href="javascript:void(0);">${theme }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==0 }">
											</tr>
										</c:if>
									</c:forEach> 
								</c:if>
							</c:forEach>
						</table>
					</center>
				</div>
				<div class="line2_style">
					<img src="./img/line2.png" width="23px" height="184px" alt="" />
				</div>
			</div>

		</div>
		<!-- 公共左边导航模块结束 -->

		<!-- 国内游侧边产品list -->
		<div class="public-pro fls freedomWalk-detail"
			id="freedomWalk-detail1" data-count-first="右侧图片列表">
			<div class="pro-list">
				<ul>
					<c:forEach items="${itemMap }" var="map">
						<c:if test="${map.key == '国内游' }">
							<c:forEach items="${map.value}" var="item" varStatus="n">
								<li>
									<div class="pro_list_content">
										<p>
										
											<a href="javascript:void(0);" title="###" ><img
												src="image_cache/${item.main_picname }" alt="###" width="290" height="200"></a>
											
										</p>
				
										<p>
											<span class="pro-list-price fr"><i>￥</i><em>${item.min_price }</em>起</span> <a
												href="javascript:void(0);" title="###" >${item.s_title }</a>
										</p>
									</div>
								</li>
							</c:forEach> 
						</c:if>
					</c:forEach>
				</ul>
			</div>
		</div>

	</div>
	<div id="4" class="public-box" data-count-first="境外游">
		<div class="public-tit">
			<h3>
				<strong>境外游</strong><span>世界有多大，我就玩多远</span>
			</h3>
			<a class="public-tit-more fr" href="javascript:void(0);">更多出境游</a>
		</div>

		<!-- 公共左边导航模块开始 -->
		<div class="public-asidebg" data-count-first="左侧导航">
			<div class="public-asidenav">
				<div class="min-title">热门景点</div>
				<!-- 导航栏内容部分 -->
				<div class="navigation-content">
					<center>
						<table class="navigation-table nplace">
							<c:forEach items="${placeMap }" var="map">
								<c:if test="${map.key == '出境游' }">
									<c:forEach items="${map.value}" var="place" varStatus="n">
										<c:if test="${n.count%2==1 }">
											<tr>
										</c:if>
										
										<c:if test="${n.count==1 }">
											<td align="right" width="100px"><a href="javascript:void(0);">${place }</a></td>
											<td width="30px"></td>
											<c:if test="${n.last }">
												<td align="left" width="100px"><a href="javascript:void(0);"></a></td>
											</c:if>
										</c:if>
										<c:if test="${n.count==2 }">
											<td align="left" width="100px"><a href="javascript:void(0);">${place }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==1 && n.count!=1 }">
											<td align="right"><a href="javascript:void(0);">${place }</a></td>
											<td></td>
										</c:if>
										<c:if test="${n.count%2==0 && n.count!=2 }">
											<td align="left"><a href="javascript:void(0);">${place }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==0 }">
											</tr>
										</c:if>
									</c:forEach> 
								</c:if>
							</c:forEach>
						</table>
					</center>
				</div>
				<div class="line1_style">
					<img src="./img/line1.png" width="23px" height="211px" alt="" />
				</div>

				<div class="min-title">热门主题</div>
				<div class="navigation-content">
					<center>
						<table class="navigation-table ntheme">
							<c:forEach items="${themeMap }" var="map">
								<c:if test="${map.key == '出境游' }">
									<c:forEach items="${map.value}" var="theme" varStatus="n">
										<c:if test="${n.count%2==1 }">
											<tr>
										</c:if>
										
										<c:if test="${n.count==1 }">
											<td align="right" width="100px"><a href="javascript:void(0);">${theme }</a></td>
											<td width="30px"></td>
											<c:if test="${n.last }">
												<td align="left" width="100px"><a href="javascript:void(0);"></a></td>
											</c:if>
										</c:if>
										<c:if test="${n.count==2 }">
											<td align="left" width="100px"><a href="javascript:void(0);">${theme }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==1 && n.count!=1 }">
											<td align="right"><a href="javascript:void(0);">${theme }</a></td>
											<td></td>
										</c:if>
										<c:if test="${n.count%2==0 && n.count!=2 }">
											<td align="left"><a href="javascript:void(0);">${theme }</a></td>
										</c:if>
										
										<c:if test="${n.count%2==0 }">
											</tr>
										</c:if>
									</c:forEach> 
								</c:if>
							</c:forEach>
						</table>
					</center>
				</div>
				<div class="line2_style">
					<img src="./img/line2.png" width="23px" height="184px" alt="" />
				</div>
			</div>

		</div>
		<!-- 公共左边导航模块结束 -->

		<!-- 出境游侧边产品list -->
		<div class="public-pro fls freedomWalk-detail"
			id="freedomWalk-detail2" data-count-first="右侧图片列表">
			<div class="pro-list">
				<!--出境游推荐景点-->
				<ul>
					<c:forEach items="${itemMap}" var="map">
						<c:if test="${map.key == '出境游' }">
							<c:forEach items="${map.value}" var="item" varStatus="n">
								<li>
									<div class="pro_list_content">
										<p>
										
											<a href="javascript:void(0);" title="###" ><img
												src="image_cache/${item.main_picname }" alt="###" width="290" height="200"></a>
												
										</p>
				
										<p>
											<span class="pro-list-price fr"><i>￥</i><em>${item.min_price }</em>起</span> <a
												href="javascript:void(0);" title="###" >${item.s_title }</a>
										</p>
									</div>
								</li>
							</c:forEach> 
						</c:if>
					</c:forEach>
				</ul>
			</div>
		</div>
	</div>
	
	<!-- 内容模块结束 -->
	
	<!-- 小火箭置顶 开始 -->
	<div style="display: none;" id="rocket-to-top">
	    <div style="opacity:0;display: block;" class="level-2"></div>
	    <div class="level-3"></div>
	</div>
	<!-- 小火箭置顶  结束 -->
	
	<%-- 底部，引入公共部分的底部jsp --%>
	<%@ include file="/common/footer.jsp"%>
	
	<!-- 左侧悬浮导航 -->
	<div id="nav-right" class="nav-right">
		<div class="nav-right-nav">
			<ul class="clearfix">
				<a id="nav1" href="#1">
					<li id="dd"><h3>顶端</h3></li> </a>
				<a id="nav2" href="#2">
					<li id="zj"><h3>自驾</h3></li>
				</a>
				<a id="nav3" href="#3">
					<li id="gn"><h3>国内</h3></li>
				</a>
				<a id="nav4" href="#4">
					<li id="jw" class="last"><h3>境外</h3></li>
				</a>
			</ul>
		</div>
	</div>
	<script src="js/pages/index/index.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('#nav1').click(function() {
				$("html,body").animate({
					scrollTop : 0
				}, 500)
			})
			$('#nav2').click(function() {
				$("html,body").animate({
					scrollTop : $("#2").offset().top
				}, 500)
			})
			$('#nav3').click(function() {
				$("html,body").animate({
					scrollTop : $("#3").offset().top
				}, 500)
			})
			$('#nav4').click(function() {
				$("html,body").animate({
					scrollTop : $("#4").offset().top
				}, 500)
			})
			/*鼠标移入时图片向上，移出时图片还原 开始*/
            $(".pro_list_content").hover(function(){
                $(this).css("margin-top","-8px");
                $(this).css("transition","0.5s");
            },function(){
                $(this).css("margin-top","-0px");
                $(this).css("transition","0.5s");
            });
        	/*鼠标移入时图片向上，移出时图片还原 开始*/
		})
	</script>
</body>
</html>