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
