
$(function(){
	

	$('#position_a').click(function(){
			$.scrollTo('.section_a', 200);
			return false	
		});

	$('#position_b, #arrow_a ').click(function(){
			$.scrollTo('.section_b', 200);
			return false	
		});

	$('#position_c, #arrow_b').click(function(){
			$.scrollTo('.section_c', 200);
			return false	
		});

	$('#position_d, #arrow_c').click(function(){
			$.scrollTo('.section_d', 200);
			return false	
		});

	$('#position_e, #arrow_d').click(function(){
			$.scrollTo('.section_e', 200);
			return false	
		});


	$('#go_home').click(function(){
			$.scrollTo('0', 200);
			return false	
		});


  var pillar_w = $(".pillar_pc").width()
	$(".pillar_pc .pillar_box").css({
		height: pillar_w*0.18

	})	


});

/*====[resize]====*/
$(window).resize(function(){

    var pillar_w = $(".pillar_pc").width()
	$(".pillar_pc .pillar_box").css({
		height: pillar_w*0.18
		//paddingTop: pillar_w* 0.09
	})	


})








