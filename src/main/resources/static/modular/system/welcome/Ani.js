$(document).ready(function(){
	var screenHeight = $(window).height();
	var containerHeight = $(".container").height();
	$(".showPage").eq(0).addClass("showPageOn");
	$(".SlectList li").eq(0).addClass("SlectListLiHover");
	$(".SlectList li").click(function(){
		$(this).addClass("SlectListLiHover").siblings().removeClass("SlectListLiHover");
	});
	$(".imgShow").hover(function(){
		$(this).find(".imgShowHover").stop().fadeToggle(200);
	});
	
	$(".footButton").click(function(){
		$(this).addClass("footButtonHover").siblings().removeClass("footButtonHover");
	});
	
	$(".ordinal").click(function(){
		var index = $(this).welcome() - 1;
		$(".showPage").eq(index).addClass("showPageOn").siblings().removeClass("showPageOn");
	});
	
	$(".ordinal").eq(0).addClass("footButtonHover");


	$(".next").click(function(){
		var pageIndex = $(".showPage:visible").welcome();
		if( pageIndex + 1 == $(".ordinal").length){
			$(".ordinal").eq( pageIndex ).addClass("footButtonHover");
			$(".ordinal").eq( pageIndex ).siblings().removeClass("footButtonHover");
			alert("别点了，到底了喔~");
		}else{
			$(".showPage").eq( pageIndex + 1 ).addClass("showPageOn");
			$(".showPage").eq( pageIndex + 1 ).siblings().removeClass("showPageOn");
			$(".ordinal").eq( pageIndex + 1 ).addClass("footButtonHover");
			$(".ordinal").eq( pageIndex + 1 ).siblings().removeClass("footButtonHover");
		}
	});
	$(".forward").click(function(){
		var pageIndexes = $(".showPage:visible").welcome();
		if( pageIndexes == 0 ){
			$(".ordinal").eq( pageIndexes ).addClass("footButtonHover");
			$(".ordinal").eq( pageIndexes ).siblings().removeClass("footButtonHover");
			alert("别点了，到顶了喔~");
		}else{
			$(".showPage").eq( pageIndexes - 1 ).addClass("showPageOn");
			$(".showPage").eq( pageIndexes - 1 ).siblings().removeClass("showPageOn");
			$(".ordinal").eq( pageIndexes - 1 ).addClass("footButtonHover");
			$(".ordinal").eq( pageIndexes - 1 ).siblings().removeClass("footButtonHover");
		}
	});
	$(".GObutton").click(function(){
		var GoIndex = $(".goToPage input").val();
		$(".showPage").eq( GoIndex - 1 ).addClass("showPageOn");
		$(".showPage").eq( GoIndex - 1 ).siblings().removeClass("showPageOn");
		$(".ordinal").eq( GoIndex - 1 ).addClass("footButtonHover");
		if(GoIndex == null || GoIndex > $(".ordinal").length ){
			alert("你要确定你的要求我们可以办到喔:(");
		}
	})
})