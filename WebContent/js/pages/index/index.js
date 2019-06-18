/* 左侧定位组件根据当前页面滚动位置自动更新相应状态【START】 */
function Active(e){
	$(e).addClass("active");
}
function LastActive(e){
	$(e).addClass("last active")
}
function UnActive(e){
	$(e).removeClass("active");
}
window.onscroll = function(){
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var top_div = document.getElementById( "nav-right" );

	if( t >= 50 ) {
		top_div.style.display = "block";
	} else {
		top_div.style.display = "none";
	}
	if(t>=50){
		Active("#dd");
		UnActive("#zj");
		UnActive("#gn");
		UnActive("#jw");
	}
	if(t>=getY(2)){
		Active("#zj");
		UnActive("#dd");
		UnActive("#gn");
		UnActive("#jw");
	}
	if(t>=getY(3)-100){
		Active("#gn");
		UnActive("#dd");
		UnActive("#zj");
		UnActive("#jw");
	}
	if(t>=getY(4)-200){
		LastActive("#jw");
		UnActive("#dd");
		UnActive("#zj");
		UnActive("#gn");
	}
}
function getY(e){
	var y1 = document.getElementById(e);
	y1 = y1.offsetTop;
	return y1;
}
/* 左侧定位组件根据当前页面滚动位置自动更新相应状态【END】 */

/**
 * 提交搜索表单
 */
function submitForm(){
	$("#searchForm").submit();
}

/* 点击更多行程类型选项进行搜索 */
$(".public-tit a.public-tit-more").click(function(){
	$("#triptype").val($(this).text().substring(2));
	submitForm();
});

/* 点击自驾游的景点进行搜索 */
$("#2 .navigation-table.nplace td").click(function(){
	$("#triptype").val("自驾游");
	$("#theme").val("");
	$("#place").val($(this).text());
	submitForm();
});

/* 点击国内游的景点进行搜索 */
$("#3 .navigation-table.nplace td").click(function(){
	$("#triptype").val("国内游");
	$("#theme").val("");
	$("#place").val($(this).text());
	submitForm();
});

/* 点击出境游的景点进行搜索 */
$("#4 .navigation-table.nplace td").click(function(){
	$("#triptype").val("出境游");
	$("#theme").val("");
	$("#place").val($(this).text());
	submitForm();
});

/* 点击自驾游的主题进行搜索 */
$("#2 .navigation-table.ntheme td").click(function(){
	$("#triptype").val("自驾游");
	$("#place").val("");
	$("#theme").val($(this).text());
	submitForm();
});

/* 点击国内游的主题进行搜索 */
$("#3 .navigation-table.ntheme td").click(function(){
	$("#triptype").val("国内游");
	$("#place").val("");
	$("#theme").val($(this).text());
	submitForm();
});

/* 点击出境游的主题进行搜索 */
$("#4 .navigation-table.ntheme td").click(function(){
	$("#triptype").val("出境游");
	$("#place").val("");
	$("#theme").val($(this).text());
	submitForm();
});