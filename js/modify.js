
$(function(){
	

	var $win = $(this),
		winWidth = $win.width(), 
		winHeight = $win.height(),
		slideWidth = $('.slider').width(),
		top_blockWidth = $('.top_block').width()




	

		$('.content_link').hover(function(){

			var $this = $(this),
				$magnifier = $this.find('.magnifier'),
				$bgbg = $this.find('.bgbg')
			$bgbg.stop().animate({
				opacity: 0.8
			}, 200);

			$magnifier.stop().animate({
				top: 0
			}, 200)	


		},function(){

			var $this= $(this),
				$magnifier= $this.find('.magnifier'),
				$bgbg= $this.find('.bgbg')

			$bgbg.stop().animate({
				opacity: .2
			}, 400)	;

			$magnifier.stop().animate({
				top: -250
			}, 400)	

		})



		$('.cool_link').hover(function(){

			var $this = $(this),
				$magnifier = $this.find('.magnifier'),
				$bgbg = $this.find('.bgbg')
			$bgbg.stop().animate({
				opacity: 0.8
			}, 200);

			$magnifier.stop().animate({
				top: 0
			}, 200)	


		},function(){

			var $this= $(this),
				$magnifier= $this.find('.magnifier'),
				$bgbg= $this.find('.bgbg')

			$bgbg.stop().animate({
				opacity: .2
			}, 400)	;

			$magnifier.stop().animate({
				top: -250
			}, 400)	

		})

	
	var $item_img = $('.item').find('img')

		$item_img.hover(function(){

			$(this).stop().animate({
				width: 110,
				height: 110,
				opacity: .7
			}, 200)

		},function(){

			$(this).stop().animate({
				width: 100,
				height: 100,
				opacity: 1
			}, 200)

		})








/*
		var $contentWodth= $('.content').width(),
			$needWidht=  $contentWodth*0.3

		$(".content .content_link").css({
			height: $needWidht
		})	

		$(".content").css({
			marginLeft: $needWidht*0.4
		})	



	$(window).resize(function(){
		
		var $contentWodth= $('.content').width(),
			$needWidht=  $contentWodth*0.3
	
		$(".content .content_link").css({
			height: $needWidht
		})	

		$(".content").css({
			marginLeft: $needWidht*0.4
		})	
	})

*/
	



});


$(function(){


	$('a[rel^=prettyPhoto]').prettyPhoto({
		
		show_title: false,
		theme:'light_square',
		social_tools: ''
	

		});


});