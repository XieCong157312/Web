$(function(){
	/**
	 * 页面初始化时最多只显示四个筛选栏
	 */
	var init = function(){
		$(".body .option").each(function(e){
			if(e>3)
				$(this).hide();
		});
	};
	
	/**
	 * 是否显示筛选栏右下角的更多筛选条件的下拉按钮
	 */
	var showCondition = function(){
		var total = $(".body .option").length;
		var del = $(".body .del").length;
	
		if(total - del <= 4)
			$(".filter_box .tail .condition").hide();
		else
			$(".filter_box .tail .condition").show();
	};
	var showAll = function(){
		$(".body .option").each(function(){
			if(!$(this).hasClass("del"))
				$(this).show();
		});
	};
	var showPart = function(){
		var num = 0;
		$(".body .option").each(function(){
			$(this).hide();
			if(!$(this).hasClass("del")){
				num++;
				if(num<=4)
					$(this).show();
			}
		});
	};

	init();
	showCondition();

	/* 判断是否显示单项筛选条件的【更多(↓)】 */
	$(".body .ddlist").each(function(){
		var lastIndex = $(this).find("dd").css("height").length-2;
		var height = $(this).find("dd").css("height").substring(0,lastIndex);
		if(height > 50){
			$(this).next().show();
		}
	});

	/* 收起或展开所有筛选条件 */
	$(".filter_box .tail .condition").click(function(){
		var e = $(this);
		e.hide();
		if(e.hasClass("condition_down")){
			$(".condition_up").show();
			showAll();
		}else{
			$(".condition_down").show();
			showPart();
		}
	});

	/* 收起或展开单项筛选条件 */
	$(".filter_box .body a.more").click(function(){
		var o = $(this);
		if(o.hasClass("more_y")){
			$(this).prev().css("max-height",$(this).prev().find("dd").css("height"));
			$(this).html("收起<i class=\"arrow_up\"></i>");
			$(this).removeClass("more_y");
			$(this).addClass("more_n");
		}else{
			$(this).prev().css("max-height","50px");
			$(this).html("更多<i class=\"arrow_down\"></i>");
			$(this).removeClass("more_n");
			$(this).addClass("more_y");
		}
	});

	/* 【更多(↓)的hover变色】 */
	$(".filter_box .body a.more").hover(function(){
		$(this).css("color","#F90");
		var o = $(this);
		if(o.hasClass("more_y"))
			$(this).find("i.arrow_down").css("border-color","#F90 #fff #fff")
		else
			$(this).find("i.arrow_up").css("border-color","#fff #fff #F90 #fff");
	}, function(){
		$(this).css("color","#999");
		var o = $(this);
		if(o.hasClass("more_y"))
			$(this).find("i.arrow_down").css("border-color","#999 #fff #fff");
		else
			$(this).find("i.arrow_up").css("border-color","#fff #fff #999 #fff");
	});
	
	/* 点击按价格排序按钮的排序规则 */
	$(".main_l .sort .price").click(function(){
		$("#cur_sort_str").val("price");
		if($(this).find("i").hasClass("sort_down"))
			$("#price_sort").val("asc");
		else
			$("#price_sort").val("desc");
		submitForm("searchForm");
	});
	
	/* 点击按好评率排序按钮的排序规则 */
	$(".main_l .sort .comment").click(function(){
		$("#cur_sort_str").val("comment");
		if($(this).find("i").hasClass("sort_down"))
			$("#good_rate_sort").val("asc");
		else
			$("#good_rate_sort").val("desc");
		submitForm("searchForm");
	});
	
	/* 点击导航栏链接跳转 */
	$(".navigation a.atype.live").click(function(){
		if($(this).text().trim()=="所有产品"){
			$("#triptype").val("");
			$("#place").val("");
			$("#start_place").val("");
			$("#theme").val("");
			$("#traffic").val("");
			$("#time").val("");
			$("#min_price").val("");
			$("#max_price").val("");
			$("#search_key").val("");
		}else{
			$("#triptype").val($(this).text());
			$("#place").val("");
			$("#start_place").val("");
			$("#theme").val("");
			$("#traffic").val("");
			$("#time").val("");
			$("#min_price").val("");
			$("#max_price").val("");
			$("#search_key").val("");
		}
		submitForm("searchForm");
	});
	
	/* 点击行程类型选项进行筛选 */
	$("li.vo_type").click(function(){
		if($(this).text()=="全部")
			$("#triptype").val("");
		else
			$("#triptype").val($(this).text());
		submitForm("searchForm");
	});
	
	/* 点击景点地区选项进行筛选 */
	$("a.vo_place").click(function(){
		if($(this).text()=="全部")
			$("#place").val("");
		else
			$("#place").val($(this).text());
		submitForm("searchForm");
	});
	
	/* 点击出发地选项进行筛选 */
	$("a.vo_start").click(function(){
		if($(this).text()=="全部")
			$("#start_place").val("");
		else
			$("#start_place").val($(this).text());
		submitForm("searchForm");
	});
	
	/* 点击主题选项进行筛选 */
	$("a.vo_theme").click(function(){
		if($(this).text()=="全部")
			$("#theme").val("");
		else
			$("#theme").val($(this).text());
		submitForm("searchForm");
	});
	
	/* 点击交通工具选项进行筛选 */
	$("a.vo_traffic").click(function(){
		if($(this).text()=="全部")
			$("#traffic").val("");
		else
			$("#traffic").val($(this).text());
		submitForm("searchForm");
	});
	
	/* 点击行程天数选项进行筛选 */
	$("a.vo_time").click(function(){
		if($(this).text()=="全部")
			$("#time").val("");
		else
			$("#time").val($(this).text().substring(0,$(this).text().indexOf("天")));
		submitForm("searchForm");
	});
	
	/* 清除所有筛选条件 */
	$("a.close_all").click(function(){
		$("#triptype").val("");
		$("#place").val("");
		$("#start_place").val("");
		$("#theme").val("");
		$("#traffic").val("");
		$("#time").val("");
		$("#min_price").val("");
		$("#max_price").val("");
		$("#search_key").val("");
		$("#price_sort").val("");
		$("#good_rate_sort").val("");
		$("#cur_sort_str").val("");
		submitForm("searchForm");
	});
	
	/* 输入价格区间进行筛选 */
	$("a.price_submit").click(function(){
		submitForm("searchForm");
	});
	
	/* 清除单个筛选项 */
	$("a.request_close").click(function(){
		var title = $(this).parent().text().substring(0,$(this).parent().text().indexOf("："));
		if(title == '地区')
			$("#place").val('');
		if(title == '出发地')
			$("#start_place").val('');
		if(title == '主题')
			$("#theme").val('');
		if(title == '交通工具')
			$("#traffic").val('');
		if(title == '天数')
			$("#time").val('');
		if(title == '价格'){
			$("#min_price").val('');
			$("#max_price").val('');
		}
		submitForm("searchForm");
	});
});

/**
 * 价格输入框验证
 * 只能输入数字和退格键
 */
function validNum(){
	if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)||(event.keyCode == 8)))
    event.returnValue=false;	
};

/**
 * 提交筛选表单
 * @param form 表单id
 */
function submitForm(form){
	$("#"+form).submit();
}

/**
 * 提交筛选表单，添加翻页参数
 * @param form 表单id
 * @param pageCurrent 当前页码
 */
function submitFormByPage(form,pageCurrent){
	$("#pageCurrent").val(pageCurrent);
	submitForm(form);
}