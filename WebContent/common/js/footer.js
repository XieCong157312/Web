$(function(){
	//用于显示底部商标的循环方法
	var x = -200;
	var y = -50;
	var row = 0;
	var col = 0;
    $(".end_base ul.ico li.i").each(function(e){
		row = parseInt(e/4);
		col = e%4;
		var p_x = -200;
		var p_y = -50;
		p_x = p_x - 100 * col;
		p_y = p_y - 39 * row;
		var position = p_x+"px "+p_y+"px";
		$(this).css("background-position",position);
	})
})