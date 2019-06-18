/**
 * 搜索框获焦事件
 */
$("#head_search").focus(function(e) {
	if ($("#head_search").val()=="景点、主题和标题名称"){
    	$("#head_search").val("");
	}
});
/**
 * 搜索框去焦事件
 */
$("#head_search").blur(function(e) {
	if ($("#head_search").val()==""){
		$("#head_search").val("景点、主题和标题名称");
	}
});

/* 横向菜单的hover事件【BEGIN】 */
$("#menu1").hover(function(e) {
	$(this).addClass("bgcolor");
	Show("detail1");
});
$("#menu1").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
});
$("#menu_div1").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
    Hide("detail1");
});
$("#menu2").hover(function(e) {
	$(this).addClass("bgcolor");
	Show("detail2");
});
$("#menu2").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
});
$("#menu_div2").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
    Hide("detail2");
});
$("#menu3").hover(function(e) {
	$(this).addClass("bgcolor");
	Show("detail3");
});
$("#menu3").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
});
$("#menu_div3").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
    Hide("detail3");
});
$("#menu4").hover(function(e) {
	$(this).addClass("bgcolor");
	Show("detail4");
});
$("#menu4").mouseleave(function(e) {
	$(this).removeClass("bgcolor");
});
$("#menu_div4").mouseleave(function(e) {
    Hide("detail4");
});
/* 横向菜单的hover事件【END】 */

/**
 * 显示某id值的容器
 * @param e1 id值
 */
function Show(e1){
	document.getElementById(e1).style.display="block";
}
/**
 * 隐藏某id值的容器
 * @param e2 id值
 */
function Hide(e2){
	document.getElementById(e2).style.display="none";
}

/**
 * 顶部微信部分hover事件
 */
$(".top_link a.wx").hover(function(){
	$(this).find("i").css("background-position", "-20px -90px")
}, function(){
	$(this).find("i").css("background-position", "0px -90px")
});

/**
 * 顶部微博部分hover事件
 */
$(".top_link a.wb").hover(function(){
	$(this).find("i").css("background-position", "-20px -110px")
}, function(){
	$(this).find("i").css("background-position", "0px -110px")
})

/**
 * 顶部个人中心部分的hover事件
 */
$("#person").hover(function(){
	$("#person .personlist").show();
}, function(){
	$("#person .personlist").hide();
});

/**
 * 顶部个人中心部分的hover事件
 */
$("#person .personlist").hover(function(){
	$("#this").show();
}, function(){
	$("#this").hide();
});

/**
 * 个人中心列表项的hover事件
 */
$(".p_ul li").hover(function(){
	$(this).css("color","orange");
}, function(){
	$(this).css("color","black");
});

/**
 * 搜索框的hover事件
 */
$("#product li").hover(function(){
	$(this).css("background","#fef2f9");
}, function(){
	$(this).css("background","white");
});
/**
 * 搜索框——行程类型的点击事件
 */
$("#product").click(function(event){
	$("#setout .dropdownlist").hide();
	var flag = $("#product .dropdownlist").css("display");
	if(flag == 'block')
		$("#product .dropdownlist").hide();
	else
		$("#product .dropdownlist").show();
	event.stopPropagation();
});

/**
 * 搜索框——出发地的点击事件
 */
$("#setout").click(function(event){
	$("#product .dropdownlist").hide();
	var flag = $("#setout .dropdownlist").css("display");
	if(flag == 'block')
		$("#setout .dropdownlist").hide();
	else
		$("#setout .dropdownlist").show();
	event.stopPropagation();
});

/**
 * 点击页面其他地方时隐藏搜索框下拉列表
 */
$(document).click(function(){
	$(".dropdownlist").hide();
});

/**
 * 搜索框——行程类型项的选中点击事件
 */
$(".products li").click(function(){
	$("#head_triptype").attr("value",$(this).find("span").text());
	$("#product").find("span").eq(0).text($(this).find("span").text());
});

/**
 * 搜索框——出发地项的选中点击事件
 */
$(".citys li span").click(function(){
	$("#head_start_place").attr("value",$(this).text());
	$("#setout").find("span").eq(0).text($(this).text());
});

/**
 * 点击搜索提交搜索表单
 */
$("#search_btn").click(function(){
	if($("#head_search").val() == "景点、主题和标题名称")
		$("#head_search").val("");
	$("#headSearchForm").submit();
});

/**
 * 点击横向菜单提交搜索表单
 */
$(".menu .head-live").click(function(){
	$("#head_triptype").val($(this).text());
	if($("#head_search").val() == "景点、主题和标题名称")
		$("#head_search").val("");
	$("#headSearchForm").submit();
});

/**
 * 返回首页的方法
 * @param project 当前项目根路径
 */
function toIndex(url){
	document.location.href = url;
}