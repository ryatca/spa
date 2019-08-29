$(function(){
	$("#icon").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).html('<i class="fas fa-bars"></i>');
			return false;
		}else{
			$(this).addClass("active");
			$(" i",this).addClass("fa-bars").removeClass("fa-times");
			$(this).html('<i class="fas fa-times"></i>');
			return false;
		}
	})

	$("#gotop").fadeOut(200);

	$(window).scroll(function(){
		const posiY = $(document).scrollTop();
		console.log(posiY);
		if(posiY >= 0 && posiY <= 400){
			if($("#gotop").css("display") != "none"){
				$("#gotop").fadeOut(200);
			}
		}else{
			if($("#gotop").css("display") == "none"){
				$("#gotop").fadeIn();
			}
		}
	})
})