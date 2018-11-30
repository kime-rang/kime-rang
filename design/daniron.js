$(function(){

	var ht = $(window).height();
	$('article').height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on('resize',function(){
		var ht = $(window).height();
		$('article').height(ht);
	});

	//article 위에서 마우스 휠을 움직이면
  		$('article').on('mousewheel', function(event, delta){
  		if(delta > 0){//마우스 휠을 올렷을 때
  			//현재 article의 이전 article의 상단의 위치로
  			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리
  			var prev = $(this).prev().offset().top;
  			$('html, body').stop().animate({'scrollTop':prev },1000, 'easeOutBack');
  		} else if (delta < 0) {//마우스 휠을 내렸을 때
  			var next = $(this).next().offset().top;
  			$('html, body').stop().animate({'scrollTop':next},1000, 'easeOutBack');
  		}
  	});

	//해당 탭을 누르면 이미지 확대
	$('#image1').click(function(){
		$('#image2,#image3,#image4').removeClass();
		$('#image1').addClass('on');
		$('.macaronimg img').attr(
			'src','../img/daniron/macaron1.png');
	});
	$('#image2').click(function(){
		$('#image1,#image3,#image4').removeClass();
		$('#image2').addClass('on');
		$('.macaronimg img').attr(
			'src','../img/daniron/macaron2.png');
	});
	$('#image3').click(function(){
		$('#image1,#image2,#image4').removeClass();
		$('#image3').addClass('on');
		$('.macaronimg img').attr(
			'src','../img/daniron/macaron3.png');
	});
	$('#image4').click(function(){
		$('#image1,#image2,#image3').removeClass();
		$('#image4').addClass('on');
		$('.macaronimg img').attr(
			'src','../img/daniron/macaron4.png');
});

});