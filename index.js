$(function(){
	var ht = $(window).height();
	$('article').height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on('resize',function(){
		var ht = $(window).height();
		$('article').height(ht);
	});
	$('#pf').hover(function(){
		$('#pf-img').toggle();
	})
	//마우스를 따라다니는 글자
	$(function () {
	var $bl = $(".head"),
        $th = $(".head div"),
        blW = $bl.outerWidth(),
        blSW = $bl[0].scrollWidth,
        wDiff = (blSW / blW) - 1, // widths difference ratio
        mPadd = 20, // Mousemove Padding
        damp = 20, // Mousemove response softness
        mX = 20, // Real mouse position
        mX2 = 0, // Modified mouse position
        posX = 0,
        mmAA = blW - (mPadd * 2), // The mousemove available area
        mmAAr = (blW / mmAA); // get available mousemove fidderence ratio

    $bl.mousemove(function (e) {
        mX = e.pageX - this.offsetLeft;
        mX2 = Math.min(Math.max(10, mX - mPadd), mmAA) * mmAAr;
    });

    setInterval(function () {
        posX += (mX2 - posX) / damp;
        $th.css({
            marginLeft: -posX * wDiff
        });
    }, 50);

});



////////메뉴 누르기
		
		$('#menu1 .box').click(function(){
			$('#first').addClass('scrlOff'); 
			$('#popup1').show();
		});

		$('.close').click(function(){ 
			$(this).parents(".overlay").hide();
			return false;//a태그 링크를 하지못하게 하는역활
		});
		$('#menu2 .box').click(function(){
			$('#first').addClass('scrlOff'); 
			$('#popup2').show();
		})
		$('.close').click(function(){
			$(this).parents(".overlay").hide();
			return false;//a태그 링크를 하지못하게 하는역활
		});
		$('#menu3 .box').click(function(){
			$('#first').addClass('scrlOff'); 
			$('#popup3').show();
		})
		$('.close').click(function(){
			$(this).parents(".overlay").hide();
			return false;//a태그 링크를 하지못하게 하는역활
		});


		


		//article 위에서 마우스 휠을 움직이면
  		$('article').on('mousewheel', function(event, delta){
  		if(delta > 0){//마우스 휠을 올렷을 때
  			//현재 article의 이전 article의 상단의 위치로
  			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리
  			var prev = $(this).prev().offset().top;
  			$('html, body').stop().animate({'scrollTop':prev },1000, 'easeOutBounce');
  		} else if (delta < 0) {//마우스 휠을 내렸을 때
  			var next = $(this).next().offset().top;
  			$('html, body').stop().animate({'scrollTop':next},1000, 'easeOutBounce');
  		}
  	});

  	});