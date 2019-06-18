/**
 * 联系人相关的js
 */
var constant_page;
//获取订单列表的ajax请求
$(document).ready(function() {
	//getContact();
});
// 获取常用联系人列表的ajax请求
function getContact(page) {
	if (page == null || page <= 0) {
		page = 1;
	}
	$
			.ajax({
				type : "POST",
				async : true,
				url : "mycontact.jhtml",
				data : {
					page : page,
					type : 'getContacts'
				},
				dataType : "json",

				// 成功返回调用的函数
				success : function(data) {
					$('#contactlist').empty(); // 清空resText里面的所有内容
					var html = '';
					var pageCount = 1;
					$
							.each(
									data,
									function(index, value) { // 解析出data对应的Object数组
										if (value.sex == true) {
											value.sex = '男';
										} else if (value.sex == false) {
											value.sex = '女';
										} else {
											value.sex = '不男不女';
										}
										pageCount = value.pageCount;
										html += '<tr id='
												+ value.id
												+ '><td>'
												+ value.name
												+ '</td><td>'
												+ value.phone
												+ '</td><td>身份证</td><td>'
												+ value.cardno
												+ '</td><td>'
												+ value.email
												+ '</td><td>'
												+ value.sex
												+ '</td><td>'
												+ value.birthday
												+ '</td><td>成人</td><td><a href="javascript:void(0);"'
												+ ' class="modify" onclick="modifyrow(this)">修改</a>'
												+ '<a href="javascript:void(0);"'
												+ ' class="delete" onclick="deleterow(this)">删除</a></td></tr>';
									});
					$('#contactlist').append(html);
					var pageHtml = fenye(page, pageCount, "getContact");
					$('#contactPages').html(pageHtml);
				},
				error : function(XMLResponse) {
					alert(XMLResponse.responseText)
				}
			});
}
// 开始新增联系人的ajax请求
function checkAddContact() {
	if (checkUsuallyT()) {
		$.ajax({
			type : "POST",
			async : true,
			url : "mycontact.jhtml",
			data : {
				c_name : $("#cnName").val(),
				c_email : $("#emails").val(),
				c_mobile : $("#phone").val(),
				c_cardno : $("#cardId").val(),
				c_sex : $("#c_sex").val(),
				c_sel_year : $("#sel_year").val(),
				c_sel_month : $("#sel_month").val(),
				c_sel_day : $("#sel_day").val(),
				type : 'saveContact'
			},
			dataType : "text",

			// 成功返回调用的函数
			success : function(data) {
				//getContact(constant_page);
				 location.reload();
			},
			error : function(XMLResponse) {
				alert(XMLResponse.responseText);
			},
			complete:function(){
				$('.tourist').hide();
			}
		});
	}
}

// 开始更新联系人的ajax请求
function checkUpdateContact(page) {
	
	var t1 =  constant_page;
	var t2 =  modifyId;
	var t3 =  $("#cnName").val();
	var t4 =  $("#emails").val();
	var t5 =  $("#phone").val();
	var t6 =  $("#cardId").val();
	var t7 =  $("#c_sex").val();
	var t8 =  $("#sel_year").val();
	var t9 =  $("#sel_month").val();
	var t10 =  $("#sel_day").val();
	
	if (checkUsuallyT()) {
		$
				.ajax({
					type : "POST",
					async : true,
					url : "mycontact.jhtml",
					data : {
						page : constant_page,
						c_id : modifyId,
						c_name : $("#cnName").val(),
						c_email : $("#emails").val(),
						c_mobile : $("#phone").val(),
						c_cardno : $("#cardId").val(),
						c_sex : $("#c_sex").val(),
						c_sel_year : $("#sel_year").val(),
						c_sel_month : $("#sel_month").val(),
						c_sel_day : $("#sel_day").val(),
						type : 'editContact',
					},
					dataType : "text",

					// 成功返回调用的函数
					success : function(data) {
						//getContact(constant_page);
						 location.reload();
					},
					error : function(XMLResponse) {
						$('#volidate_message').html(XMLResponse.responseText)
					},
					complete:function(){
						$('.tourist').hide();
					}
				});
	}
}

// 开始删除联系人的ajax请求
function deleteContact() {
	$.ajax({
		type : "POST",
		async : true,
		url : "mycontact.jhtml",
		data : {
			c_id : deleteId,
			type : 'deleteContact'
		},
		dataType : "text",
		// 成功返回调用的函数
		success : function(data) {
			if (data == "fail") {
				alert("当前用户在订单中已绑定，暂时不能删除!!!");
			} else {
				//getContact(constant_page);
				location.reload();
				return true;
			}
		},
		error : function(XMLResponse) {
			alert("Error!!!");
			return false;
		}
	});
}
//分页组件
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