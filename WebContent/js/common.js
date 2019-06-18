/**
 * easyui datagrid表格长文本格式化
 * @param value 单元格值
 * @param data 行数据
 * @param index 索引
 * @returns
 */
function longTextFormatter(value, data, index) {
    if (value) {
        return "<span title='" + value + "'>" + value + "</span>";
    }
    return value;
}


function sexFormatter(value, data, index) {
    if (value=="0") {
        return "女";
    }
    return "男";
}

function sdewFormatter(value, data, index) {
	    if (value=="0") {
        return "无";
    }
    if(value=="1"){
    return "车辆 损失";
}
    if(value=="2"){
    	 return "第三者责任";
    }
    if(value=="3"){
    	return "车辆损失、第三者责任";
    }
}


/**
 * easyui datagrid表格数值格式化, 保留两位小数
 * @param value 单元格值
 * @param data 行数据
 * @param index 索引
 * @returns 
 */
function currencyFormatter(value, data, index) {
    if (value == null) {
        return "";
    }
    var s = value + "";
    var s1 = s;
    var s2 = "";
    var dpos = s.indexOf(".");
    if (dpos >= 0) {
        s1 = s.substring(0, dpos);
        s2 = s.substring(dpos + 1, s.length);
    }
    var p = /(\d+)(\d{3})/;
    while (p.test(s1)) {
        s1 = s1.replace(p, "$1,$2");
    }
    for (var i = s2.length; i < 2; i ++) {
    	s2 += "0";
    }
    return s1 + "." + s2;
}

//删除表格选中数据
function delGrid($table, url, callback) {
  var selected = $table.datagrid('getSelected');
  if(selected != null) {
      $.messager.confirm('提示', '确定要删除吗？', 
              function(b) {
                  if(b) {
                      $.ajax({
                          type: "post",
                          url: url,
                          dataType: "json",
                          success: function(data) {
                              if(data.status == "success"){
                                  $.messager.alert("提示", "删除成功", 'info');
                                  //刷新表格数据
                                  $table.datagrid('clearSelections');
                                  $table.datagrid('clearChecked');
                                  $table.datagrid('reload');
                                  if (callback) {
                                	  try {
                                		  callback();
                                	  } catch (e) {
									  }
                                  }
                              } else {
                                  $.messager.alert("提示", data.msg ,'info');
                              }
                          },
                          error: function(xml, e) {
                              $.messager.alert("处理失败", "状态: " + xml.status + "\n信息: " + e ,'error');
                          }
                      });
                  }
              }
      );
  }
}

//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外  
function banBackSpace(e) {
	var ev = e || window.event;//获取event对象     
	var obj = ev.target || ev.srcElement;//获取事件源     

	var t = obj.type || obj.getAttribute('type');//获取事件源类型    

	//获取作为判断条件的事件类型  
	var vReadOnly = obj.getAttribute('readonly');
	var vEnabled = obj.getAttribute('enabled');
	//处理null值情况  
	var bReadOnly = vReadOnly != null && vReadOnly != "";
	var bEnabled = vEnabled == null;

	//当敲Backspace键时，事件源类型为密码或单行、多行文本的，  
	//并且readonly属性为true或enabled属性为false的，则退格键失效  
	var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (bReadOnly || !bEnabled);

	//当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效  
	var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";

	//判断  
	if (flag2) {
		return false;
	}
	if (flag1) {
		return false;
	}
}

//禁止后退键 作用于Firefox、Opera  
document.onkeypress = banBackSpace;
//禁止后退键  作用于IE、Chrome  
document.onkeydown = banBackSpace;




//此处是personal页面相关js
$(document).ready(function(e) {




	$("a[class=wenhao]").hover(function(){
		$(this).tooltip('show')
		},function(){
			$(this).tooltip('hide')
			});

	$(".pagebox a").each(function() {
		var num = parseInt($(this).html());
		if(isNaN(num))
			return;
		if(num > 9) {
			$(this).css("padding-left","4px");
			$(this).css("padding-right","4px");
		}
	});
	dobuttons();

	//搜索框特效
	$("input[id^='ass-search']").focus(function(){
		$(this).removeClass("ass-search");
		$(this).addClass("ass-search_focus");
		$(this).parent().find("input[id^='ass-submit']").removeClass("ass-submit");
		$(this).parent().find("input[id^='ass-submit']").addClass("ass-submit_focus");
	});

	$("input[id^='ass-search']").blur(function(){
		if($(this).val().trim() != "")
			return;
		$(this).removeClass("ass-search_focus");
		$(this).addClass("ass-search");
		$(this).parent().find("input[id^='ass-submit']").removeClass("ass-submit_focus");
		$(this).parent().find("input[id^='ass-submit']").addClass("ass-submit");
		$(this).val("");
	});

	$("input[id^='ass-submit']").hover(function(){
			$(this).removeClass("ass-submit");
			$(this).addClass("ass-submit_focus");
			$(this).parent().find("input[id^='ass-search']").removeClass("ass-search");
			$(this).parent().find("input[id^='ass-search']").addClass("ass-search_focus");
		},
		function(){
			if($(this).parent().find("input[id^='ass-search']").is(":focus"))
				return;
			$(this).removeClass("ass-submit_focus");
			$(this).addClass("ass-submit");
			$(this).parent().find("input[id^='ass-search']").removeClass("ass-search_focus");
			$(this).parent().find("input[id^='ass-search']").addClass("ass-search");
		}
	);

});



function dobuttons() {
	$("button font[class=current]").each(function(){
		   var ss=$(this).attr("width");
		   if(ss && $(this).width()>10)
		   {
			var u=ss-$(this).width();
			if(u>1)
			{
			$(this).css("padding-right",u+"px");
			}
			$(this).attr("width",'');
		   }
		   var se=$(this).parent("button").width();
		   $(this).parent("button").next("ul").children("li").width(se+13);
		});

}



/* =================== 头像、计划图片上传通用JS =================== */
/**
 * 将本地图片 显示到浏览器上
 */
function preImg(sourceId) {

	if(!isNormalPic())
		return;
	//每次利用空间显示数据时初始化jcrop控件
	if(typeof(jcrop_api) != "undefined") {
		jcrop_api.destroy();
		$("#target").removeAttr("style");
	}
	//获得图片的保存路径
	var url = getFileUrl(sourceId);
	//显示经过等比缩放后的大图
	$("#target").attr("src",url);
	//显示用户默认框选等比缩放预览图
	$("#litte_pre").attr("src",url);
	//保存没有缩放后的图片
	$('#org_file').attr("src",url);
	//裁剪空间初始化
	init_Jcrop();
}


//初始化Jcrop控件
function init_Jcrop() {

	$('#target').Jcrop({
		onChange: updatePreview,
		onSelect: updatePreview,
		aspectRatio: xsize / ysize,
		allowSelect:false
	}, function () {
		var bounds = this.getBounds();
		boundx = bounds[0];
		boundy = bounds[1];
		jcrop_api = this;
		jcrop_api.animateTo([0, 0, 200, 200]);
		//
		$('#ratio').val($('#org_file').width() / boundx);
	});
}


//获得图片的保存路径
function getFileUrl(sourceId) {
	var url;
	if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
		url = document.getElementById(sourceId).value;
	} else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	} else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	}

	return url;
}



//更新小预览图
function updatePreview(c){

	if (parseInt(c.w) > 0) {
		var rx = xsize / c.w;
		var ry = ysize / c.h;

		$pimg.css({
			width: Math.round(rx * boundx) + 'px',
			height: Math.round(ry * boundy) + 'px',
			marginLeft: '-' + Math.round(rx * c.x) + 'px',
			marginTop: '-' + Math.round(ry * c.y) + 'px'
		});

		$('#x1').val(c.x);
		$('#y1').val(c.y);
		$('#x2').val(c.x2);
		$('#y2').val(c.y2);
		$('#w').val(c.w);
		$('#h').val(c.h);
	}
};



//验证文件类型与文件大小
function isNormalPic(){

	var fileName = document.getElementById("imgOne").value;

	if(fileName.trim() == "")
		return false;

	var fileSize = document.getElementById('imgOne').files[0].size;

	var str = fileName.substring(fileName.lastIndexOf("\\")+1);
	var end = str.substring(str.indexOf(".")+1);
	if(fileName !=null && (end.toLowerCase() != "png" && end.toLowerCase() != "jpg" && end.toLowerCase() != "gif")){
		alert("头像目前只支持(PNG、GIF、JPG)");
		return false;
	}

	if(fileSize > 2 * 1024 * 1024) {
		alert("上传文件不能超过(2Mb)");
		return false;
	}
	return true;
}
