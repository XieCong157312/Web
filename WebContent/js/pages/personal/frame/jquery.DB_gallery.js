;(function($){
$.fn.DB_gallery=function(options){
	var opt={
		thumWidth:86,
		thumGap:8,
		thumMoveStep:5,
		moveSpeed:300,
		fadeSpeed:300,
		end:''
	}

	$.extend(opt,options);
	return this.each(function(){
		var $this=$(this);
		var $imgSet=$this.find('.DB_imgSet');
		var $imgWin=$imgSet.find('.DB_imgWin');
		var $page=$this.find('.DB_page');
		var $pageCurrent=$page.find('.DB_current');
		var $pageTotal=$page.find('.DB_total');
		var $thumSet=$this.find('.DB_thumSet');
		var $thumMove=$thumSet.find('.DB_thumMove');
		var $thumList=$thumMove.find('li');
		var $thumLine=$this.find('.DB_thumLine');
		var $nextBtn=$this.find('.DB_nextBtn');
		var $prevBtn=$this.find('.DB_prevBtn');
		var $nextPageBtn=$this.find('.DB_nextPageBtn');
		var $prevPageBtn=$this.find('.DB_prevPageBtn');
		var $stop=$this.find('.stop');

		var $in =$this.find('.in');

		var objNum=$thumList.length;
		var currentObj=0;
		var fixObj=0;
		var currentPage=0;
		var totalPage=Math.ceil(objNum/opt.thumMoveStep);
		var oldImg;

		init();

		function init(){

			setInit();
			setMouseEvent();
			changeImg();

		}

		$stop.click(function(){
			$thumSet.fadeIn();

		});





		function setInit(){
			$thumMove.append($thumLine.get());
		}


		function setMouseEvent(){

			$thumMove.bind('click',function(e){
				$imgSet.show();
			});





			$thumList.bind('click',function(e){
				e.preventDefault();
				currentObj=$(this).index();
				changeImg();

			});

			$nextBtn.bind('click',function(){
				currentObj++;
				changeImg();
				currentPage=totalPage-1>=Math.floor(currentObj/opt.thumMoveStep)?Math.floor(currentObj/opt.thumMoveStep):currentPage;
				moveThum();

			});
			$prevBtn.bind('click',function(){
				currentObj--;
				changeImg();
				currentPage=Math.floor(currentObj/opt.thumMoveStep);
				moveThum();
			});
			$nextPageBtn.bind('click',function(){
				currentPage++;
				moveThum();
			});
			$prevPageBtn.bind('click',function(){
				currentPage--;
				moveThum();
			});


		}


		function moveThum(){
			var pos=((opt.thumWidth+opt.thumGap)*opt.thumMoveStep)*currentPage;
			$thumMove.animate({'left':-pos},opt.moveSpeed);

			setVisibleBtn();
		}


		function setVisibleBtn(){
			$prevPageBtn.show();
			$nextPageBtn.show();
			$prevBtn.show();
			$nextBtn.show();
			if(currentPage==0)$prevPageBtn.hide();
			if(currentPage==totalPage-1)$nextPageBtn.hide();
			if(currentObj==0)$prevBtn.hide();
			if(currentObj==objNum-1)$nextBtn.hide();
			if(objNum < 4){$prevPageBtn.hide();$nextPageBtn.hide(); }
		}


		function changeImg(){

			if(oldImg!=null){

				$imgWin.css('background','');
			}

			var $thum=$thumList.eq(currentObj);
			var _src=oldImg=$thum.find('a').attr('href');
			$imgWin.find('img').hide().attr('src',_src).fadeIn(opt.fadeSpeed);
			oldImg=_src


			$thumLine.css({'left':$thum.position().left})

			$pageCurrent.text(currentObj+1);
			$pageTotal.text(objNum);
			
			setVisibleBtn();
		}
	})
}
})(jQuery)