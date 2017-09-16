$(function() {
	
	
	var vertical_li_len=$(".bottom-nav-vertical .bottom-nav-ul li").length
	var vertical_li_w=$(".bottom-nav-vertical .bottom-nav-ul li").width()
	$(".bottom-nav-vertical .bottom-nav-ul").width(vertical_li_len*vertical_li_w+12)
	
	
	var transverse_li_len=$(".bottom-nav-transverse .bottom-nav-ul li").length
	var transverse_li_w=$(".bottom-nav-transverse .bottom-nav-ul li").width()
	$(".bottom-nav-transverse").width(transverse_li_len*transverse_li_w+12)
	
	//点击导航跳转到对应图片的第一张
	
	//------  横屏_nav  ------
	$(".bottom-nav-vertical .bottom-nav-ul li").tap(function(){
		var index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".bottom-nav-transverse .bottom-nav-ul li").eq(index).addClass("select").siblings().removeClass("select")
	})
	
	//------  竖屏_nav  ------
	$(".bottom-nav-transverse .bottom-nav-ul li").tap(function(){
		var index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".bottom-nav-vertical .bottom-nav-ul li").eq(index).addClass("select").siblings().removeClass("select")
	})
	
	var houseStyleS = new IScroll('.bottom-nav-vertical .bottom-nav-box', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
})