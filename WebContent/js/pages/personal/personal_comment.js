/**
 * 初始化获取待评论的订单数据
 */
$(document).ready(function() {
	getWaitCommentOrders();
	$('#comment_info').fadeOut(5000);
});
// 当前等待评论订单的id
var orderid;
/**
 * 获取待评价订单列表的ajax请求
 * 
 * @param page
 *            请求的页码
 */
function getWaitCommentOrders(page) {
	if (page == null || page <= 0) {
		page = 1;
	}
	$
			.ajax({
				type : "POST",
				async : true,
				url : "mycomment.jhtml",
				data : {
					page : page,
					type : 'getWaitComments'
				},
				dataType : "json",

				// 成功返回调用的函数
				success : function(data) {
					var pageCount = 1;
					var waitSize = 0;
					var finishSize = 0;
					var html = '';
					var flag = "true";
					$
							.each(
									data,
									function(key, value) {
										pageCount = value.pageCount == 0 ? 1
												: value.pageCount;
										waitSize = (value.waitCount == "") ? 0
												: value.waitCount;
										finishSize = (value.finishCount == "") ? 0
												: value.finishCount;
										if (!value.orderno) {
											flag = "false";
										}
										// 遍历输出html
										html += '<div class="comstati clearfix">'
												+ '<div class="com-null">'
												+ '<span class="com_count_img"> <img src="'
												+ getRootPath()
												+ '/image_cache/'
												+ value.image
												+ '" />'
												+ '</span>'
												+ '<div class="com_count_detail">'
												+ '<p>'
												+ '<em>订单号：</em> <strong>'
												+ value.orderno
												+ '</strong>'
												+ '</p>'
												+ '<p>'
												+ '<em>好&nbsp;评：</em> <strong>'
												+ value.good_rate
												+ '%</strong>'
												+ '</p>'
												+ '<p>'
												+ '<em>产品名称：</em> <em>'
												+ value.content
												+ '</em>'
												+ '</p>'
												+ '<p>'
												+ '<em>出行时间：</em> <em>'
												+ value.time
												+ '</em>'
												+ '</p>'
												+ '</div>'
												+ '<div class="dp_write">'
												+ '<a class="icon_writeBtn" id="'
												+ value.orderid
												+ '" href="javascript:;" data-placeid="79"'
												+ ' data-orderid="" data-productid=""></a>'
												+ '<p>'
												+ '<strong>'
												+ value.totalNum
												+ '</strong> 位驴友点评过'
												+ '</p>'
												+ '</div>'
												+ '</div>'
												+ '<div class="js_content" sytle="height:50px;clear:both"></div></div>';

									});

					$('#to_comment').html("待点评(" + waitSize + ")");
					$('#comments').html("已点评(" + finishSize + ")");
					if (flag == "true") {
						$('#wait_comments').html(html);
					}else{
						$('#wait_comments').html('');
					}

					$('#wait_comments')
							.append(
									'<div class="Pages" id="waitToCommentPages"></div>');
					var pageHtml = fenye(page, pageCount,
							"getWaitCommentOrders");
					$('#waitToCommentPages').html(pageHtml);
				},
				complete : function() {
					$(".icon_writeBtn").click(
							function() {
								index = $(this).index(".icon_writeBtn");
								orderid = $(this).attr("id");
								if ($(this).parent().parent().parent()
										.siblings().children().hasClass(
												"comappend")) { // 判断每个待点评表单是否已经打开点评下拉框
									$(".comappend").remove();
									$('.comappend').animate({
										height : 'hide'
									});
								}
								if (!$(".comstati").children().hasClass(
										"comappend")) {
									$(".comstati").eq(index).append(htmls);

									usejs();

									$('.comappend').animate({
										height : 'show'
									});
								} else {
									$(".comappend").remove();
									$('.comappend').animate({
										height : 'hide'
									});
								}
								$('input[name=orderid]').val(orderid);
							});

				},
				error : function(XMLResponse) {
					alert(XMLResponse.responseText)
				}
			});
}
/* 评论展开模块的html 【start】 */
var htmls = '';
htmls += '<div   class="comappend" style="display: none;  " >';
htmls += '<div class="JS_closeBox comform combd" style="display: block;">';
htmls += ' <i  class="iconcom iconcom-boxdir"></i>';
htmls += '<i class="JS_close iconcom iconcom-close"></i>';
htmls += '<form id="saveCommentForm" method="POST" action="mycomment.jhtml?type=submitComment" enctype="multipart/form-data">';
htmls += '<div class="comform_a">';
htmls += '<div class="comform_a_left">';
htmls += '<input type="hidden" value="" name="orderid">';
htmls += '<ul class="clearfix">';
htmls += '<li>';
htmls += '<span class="comcount"><em>景点</em> &nbsp;&#40; &nbsp;&nbsp;&nbsp;&nbsp;&#41;  </span>';
htmls += '<div class="box-body">';
htmls += '<select class="example-f" name="siteScore">';
htmls += '<option value="1">1</option>';
htmls += '<option value="2">2</option>';
htmls += '<option value="3">3</option>';
htmls += '<option value="4">4</option>';
htmls += '<option value="5">5</option>';
htmls += '</select>';
htmls += '</div>';
htmls += '</li>';
htmls += '<li>';
htmls += '<span class="comcount"><em>酒店</em> &nbsp;&#40; &nbsp;&nbsp;&nbsp;&nbsp;&#41; </span>';
htmls += '<div class="box-body">';
htmls += '<select class="example-f" name="hotelScore">';
htmls += '<option value="1">1</option>';
htmls += '<option value="2">2</option>';
htmls += '<option value="3">3</option>';
htmls += '<option value="4">4</option>';
htmls += '<option value="5">5</option>';
htmls += '</select>';
htmls += '</div>';
htmls += '</li>';
htmls += '<li>';
htmls += '<span class="comcount"><em>服务</em> &nbsp;&#40; &nbsp;&nbsp;&nbsp;&nbsp;&#41; </span>';
htmls += '<div class="box-body">';
htmls += '<select class="example-f" name="serviceScore">';
htmls += '<option value="1">1</option>';
htmls += '<option value="2">2</option>';
htmls += '<option value="3">3</option>';
htmls += '<option value="4">4</option>';
htmls += '<option value="5" checked>5</option>';
htmls += '</select>';
htmls += '</div>';
htmls += '</li>';
htmls += '<li>';
htmls += '<span class="comcount"><em>交通</em> &nbsp;&#40; &nbsp;&nbsp;&nbsp;&nbsp;&#41; </span>';
htmls += '<div class="box-body">';
htmls += '<select class="example-f" name="trafficScore">';
htmls += '<option value="1">1</option>';
htmls += '<option value="2">2</option>';
htmls += '<option value="3">3</option>';
htmls += '<option value="4">4</option>';
htmls += '<option value="5">5</option>';
htmls += '</select>';
htmls += '</div>';
htmls += '</li>';
htmls += '</ul>';
htmls += '</div>';
htmls += '<div class="comform_a_right">';
htmls += '<span>';
htmls += '精华秘籍：超200字+美图+原创内容丰富实用，满足以上即有机会被设为精华哦！';
htmls += '</span>';
htmls += '<textarea name="content" id="content"  maxlength="100"  onfocus="if(value==\'旅途中的喜闻乐见，美景美食美人，都记录下来吧~\') {value=\'\'}"   onblur="if (value ==\'\'){value=\'旅途中的喜闻乐见，美景美食美人，都记录下来吧~\'}">旅途中的喜闻乐见，美景美食美人，都记录下来吧~</textarea>';
htmls += '<div class="comcontent-info clearfix">';
htmls += '<span>不知如何写？看看示例: <a href="javascript:void(0);" class="JS_opendemo">示例</a></span>';
htmls += '<span class="fr">输入20-1000字</span>';
htmls += '</div>';
htmls += '</div>';
htmls += '</div>';
htmls += '<div class="comform_b">';
htmls += '<div id="demo" class="demo" style="width: 780px; min-height:64px;">';
htmls += '</div>';
htmls += '</div>';
htmls += '<div class="comform_c">';
htmls += '<em>*图片大小1M以下，支持上传12张，格式支持：png，jpeg</em>';
htmls += '<div class="status_bar comform-subbox fr clearfix">';
htmls += '<div class="btns">';
htmls += '<input id="fileImage" type="file" size="30" name="fileselect[]" multiple="multiple" accept=".png, .jpg, .jpeg">';
htmls += '<input type="button" onclick="submitMainForm();"  value="开始上传" class="JS_inset comcon-submit fr upload_btn">';
htmls += '</div>';
htmls += '</div>';
htmls += '</div>';
htmls += '</form>';
htmls += '</div>';
htmls += '</div>';
/* 评论展开模块的html 【end】 */

function submitMainForm() {
	if (ZYFILE.funReturnNeedFiles().length == 0) {
		$('#saveCommentForm').submit();
	} else if(ZYFILE.funReturnNeedFiles().length > 12){
		alert("最多上传12张图，目前图片数：" + ZYFILE.funReturnNeedFiles().length);
	}
}

/**
 * 获取已评价订单列表的ajax请求
 * 
 * @param page
 *            请求的页码
 */
function getFinishCommentOrders(page) {
	if (page == null || page <= 0) {
		page = 1;
	}
	var imageCount = 0;
	$
			.ajax({
				type : "POST",
				async : true,
				url : "mycomment.jhtml",
				data : {
					page : page,
					type : 'getFinishComment',
				},
				dataType : "json",

				// 成功返回调用的函数
				success : function(data) {
					$('#finish_comments').empty(); // 清空resText里面的所有内容
					var html = '';
					var size = 0;
					var pageCount = 1;
					$
							.each(
									data,
									function(key, value) {
										pageCount = value.pageCount == 0 ? 1
												: value.pageCount;
										size = value.count;
										var imgsHtml = '';
										$.each(value.imgs,
												function(index, item) {
													imgsHtml += '<li><a href="'
															+ getRootPath()
															+ '/image_cache/'
															+ item
															+ '"><img src="'
															+ getRootPath()
															+ '/image_cache/'
															+ item
															+ '" /></a></li>';
												});
										if (value.orderContent.length < 45) {
											value.orderContent = value.orderContent;
										} else {
											value.orderContent = value.orderContent
													.substr(0, 45)
													+ ". . .";
										}

										html += '<div class="feature_spoc">产品名称：<span class="blue_color">'
												+ value.orderContent
												+ '</span> <span class="float_right">点评时间：'
												+ value.commentTime
												+ '</span>'
												+ '<hr class="gray_hr" /><div class="comments_level_level"><strong class="star star'
												+ value.starLevel
												+ '"></strong> <span'
												+ ' class="span_comment"><em>景点</em><i>'
												+ value.siteScore
												+ '</i></span> <span'
												+ ' class="span_comment"><em>酒店</em><i>'
												+ value.hotelScore
												+ '</i></span> <span'
												+ ' class="span_comment"><em>服务</em><i>'
												+ value.serviceScore
												+ '</i></span> <span'
												+ ' class="span_comment"><em>交通</em><i>'
												+ value.trafficScore
												+ '</i></span></div>'
												+ '<div class="comments_level_content"><p>'
												+ value.commentContent
												+ '</p></div>';
										if (imgsHtml != '') {
											html += '<div class="comment_img_div"><div id="DB_gallery" class="DB_gallery">'
													+ '<div class="DB_imgSet" style="display: none;">'
													+ '<div class="DB_imgWin"><img src="" alt="" style="width:455px;height:320px"/>'
													+ '</div>'
													+ '<div class="DB_prevBtn"></div>'
													+ '<div class="DB_nextBtn"></div></div>'
													+ '<div class="DB_thumSet">'
													+ '<ul class="DB_thumMove">'
													+ imgsHtml
													+ '</ul><div class="DB_thumLine"></div>'
													+ '<div class="DB_prevPageBtn">'
													+ '<img src="img/prev_page.png" alt="上一页" />'
													+ '</div><div class="DB_nextPageBtn">'
													+ '<img src="img/next_page.png" alt="下一页" />'
													+ '</div></div></div><span class="stop text_color_blue">收起 <span class="icon_retract"></span></span></div>';
										}

										html += '<div class="comment_status">'
												+ '<ul>'
												+ '<li><span class="span_text ">赞 ('
												+ value.usefull
												+ ')</span></li>'
												+ '<li><span class="span_text ">踩 ('
												+ value.useless
												+ ')</span></li>'
												+ '<li><span class="span_text gray">已点评</span></li>'
												+ '</ul></div></div>';
									});
					$('#comments').html("已点评(" + size + ")");
					$('#finish_comments').append(html);
					$('#finish_comments').append('<div class="Pages" id="finishCommentPages"></div>');
					var pageHtml = fenye(page, pageCount,
							"getFinishCommentOrders");
					$('#finishCommentPages').html(pageHtml);
				},
				complete : function() {
					var oHead = document.getElementsByTagName('HEAD').item(0);

					var oScript = document.createElement("script");
					oScript.type = "text/javascript";
					oScript.src = "js/pages/personal/frame/jquery.DB_gallery.js";
					oHead.appendChild(oScript);
					// 显示上传图片 结束
					$('.DB_gallery').DB_gallery({
						thumWidth : 84,
						thumGap : 8,
						thumMoveStep : 5,
						moveSpeed : 300,
						fadeSpeed : 500
					});
					// 显示评论图片 开始
					$(".stop").click(function() {
						$(this).prev().find(".DB_imgSet").fadeOut(1000);
						$(this).fadeOut();
						$(".photo").show();
					});

					$(".DB_thumMove").click(function() {
						$(this).parent().parent().next().fadeIn();
						$(".photo").hide();
					});

					var $nphotoes = $(".DB_thumMove li").length;
					$(".n_photo").html($nphotoes);
					if ($nphotoes < 6) {
						$(".photo").hide();
					}

				},
				error : function(XMLResponse) {
					alert(XMLResponse.responseText);
				}
			});
}
/**
 * 分页组件
 * 
 * @param page
 *            页码
 * @param pageCount
 *            总页数
 * @param onclickEvent
 *            点击页码触发的请求事件
 * @returns {String} 组装好的分页模块html
 */
function fenye(page, pageCount, onclickEvent) {
	var next_page = (page < pageCount) ? (page + 1) : pageCount;
	var pre_page = (page > 1) ? (page - 1) : 1;

	var pageHtml = '<a href="javascript:void(0);" onclick="' + onclickEvent + '(' + pre_page
			+ ')" title="上一页" class="PrevPage">上一页</a>';
	for (var i = 1; i <= pageCount; i++) {
		if (page == i) {
			pageHtml += '<a href="javascript:void(0);" class="pagesel" style="background-color:#DF1A7A;color:white" id="orderPage'
					+ i
					+ '" onclick="'
					+ onclickEvent
					+ '('
					+ i
					+ ')">'
					+ i
					+ '</a>';
		} else {
			pageHtml += '<a href="javascript:void(0);" class="pagesel" id="orderPage' + i
					+ '" onclick="' + onclickEvent + '(' + i + ')">' + i
					+ '</a>';
		}
	}
	pageHtml += '<a href="javascript:void(0);" onclick="' + onclickEvent + '(' + next_page
			+ ')" title="下一页" class="NextPage">下一页</a>';
	return pageHtml;
}

/**
 * 手动调用js，评论星级创建，评论图片上传控件
 */
function usejs() {
	var oHead = document.getElementsByTagName('HEAD').item(0);

	var oScript = document.createElement("script");

	oScript.type = "text/javascript";
	oScript.src = "js/pages/personal/frame/examples.js";
	oHead.appendChild(oScript);

	var oScript1 = document.createElement("script");

	oScript1.type = "text/javascript";
	oScript1.src = "js/pages/personal/frame/jquery.barrating.js";
	oHead.appendChild(oScript1);

	var oScript2 = document.createElement("script");

	oScript2.type = "text/javascript";
	oScript2.src = "js/pages/personal/frame/zyFile.js";
	oHead.appendChild(oScript2);

	var oScript3 = document.createElement("script");

	oScript3.type = "text/javascript";
	oScript3.src = "js/pages/personal/frame/zyUpload.js";
	oHead.appendChild(oScript3);

	var oScript4 = document.createElement("script");

	oScript4.type = "text/javascript";
	oScript4.src = "js/pages/personal/frame/upFile.js";
	oHead.appendChild(oScript4);
}

// js获取项目根路径，如： http://localhost:8080/Qunawan
function getRootPath() {
	// 获取当前网址，如： http://localhost:8080/Qunawan/pages/index.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： Qunawan/pages/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8080
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/Qunawan
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht + projectName);
}
