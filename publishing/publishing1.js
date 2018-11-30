$(function(){
	
	//높이 값은 변하는 값으로 고정 값을 가지지 않는다
	var bHt = $(window).height();//브라우저 가지는 높이값
	var nt = $('nav').height();
	var ht = bHt-nt;
	$('article').height(ht);//nav의 높이 값 = 브라우저의 높이값 - 푸터의 높이값	

	//윈도우 창크기가 변경되도 자동으로 nav의 높이값이 변경
	//nav의 높이 값 = 브라우저의 높이 값 - 푸터의 높이 값
	$(window).resize(function(){
		ht = $(window).height() - $('nav').height();
		$('article').height(ht)
	});



	//내비게이션의 메뉴 클릭시 해당 페이지로 이동
	$('#gnb li').on('click', function(){
		var ht = $(window).height();//브라우저의 높이값 저장 = article의 높이값
		var idx = $(this).index();//각각의 메뉴의 인덱스 번호를 저장

		var articleT = ht * idx;//현재 박스의 스크롤 위치값
		$('html, body').stop().animate({'scrollTop':articleT}, 1000);
	});
		

		//스크롤 될 때마다 해당 페이지의 메뉴 인식
  		 $(window).on("scroll", function(){
  		    var ht = $(window).height();
  		    var scroll = $(window).scrollTop();
  	

      for(var i=0; i<4; i++){//0~3까지 1씩 증가
      	if(scroll>=ht*i && scroll<ht*(i+1)){
      		$('#gnb li').removeClass();
      		$('#gnb li').eq(i).addClass('on');
      		}
     	}
	});
  	$('article').on('mousewheel', function(event, delta){
  		if(delta > 0){
  			var prev = $(this).prev().offset().top;
  			$('html, body').stop().animate({'scrollTop':prev },1000, 'easeOutBack');
  		} else if (delta < 0) {//마우스 휠을 내렸을 때
  			var next = $(this).next().offset().top;
  			$('html, body').stop().animate({'scrollTop':next},1000, 'easeOutBack');
  		}
  	});
  	$(function(){
  	  var swiper = new Swiper ('article', {
  	 //자동 슬라이드
  	 autoplay: {
 	   delay: 1000,
 	 }
 	});
});
});