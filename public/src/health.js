function loadFiles(file){
	$(".b2-upload-box-img span").html(file.name);
	// $(".b2-upload-box-img-show img").attr('src', file.code);

	// html5 file reader
	var reader = new FileReader();

	var imgFile;

	reader.onload = function(e){
		imgFile = e.target.result;
		$(".b2-upload-box-img-show img").attr('src', imgFile);
	}
	reader.readAsDataURL(file);
}

$("#b2-upload").click(function(event) {
		/* Act on the event */
		$(".b2-upload-box-img-show img").attr('src', '');
		$(".b2-upload-box-img span").html("未选择图片");
		
		var disaster = "锈病";
		var degree = ["健康","较轻","轻微"];

		var t_degree = degree[ Math.floor(3*Math.random())];
		$("#special1").html("锈病");
		$("#special2").html(t_degree);
});
