/**
 * 我的订单相关js
 */

var timeid = new Array();
var startTime = new Array();
var createTime = new Array();
var states = new Array();
var totoalDays = new Array();
// 获取订单列表的ajax请求
$(document).ready(function() {
	//getOrders();
	time();//非ajax请求显示时间
});

function time(){
	var num=parseInt(($("#length").val()));
	//alert($.type(num));
	// 存储数据，用于倒计时时调用
	for(var key=0;key<num;key++){
		timeid[key] = $("#timeid"+key).val();
		startTime[key] = $("#start_time"+key).val();
		createTime[key] = $("#create_time"+key).val();
		states[key] = $("#keying"+key).val();
		totoalDays[key] = $("#totaldays"+key).val();
	}

		// 配置倒计时Timer
		for (var i = 0; i < timeid.length; i++) {
			// 获取倒计时组件id，也是订单编号
			var id = timeid[i];
			var time = null;
			// 如果状态是待付款，则24h过期
			if (states[i] == "0") {
				// 获取当前订单创建的时间
				time = new Date(createTime[i].substring(0,
						createTime[i].length - 2)
						.replace(/-/g, "/"));
				time = time.getTime() + 24 * 60 * 60 * 1000;
				myInterval(time, id);
				// 如果是待出行状态
			} else if (states[i] == "1") {
				// 获取当前订单开始的时间
				time = new Date(startTime[i].replace(/-/g, "/"));
				time = time.getTime();
				myInterval(time, id);
				// 如果是游玩中状态
			} else if (states[i] == "2") {
				// 获取当前订单开始的时间
				time = new Date(startTime[i].replace(/-/g, "/"));
				time = time.getTime() + totoalDays[i] * 24 * 60
						* 60 * 1000;
				myInterval(time, id);
			}
		}
}


function getOrders(page) {
	if (page == null || page <= 0) {
		page = 1;
	}
	$
			.ajax({
				type : "POST",
				async : true,
				url : "myorder.jhtml",
				data : {
					page : page,
					type : 'getOrders',
				},
				dataType : "json",

				// 成功返回调用的函数
				success : function(data) {
					var html = '<thead><tr class="col-name"><th class="product_name text_left">产品名称</th><th class="price">价格</th><th class="number">人数</th><th class="other">操作</th><th class="other">状态</th></tr><tr class="tr_width  margin-right5 text_left"><td colspan="5"><span class="text_color ">待出行的订单状态在出行日会自动更新为游玩中。如有疑问，请致电客服1010-6060咨询。</span></td></tr><tr class="sep-row"><td colspan="5"></td></tr></thead>';
					var stateText;
					var operaText;
					var operaUrl;
					var time;
					var pageCount = 1;
					$
							.each(
									data,
									// key为序号，item为OrderForm
									function(key, item) {
										pageCount = item.pageCount;
										stateText = item.state.value;
										
										if (item.state.keying == 0) {
											operaText = '付款';
											operaUrl = 'myorder.jhtml?type=showPayFor&id='
													+ item.orderid;
										} else if (item.state.keying == 1) {
											operaText = '退款';
											operaUrl = '#';
										} else if (item.state.keying == 3) {
											operaText = '评价';
											operaUrl = 'mycomment.jhtml?type=init';
										} else {
											operaText = '';
											operaUrl = '';
										}
										// 存储数据，用于倒计时时调用
										timeid[key] = item.orderno;
										startTime[key] = item.start_time;
										createTime[key] = item.create_time;
										states[key] = item.state.keying;
										totoalDays[key] = item.totalDays;

										item.create_time = (item.create_time)
												.substring(
														0,
														(item.create_time).length - 2);
										html += '<tbody><tr class="tr_width margin-right5  text_left"><td colspan="5"><label class="text_middle">订单号：</label><span '
												+ 'class="text_middle margin-right15">'
												+ item.orderno
												+ '</span><label '
												+ 'class="text_middle">&nbsp;&nbsp;&nbsp;时间：</label><span '
												+ 'class="text_middle margin-right15">'
												+ item.create_time
												+ '</span></td></tr><tr><td><p>'
												+ item.content
												+ '</p></td><td class="text_color_orange">'
												+ item.price
												+ '</td><td>'
												+ item.person_num
												+ '</td>'
												+ '<td><span class="text_color span_width"><span class="text_color span_width "><a class="text_color" href="'
												+ operaUrl
												+ '">'
												+ operaText
												+ '</a></span><br /><span class="text_color span_width"><a '
												+ 'href="'+getRootPath()+'/myorder.jhtml?type=initOrderDetail&order_id='
												+ item.orderid
												+ '"'
												+ 'target="view_window">订单详情</a></span></td>'
												+ '<td><span class="text_color span_width  ">'
												
												if(stateText=='待评价')
													html = html + '<a title="为了方便测试,付款后直接进入待评价状态" href="javascript:;">';
												else
													html = html + '<a href="javascript:;">';
										
										html = html + stateText
												+ '</a></span> <br />'
												+ '<span class="text_color_blue " id="'
												+ item.orderno
												+ '">'
												+ '</span></td>'
												+ '</tr><tr class="sep-row"><td colspan="5"></td></tr></tbody>';

									});
					$('#ordersTable').empty();
					$('#ordersTable').append(html);

					var pageHtml = fenye(page, pageCount, "getOrders");
					$('#ordersPages').html(pageHtml);

				},
				complete : function() {
					// 配置倒计时Timer
					for (var i = 0; i < timeid.length; i++) {
						// 获取倒计时组件id，也是订单编号
						var id = timeid[i];
						var time = null;
						// 如果状态是待付款，则24h过期
						if (states[i] == "0") {
							// 获取当前订单创建的时间
							time = new Date(createTime[i].substring(0,
									createTime[i].length - 2)
									.replace(/-/g, "/"));
							time = time.getTime() + 24 * 60 * 60 * 1000;
							myInterval(time, id);
							// 如果是待出行状态
						} else if (states[i] == "1") {
							// 获取当前订单开始的时间
							time = new Date(startTime[i].replace(/-/g, "/"));
							time = time.getTime();
							myInterval(time, id);
							// 如果是游玩中状态
						} else if (states[i] == "2") {
							// 获取当前订单开始的时间
							time = new Date(startTime[i].replace(/-/g, "/"));
							time = time.getTime() + totoalDays[i] * 24 * 60
									* 60 * 1000;
							myInterval(time, id);
						}
					}
				},
				error : function(XMLResponse) {
					alert(html(XMLResponse.responseText))
				}
			});
}
// 分页组件
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
// 设置每1s重复调用显示时间的方法
function myInterval(time, id) {
	setInterval(function() {
		getRTime(time, id);
	}, 1000);
}
function getRTime(time, id) {

	time = time - new Date().getTime();

	var day = Math.floor(time / 1000 / 60 / 60 / 24);
	var hour = Math.floor(time / 1000 / 60 / 60 % 24);
	var min = Math.floor(time / 1000 / 60 % 60);
	var sec = Math.floor(time / 1000 % 60);
	if (time <= 0) {
		var daojishi = "0天 0时 0分 0秒";
//		alert("刷新页面");
	} else {
		var daojishi = day + "天 " + hour + "时 " + min + "分 " + sec + "秒";
	}
	$('#' + id).html(daojishi);
}


//js获取项目根路径，如： http://localhost:8083/uimcardprj
function getRootPath() {
	// 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8083
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/uimcardprj
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht + projectName);
}
