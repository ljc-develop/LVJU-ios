$(function() {

	var meta_w = $("html").width()
	var meta_h = $("html").height()
	if(meta_h > meta_w) {
		var album_h = $(".album-pushsection").height()
		var img_box = $(".album-pushsection .img-box").height()
		$(".album-pushsection .top-txt").height((album_h - img_box) * 0.39)
		$(".album-pushsection .bottom-nav").height((album_h - img_box) * 0.61)
	}


})